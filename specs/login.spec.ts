var expect = require('chai').expect
import LoginPage from '../pages/login.page'

describe.skip('login form', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });
    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});