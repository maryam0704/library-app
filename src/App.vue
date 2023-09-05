<template>
  <div id="app">
    <!-- <h1>Library App</h1> -->

    <header>
      <nav class="navbar">
        <!-- <router-link to="/">Home</router-link> -->
        <router-link to="/">User Page</router-link>
        <router-link to="/admin">Admin Page</router-link>
        <router-link to="/userOne">borrowed books</router-link>
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


<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

body {
  background-image: url('https://e0.pxfuel.com/wallpapers/860/271/desktop-wallpaper-books-library-shelves-lighting-book-library-background-cool-library.jpg');
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  margin: 0; 
  padding: 0; 
}


.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  background-color: rgba(2, 2, 2, 0.474);
  width: 60%; 
  font-size: 22px; 
  padding: 10px;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
}


.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 10px; 
  font-size: 18px;
  padding: 10px;
}


/* @media (min-width: 380px) {
  .navbar {
    display: grid;
     grid-template-columns: repeat(1, 2fr); 
    font-size: 28px;

  }
} */

</style>