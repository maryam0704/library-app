/* eslint-disable */
<template>
    <div>
        <h1>Welcome, Admin!</h1>
    <form @submit.prevent="addBook">
          <label for="title">book title:</label>
          <input v-model="newBook.title" id="title" required />

          <label for="author">author:</label>
          <input v-model="newBook.author" id="author" required />

            <label for="genre">genre:</label>
            <input v-model="newBook.genre" id="genre" required />

     <button>Add New Book</button>
        </form>
       
      
    </div>
</template>

<script>
export default {

    name: "addBook",

    data() {
        return {
            newBook: {
                // title: " ",
                // author: " ",
                // genre: " ",
            },
        };
    },

};
</script>
