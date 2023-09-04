
<template>
    <div>
        <p v-if="store.isAuthenticated && store.isAdminUser">
            Authenticated User: {{ store.authenticatedUser }}
        </p>
        <div v-if="store.isAuthenticated && store.isAdminUser">
            <h1>Welcome, Admin!</h1>
            <form @submit.prevent="addBook">
                <label for="title">Book Title:</label>
                <input v-model="newBook.title" id="title" required />

                <label for="author">Author:</label>
                <input v-model="newBook.author" id="author" required />

                <label for="genre">Genre:</label>
                <input v-model="newBook.genre" id="genre" required />

                <button>Add New Book</button>
            </form>
            <button @click="logout">Logout</button>
        </div>
        <div v-else>
            <p>Please log in as an admin.</p>
        </div>
    </div>
</template>

<script>
import { useloginStore } from "@/store/loginStore";

export default {
    name: "AdminPage",
    setup() {
        const store = useloginStore();
        const newBook = {
            title: "",
            author: "",
            genre: "",
        };

        const addBook = async () => {
            try {
                const response = await fetch(
                    "https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newBook),
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                newBook.title = "";
                newBook.author = "";
                newBook.genre = "";

                const data = await response.json();
                console.log(data);
                fetchBooks();
            } catch (error) {
                console.error(error);
            }
        };

        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    "https://reimagined-goldfish-4j7g454xggrx257px-3000.app.github.dev/books"
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        const logout = () => {
            store.logout();
        };

        return {
            store,
            newBook,
            addBook,
            fetchBooks,
            logout,
        };
    },
};
</script>
