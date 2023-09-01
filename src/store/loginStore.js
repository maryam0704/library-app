import { defineStore } from "pinia";

export const useloginStore = defineStore("loginStore", {
  state: () => ({
    authenticatedUser: "",
    isAuthenticated: false,
  }),
  actions: {
    authenticate(user) {
      if (user === "admin" || user === "userOne" || user === "userTwo") {
        this.authenticatedUser = user;
        this.isAuthenticated = true;
      } else {
        this.authenticatedUser = "";
        this.isAuthenticated = false;
      }
    },
    logout() {
      this.authenticatedUser = "";
      this.isAuthenticated = false;
    },
  },
});
