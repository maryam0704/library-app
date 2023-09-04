
<template>
    <div id="app">
        <h1>Library App</h1>
        <div class="book">
        <div v-for="book in books" :key="book._id" class="books"  >
            <h2>{{ book.title }}</h2>
            <p>{{ book.author }}</p>
            <p v-if="book.isReserved">Reserved by: {{ book.reservedBy }}</p>
            <p v-else>Available</p>

            <button @click="reserveBook(book._id)" v-if="!book.isReserved">Reserve</button>
               <DeleteBook :bookId="book._id" @bookDeleted= "handleBookDeleted" />
        </div>
    </div>
    </div>
</template>

<script>
import { useloginStore } from '@/store/loginStore';
import DeleteBook from '@/components/DeleteBook.vue';

export default {

     components: {
        DeleteBook,
    },
    data() {
       

        return {
            books: [],
        };

        
    },

    methods: {
        async fetchBooks() {
            try {
                const response = await fetch("https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books");
                const data = await response.json();
                this.books = data;
            } catch (error) {
                console.error("An error occurred while fetching books:", error);
            }
        },

        async reserveBook(bookId) {
            const loginStore = useloginStore();
            if (loginStore.isAuthenticated) {
                 console.log(loginStore.authenticatedUser);
                try {
                    const response = await fetch(`https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books/${bookId}/reserve`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                       
                        // need to make it work with the user name from the database
                        body: JSON.stringify({ reservedBy: loginStore.authenticatedUser }),
                    });

                    if (response.status === 200) {
                        console.log("Book reserved successfully");
                        this.fetchBooks();
                    }
                } catch (error) {
                    console.error("An error occurred while reserving the book:", error);
                }
            } else {
                console.log("User is not authenticated. Please log in to reserve a book.");
            }
            console.log("Reserving book not wokring ");
        },
        handleBookDeleted() {
            
            this.fetchBooks();
        },
    },
      

    mounted() {
        this.fetchBooks();
    },
};
</script> 

<style scoped>
#app {
    max-width: 1050px;
    margin: 0 auto;
    padding: 20px;
}

 .books {
   font-size: 20px;
    background-color: #1e1d1d72;
      border: 2px solid black;
    /* border: 2px solid black; */
    /* background-color: #f9f9f9; */
     padding: 10px; 
    border: 1px solid  

} 
.book{
    
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
   /* grid-template-columns: minmax(800px, 500px) ; */
/* grid-template-rows:1fr 1fr 1fr; */
      grid-gap: 10px;
     grid-template-columns: repeat(3, 1fr); 
}
/* h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    margin: 0;
}

p {
    margin: 5px 0;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #0056b3;
}

p.reserved {
    color: #ff0000;
} */
</style>
