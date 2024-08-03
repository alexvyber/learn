const API = {
	endpoint: "/auth/",
	// ADD HERE ALL THE OTHER API FUNCTIONS
	makePostRequest: async (url, data) => {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	},

	login: async (event) => {
		if (event) event.preventDefault();
		const user = {
			email: document.getElementById("login_email").value,
			password: document.getElementById("login_password").value,
		};
		const response = await API.login(user);
		Auth.postLogin(response, {
			...user,
			name: response.name,
		});
	},

	register: async (event) => {
		event.preventDefault();
		const user = {
			name: document.getElementById("register_name").value,
			email: document.getElementById("register_email").value,
			password: document.getElementById("register_password").value,
		};
		const response = await API.register(user);
		Auth.postLogin(response, user);
	},

	postLogin: (response, user) => {
		if (response.ok) {
			// Credential Management API
			if (window.PasswordCredential && user.password) {
				const credential = new PasswordCredential({
					name: user.name,
					id: user.email,
					password: user.password,
				});
				navigator.credentials.store(credential);
			}

			Auth.isLoggedIn = true;
			Auth.account = user;
			Auth.updateStatus();

			Router.go("/account");
		} else {
			alert(response.message);
		}
	},

	autoLogin: async () => {
		if (window.PasswordCredential) {
			const credentials = await navigator.credentials.get({ password: true });
			try {
				document.getElementById("login_email").value = credentials.id;
				document.getElementById("login_password").value = credentials.password;
				Auth.login();
			} catch (e) {}
		}
	},

	logout: () => {
		if (window.PasswordCredential) {
			navigator.credentials.preventSilentAccess();
		}
		Auth.isLoggedIn = false;
		Auth.account = null;
		Auth.updateStatus();
		Router.go("/");
	},
};

export default API;
