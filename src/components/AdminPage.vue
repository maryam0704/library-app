
<template>
    <div>
        <p v-if="store.isAuthenticated && store.isAdminUser" class="authenticated-user">
            Authenticated User: {{ store.authenticatedUser }}
        </p>
        <div v-if="store.isAuthenticated && store.isAdminUser" class="admin-container">
            <h1>Welcome, Admin!</h1>
            <br>
            <form @submit.prevent="addBook">
                <label for="title" class="form-label" >Book Title:</label>
                <br>
                <input v-model="newBook.title" id="title" class="form-input" required />
    
    <br>                <label for="author" class="form-label" >Author:</label>
      <br>          <input v-model="newBook.author" id="author" class="form-input" required />
<br>
              <label for="genre" class="form-label">Genre:</label>
  <br>              <input v-model="newBook.genre" id="genre" class="form-input" required />
<br>
                <button  class="add-button" >Add New Book</button>
                 
            </form>
             <!-- <div v-if="message">{{ message }}</div> -->
            <button @click="logout"  class="logout-button" >Logout</button>
        </div>
        <div  class="not-admin" v-else>
            <p>Please log in as an admin.</p>
        </div>
    </div>
</template>

<script>
import { useloginStore } from "@/store/loginStore";
import { ref } from 'vue';


export default {
    name: "AdminPage",
    setup() {
        const store = useloginStore();
        const newBook = ref({
            title: "",
            author: "",
            genre: "",
        });
     let message = ref("");
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
               
              
                // newBook.title = "";
                // newBook.author = "";
                // newBook.genre = "";
                // message = "Book added successfully";
                const data = await response.json();
               
                console.log("book added successfully");
                 newBook.value.title = "";
                newBook.value.author = "";
                newBook.value.genre = "";
                console.log("clear input fields");

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
            message,
            
        };
    },
};
</script>
<style scoped>
.authenticated-user {
    font-size: 18px;
    margin-bottom: 10px;
}

.admin-container {
    background-color: #0000007c;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 50%;
    margin: 0 auto;
}

.welcome-admin {
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.form-label {
    font-size: 18px;
    margin-top: 15px;
    padding-top: 15px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 555;
}

.form-input {
    width: 55%;
    padding: 10px;
    margin: 15px;
    font-size: 25px;
    border: 1px solid #000000;
    border-radius: 5px;
   background-color:  #e5e0e0dd;
   color: #000000;
   

}

.add-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.add-button:hover {
    background-color: #0056b3;
}

.logout-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin-top: 10px;
}

.logout-button:hover {
    background-color: #c82333;
}

.not-admin {
    font-size: 18px;
    margin-top: 20px;
}
</style>