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

 methods: {
        async reserveBook(bookId) {
            try {
                const response = await fetch(
                    `https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books/${bookId}/reserve`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ reservedBy: 'userTwo' }), 
                    }
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.message);
                this.$emit('update-books');
            } catch (error) {
                console.error(error);
            }
        },
    },



};      

    
    


</script>
