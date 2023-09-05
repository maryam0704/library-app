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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;

}
body {
  background-image: url('https://e0.pxfuel.com/wallpapers/860/271/desktop-wallpaper-books-library-shelves-lighting-book-library-background-cool-library.jpg');
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
}

.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: rgba(33, 35, 59, 0.894);
  width: 50%;
  margin: 0 auto;
  /* border-radius: 10px; */
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 33px;
  padding: 10px;
 
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
}

@media (min-width: 768px) {
  .navbar {
    width: 80%;
    flex-direction: row;
    font-size: 28px;
    justify-content: center; 
  }
}


.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 10px;
  font-size: 18px;
  padding: 10px;
}

@media (min-width: 380px) {
  .navbar {
    width: 80%;
    flex-direction: row; 
    font-size: 28px; 
    justify-content: center; 
  }
}


.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 10px; 
  font-size: 18px;
  padding: 10px;
}
</style>