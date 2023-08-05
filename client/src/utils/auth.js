import decode from "jwt-decode";

class AuthService {
    // this will retrieve data saved in the token
    getProfile() {
        return decode(this.getToken());
    }

    // this will check if the user is logged in 
    loggedIn() {
        // this will check if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    // this will check if the token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            } 
            else {
            return false;
        } 
    } catch (err) {
            return false;
        }
    }

    getToken() {
        // this retrieves the user token from the localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // this saves the user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        // this will clear the user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the app
        window.location.assign('/');
    }
}

export default new AuthService();