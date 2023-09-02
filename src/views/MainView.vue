<template>
    <div>
        <h1></h1>
       <!-- <button @click="fetchBooks">browse Books</button> -->
        <BookList :books="books" />
    </div>
</template>

<script>
import BookList from '@/components/BookList.vue';

export default {
    components: {
        BookList,
    },
    data() {
        return {
            books: [],
        };
    },
  
    methods: {
        async fetchBooks() {
            try {
                const response = await fetch('https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.books = data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
