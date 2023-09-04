
<template>
    <div class="borrowed-books">
        <h2 class="section-title">Your Borrowed Books</h2>
        <ul>
            <li v-for="book in borrowedBooks" :key="book.title" class="book-item">
                {{ book.title }} by <strong>{{ book.reservedBy }}</strong>
            </li>
        </ul>

        <h2 v-if="isAdmin"  class="section-title">all the borrowed books</h2>
        <ul v-if="isAdmin">
            <li v-for="book in adminBorrowedBooks" :key="book.title"  class="book-item">
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
            adminBorrowedBooks: [],
            isAdmin: false,
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

        async fetchAdminBorrowedBooks() {
            try {
                const loginStore = useloginStore();

                if (loginStore.isAdmin) {
                    const response = await fetch(
                        "https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/admin/borrowedbooks"
                    );

                    if (response.ok) {
                        const data = await response.json();
                        this.adminBorrowedBooks = data;
                    } else {
                        console.error("Failed to fetch admin borrowed books");
                    }
                } else {
                    console.log("You must be an admin to access this feature.");
                }
            } catch (error) {
                console.error("An error occurred while fetching admin borrowed books:", error);
            }
        },
    },
    mounted() {
        const loginStore = useloginStore();
        this.isAdmin = loginStore.isAdmin;
        this.fetchBorrowedBooks();
        this.fetchAdminBorrowedBooks();
    },
};
</script>
<style scoped>
.borrowed-books {
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.413);
    color: bisque;
    width: 40%;
    margin: 0 auto;
    padding: 35px;
    letter-spacing: 1.5px;
    word-spacing: 2px;
}
.section-title {
    font-size: 35px;
    margin-bottom: 10px;
}

.book-item {
   
    color: rgb(255, 255, 255);
    background-color: rgba(131, 129, 129, 0.527);
    font-size:2rem;
    margin-bottom: 5px;
    padding-left: 15px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 0 50%;
    list-style: none;
    border: 2px solid rgba(255, 255, 255, 0.698);
    border-radius: 25px;
    padding: 10px;
    width: 70%;
    margin: 15px auto;
   ;
}
</style>