
<template>
    <div>
        <UserList :allUsers="allUsers" @userSelected="loginUser" />
<div class="welcome">
        <h1>Welcome  {{ userDisplayName }} </h1></div>
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
             
        };
    },

     computed: {
        userDisplayName() {
             const loginStore = useloginStore();
            // using ternary operator
            // instead of if/else
            return loginStore.isAuthenticated ? loginStore.authenticatedUser : 'Guest';
        },
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
<style  scoped lang="scss">



div {
    padding: 20px;
    text-align: center;
}


.welcome{
    width:30%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.489);
}

h1 {
    font-size: 4rem;
    // margin-top: 20px;
    color: rgb(226, 234, 226);
  
  
}


button {
    background-color: #0078d4;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #005a9e;
}


.user-list {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}


.user-list button {
    background-color: #0078d4;
    color: white;
    border: 2px solid black;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
}

.user-list button:hover {
    background-color: #005a9e;
}

@media (min-width: 768px) {
 

  h1 {
    font-size: 3rem; /* Increase font size for tablets */
  }
}

@media (min-width: 480px) {
 

  h1 {
    font-size: 2.5rem; /* Increase font size for tablets */
  }
}
</style>