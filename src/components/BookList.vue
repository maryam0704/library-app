
<template>
    <div id="app">
        <h1>Library App</h1>
        <div v-for="book in books" :key="book._id">
            <h2>{{ book.title }}</h2>
            <p>{{ book.author }}</p>
            <p v-if="book.isReserved">Reserved by: {{ book.reservedBy }}</p>
            <p v-else>Available</p>
            <button @click="reserveBook(book._id)" v-if="!book.isReserved">Reserve</button>
        </div>
    </div>
</template>

<script>
export default {
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
            try {
                const response = await fetch(`https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books/${bookId}/reserve`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                   //need to make it work with the user name from database
                    body: JSON.stringify({ reservedBy: "User123" }), 
                });

                if (response.status === 200) {
                    console.log("Book reserved successfully");
                    this.fetchBooks(); 
                }
            } catch (error) {
                console.error("An error occurred while reserving the book:", error);
            }
        },
    },
    mounted() {
        this.fetchBooks();
    },
};
</script>



