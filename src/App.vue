<template>
  <div id="app">
    <h1>Library App</h1>

    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/user">User Page</router-link>
        <router-link to="/admin">Admin Page</router-link>
        <router-link to="/userOne">User One</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
// import UserList from "@/components/UserList.vue";

export default {
  name: "App",
  // components: {
  //   UserList,
  // },
//   setup() {
//     const allUsers = ["admin", "userOne"];
//     const loginStore = useloginStore();

//     const loginUser = (user) => {
//       loginStore.authenticate(user);
//     };
//     return {
//       allUsers,
//       loginUser,
//       loginStore, 
//     };
//   },
};
</script>
