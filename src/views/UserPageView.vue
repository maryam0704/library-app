<template>
    <div>
        <h1>Welcome, User!</h1>
       <button @click="fetchBooks">browse Books</button>
        <BookList v-if="books.length > 0" :books="books" :isUser="true" @update-books="fetchBooks" />

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
    
    //  methods: {
    //     async fetchBooks() {
    //         try {
    //             const response = await fetch('https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             let data;
    //             try {
    //                 data = await response.json();
    //             } catch (error) {
    //             //    console.log('Response is not valid JSON');
    //                 console.error('Response is not valid JSON:', response);
    //                 return;
    //             }
    //             this.books = data;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     },
    // },
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
                console.error('An error occurred while fetching books:', error);
            }
        },
    },

    
};
</script>
<style scoped>
.unlike {
  background-color: red;
}

</style>