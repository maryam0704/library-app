<template>
  <div id="app">
    <h1>Library App</h1>

    <header>
      <nav>
        <router-link to="/">Home</router-link>
  <router-link to="/user">User Page</router-link>
  <router-link to="/admin">Admin Page</router-link>

      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>


  
    <UserList :allUsers="allUsers" @userSelected="loginUser" />
     <!-- <AdminPage />  -->
    <!-- <UserOne />
    <UserTwo />
    <Guest /> -->
  </div>
</template>

<script>
import { useloginStore } from "@/store/loginStore";
import UserList from "@/components/UserList.vue";
// import AdminPage from "@/components/AdminPage.vue";
// import UserOne from "@/components/UserOne.vue";
// import UserTwo from "@/components/UserTwo.vue";
// import Guest from "@/components/Guest.vue";

export default {
  name: "App",
  components: {
    UserList,
    // AdminPage,    // UserOne,
    // UserTwo,
    // Guest,
  },
  setup() {
    const allUsers = ["admin", "userOne", "userTwo"];
    const loginStore = useloginStore();

    const loginUser = (user) => {
      loginStore.authenticate(user);
    };
    return {
      allUsers,
      loginUser,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

header nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

main {
  padding: 1rem;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
}
</style>
