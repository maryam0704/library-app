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
                title: " ",
                author: " ",
                genre: " ",
            },
        };
    },

    methods: {
        async addBook() {
            try {
                // if (

                // this.newBook.title &&
                //     this.newBook.author &&
                //     this.newBook.genre

                //       ) {
               
                // this.newBook.title = " ";
                // this.newBook.author = " ";
                // this.newBook.genre = " ";
                //   }
                const response = await fetch('https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.newBook),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                this.newBook.title = " ";
                this.newBook.author = " ";
                this.newBook.genre = " ";
                this.$emit("new book added");

                const data = await response.json();
                console.log(data);
                this.fetchBooks();

                console.log("Book added successfully");
            } catch (error) {
                console.error(error);
            }
        },
        async fetchBooks() {
            
            try {
                const response = await fetch('https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Update the books data with the new data
                this.$data.books = data;
            } catch (error) {
                console.error(error);
            }
        },


    


        },
    

};
</script>
