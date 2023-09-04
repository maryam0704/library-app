import { defineStore } from "pinia";

export const useloginStore = defineStore("loginStore", {
  state: () => ({
    authenticatedUser: "",
    isAuthenticated: false,
    isAdmin: false,
  }),
  actions: {
    async authenticate(user) {
      try {
        const response = await fetch(
          `https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/api/users/${user}`
        );

      

        if (response.ok) {
          this.authenticatedUser = user;
          this.isAuthenticated = true;

          if (user === "admin") {
            this.isAdmin = true;
          } else if (user === "userOne") {
            this.isAdmin = false;
          }
        }
        else
        {
        
          console.error("Authentication failed: Invalid username ");
          this.authenticatedUser = "";
          this.isAuthenticated = false;
          this.isAdmin = false;
        }
       }
      catch (error) {
        console.error("Authentication failed:", error);
        this.authenticatedUser = "";
        this.isAuthenticated = false;
        this.isAdmin = false;
        throw error;
      }
    },
        
      
    logout() {
      this.authenticatedUser = "";
      this.isAuthenticated = false;
      this.isAdmin = false;
    },
  },
  getters: {
    isAdminUser: (state) => state.isAdmin || false,
  },
});
