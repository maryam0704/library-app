<template>
    <div>
       
        <button @click="deleteBook" v-if="isAdmin">Delete Book</button>
        <div v-if="message">{{ message }}</div>
    </div>
</template>

<script>
import { useloginStore } from '@/store/loginStore';

export default {
    props: {
        bookId: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            message: "",
        };
    },
    computed: {
        isAdmin() {
            const loginStore = useloginStore();
            return loginStore.isAdmin;
        },
    },
    methods: {
        async deleteBook() {
            const loginStore = useloginStore();
            if (loginStore.isAuthenticated) {
                try {
                    const response = await fetch(`https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books/${this.bookId}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (response.status === 204) {
                      
                        this.message = "Book deleted successfully.";
                        this.$emit("bookDeleted");
                        //  this.books = this.books.filter((book) => book._id !== this.bookId);
                    } else if (response.status === 404) {
                     
                        this.message = "Book not found.";
                    } else {
                        this.message = "Failed to delete book.";
                    }
                } catch (error) {
                    console.error("An error occurred while deleting the book:", error);
                    this.message = "An error occurred while deleting the book.";
                }
            } else {
                this.message = "User is not authenticated. Please log in to delete a book.";
            }
        },
    },
};
</script>