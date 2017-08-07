<?php

namespace App\Socialite;

use Illuminate\Support\Arr;
use Laravel\Socialite\Two\User;
use Laravel\Socialite\Two\AbstractProvider;
use Laravel\Socialite\Two\ProviderInterface;
use Laravel\Socialite\Two\InvalidStateException;
use Mockery\Exception;

class DingtalkProvider extends AbstractProvider implements ProviderInterface
{
    /**
     * The scopes being requested.
     *
     * @var array
     */
    protected $scopes = ['snsapi_login'];

    private $accessToken;
    private $openid;

    /**
     * {@inheritdoc}
     */
    protected function getAuthUrl($state)
    {
        return $this->buildAuthUrlFromBase('https://oapi.dingtalk.com/connect/qrconnect', $state);
    }

    /**
     * {@inheritdoc}
     */
    protected function getTokenUrl()
    {
        return 'https://oapi.dingtalk.com/sns/get_sns_token?access_token=' . $this->accessToken;
    }

    /**
     * {@inheritdoc}
     */
    protected function getUserByToken($token)
    {
        $userUrl = 'https://oapi.dingtalk.com/sns/getuserinfo?sns_token=' . $token;

        $response = $this->getHttpClient()->get($userUrl, [
            'headers' => ['Accept' => 'application/json'],
        ]);
        $response = json_decode($response->getBody(), true);

        if (empty($response['user_info'])) {
            throw new Exception('获取persistent_code失败');
        }

        return $response['user_info'];
    }

    /**
     * {@inheritdoc}
     */
    protected function mapUserToObject(array $user)
    {
        return (new User)->setRaw($user)->map([
            'id' => Arr::get($user, 'openid'),
            'nickname' => Arr::get($user, 'nick'),
            'name' => Arr::get($user, 'nick'),
            'email' => null,
            'avatar' => null,
        ]);
    }

    protected function getCodeFields($state = null)
    {
        $fields = [
            'appid' => $this->clientId,
            'redirect_uri' => $this->redirectUrl,
            'scope' => $this->formatScopes($this->getScopes(), $this->scopeSeparator),
            'response_type' => 'code',
            'state' => $state,
        ];

        return array_merge($fields, $this->parameters);
    }

    /**
     * Get the POST fields for the token request.
     *
     * @param  string $code
     * @return array
     */
    protected function getTokenFields($code)
    {
        return [
            'openid' => $this->openid,
            'persistent_code' => $code,
        ];
    }

    public function user()
    {
        if ($this->hasInvalidState()) {
            throw new InvalidStateException;
        }

        $response = $this->getAccessTokenResponse($this->getCode());

        $user = $this->mapUserToObject($this->getUserByToken(
            $token = Arr::get($response, 'sns_token')
        ));

        return $user->setToken($token)
            ->setRefreshToken(Arr::get($response, 'sns_token'))
            ->setExpiresIn(Arr::get($response, 'expires_in'));
    }

    /**
     * Get the access token response for the given code.
     *
     * @param  string $code
     * @return array
     */
    public function getAccessTokenResponse($code)
    {
        $persistent = $this->getPersistentCode($code);

        $response = $this->getHttpClient()->post($this->getTokenUrl(), [
            'headers' => ['Accept' => 'application/json'],
            'body' => json_encode($this->getTokenFields($persistent['persistent_code'])),
        ]);

        return json_decode($response->getBody(), true);
    }

    private function getPersistentCode($code = '')
    {
        $this->getToken();

        $url = "https://oapi.dingtalk.com/sns/get_persistent_code?access_token={$this->accessToken}";

        $response = $this->getHttpClient()->post($url, [
            'headers' => ['Accept' => 'application/json'],
            'body' => json_encode(['tmp_auth_code' => $code]),
        ]);

        $response = json_decode($response->getBody(), true);

        if (empty($response['persistent_code'])) {
            throw new Exception('获取persistent_code失败');
        }

        $this->openid = $response['openid'];
        return $response;
    }

    private function getToken()
    {
        $url = "https://oapi.dingtalk.com/sns/gettoken?appid={$this->clientId}&appsecret={$this->clientSecret}";

        $response = $this->getHttpClient()->get($url, [
            'headers' => ['Accept' => 'application/json'],
        ]);
        $response = json_decode($response->getBody(), true);

        if (empty($response['access_token'])) {
            throw new Exception('获取access_token失败');
        }

        $this->accessToken = $response['access_token'];
        return $response;
    }

}
