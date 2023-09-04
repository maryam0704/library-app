
<template>
    <div>
        <h2>Your Borrowed Books</h2>
        <ul>
            <li v-for="book in borrowedBooks" :key="book.title">
                {{ book.title }} by {{ book.reservedBy }}
            </li>
        </ul>

        <h2 v-if="isAdmin">all the borrowed books</h2>
        <ul v-if="isAdmin">
            <li v-for="book in adminBorrowedBooks" :key="book.title">
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
