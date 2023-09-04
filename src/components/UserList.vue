
<template>
    <div>
        <label for="user">Select a user:</label>
        <!-- <select v-model="selectedUser" id="user">
            <option v-for="user in allUsers" :key="user">{{ user }}</option>
        </select>
      
        <button @click="selectUser">submit</button> -->
          <button
              v-for="user in allUsers"
              :key="user"
              @click="selectUser(user)"
              :class="{ active: user === selectedUser }"
            >
              {{ user }}
            </button>
    </div>
</template>

<script>
export default {
    props: {
        allUsers: Array,
    },
    data() {
        return {
            selectedUser: "",
        };
    },
    methods: {
        selectUser(user) {
            this.$emit("userSelected", this.selectedUser);
            console.log("Selected user:", this.selectedUser);
              this.selectedUser = user;
            console.log( user);
        },
    },
  
};
</script>
<style>
div {
    text-align: center;
    margin-top: 20px;
}

label {
    font-size: 18px;
    margin-right: 10px;
}


button {
    background-color: #595959a6;
    color: rgb(183, 202, 226);
    border: 5px solid rgb(84, 83, 83);
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #ffffff;
}


button.active {
    background-color: #005a9e;
}
label {
    color: chartreuse;
    font-size: 28px;
    margin-right: 10px;
}
</style>
