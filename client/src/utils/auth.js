import decode from "jwt-decode";

class AuthService {
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // this retrieves the user token from the localStorage
        return localStorage.getItem("id_token");
    }

    login(idToken) {
        // this saves the user token to localStorage
        localStorage.setItem("id_token", idToken);

        window.location.assign("/");
    }

    logout() {
        // this will clear the user token and profile data from localStorage
        localStorage.removeItem("id_token");
        // this will reload the page and reset the state of the app
        window.location.assign("/");
    }
}