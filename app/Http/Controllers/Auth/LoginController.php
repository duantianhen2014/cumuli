<?php

namespace App\Http\Controllers\Auth;

use Socialite;
use App\UserSocialite;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect the user to the authentication page.
     *
     * @param string $driver
     * @return mixed
     */
    public function redirectToProvider($driver = 'github')
    {
        if (!config("services.{$driver}")) {
            return abort(404);
        }
        return Socialite::driver($driver)->redirect();
    }

    /**
     * Obtain the user information.
     *
     * @param UserSocialite $userSocialite
     * @param string $driver
     * @return \Illuminate\Http\RedirectResponse|void
     */
    public function handleProviderCallback(UserSocialite $userSocialite, $driver = 'github')
    {
        if (!config("services.{$driver}")) {
            return abort(404);
        }

        try {
            $user = Socialite::driver($driver)->user();
        } catch (\Exception $e) {
        }

        if (empty($user)) {
            return abort(404);
        }

        $userSocialite->login($user, $driver);
        return redirect()->intended($this->redirectPath());
    }
}
