<template>
  <div id="app">
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


  </div>
</template>

<script>
export default {
  name: 'App',
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
