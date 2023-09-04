
<template>
    <div>
        <UserList :allUsers="allUsers" @userSelected="loginUser" />

        <h1>Welcome  {{ authenticatedUser }} </h1>
        <button @click="fetchBooks">Browse Books</button>
        <BookList v-if="books.length > 0" :books="books" :isUser="true" @update-books="fetchBooks" />
    </div>
</template>


<script>
import BookList from '@/components/BookList.vue';
import { useloginStore } from "@/store/loginStore";
import UserList from "@/components/UserList.vue";

export default {
    components: {
        BookList,
        UserList,
    },
    data() {
        return {
            allUsers: ["admin", "userOne"],
            books: [],
             authenticatedUser: ""
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
                console.error('An error occurred while fetching books:', error);
                this.books = []; 
            }
        },
        async loginUser(user) {
            const loginStore = useloginStore();

            try {
                await loginStore.authenticate(user);
                if (loginStore.isAuthenticated) {
                    // to get the logged in user name on the page
                 this.authenticatedUser = loginStore.authenticatedUser;
                    console.log(`Logged in as ${user}`);
                  
                } else {
                    console.error(`Login failed for user ${user}`);
                }
            } catch (error) {
                console.error(`An error occurred while logging in as ${user}:`, error);
            }
        },
    },
};
</script>