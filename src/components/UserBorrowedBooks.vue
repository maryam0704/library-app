
<template>
    <div>
        <h2>Your Borrowed Books</h2>
        <ul>
            <li v-for="book in borrowedBooks" :key="book.title">
                {{ book.title }} by {{ book.reservedBy }}
            </li>
        </ul>

       
    </div>
</template>

<script>
import { useloginStore } from '@/store/loginStore';

export default {
    data() {
        return {
            borrowedBooks: [],
          
        };
    },
    methods: {
        async fetchBorrowedBooks() {
            try {
                const loginStore = useloginStore();
                const response = await fetch(
                    `https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/reservedbooks/${loginStore.authenticatedUser}`
                );

                if (response.ok) {
                    const data = await response.json();
                    this.borrowedBooks = data;
                    console.log(this.borrowedBooks);
                } else {
                    console.error("Failed to fetch borrowed books");
                }
            } catch (error) {
                console.error("An error occurred while fetching borrowed books:", error);
            }
        },

        
    },
    mounted() {
        const loginStore = useloginStore();
       
        this.fetchBorrowedBooks();
        
    },
};
</script>
