
<template>
    <div>
        <label for="user">Select a user:</label>
        <select v-model="selectedUser" id="user">
            <option v-for="user in allUsers" :key="user">{{ user }}</option>
        </select>
      
        <button @click="selectUser">submit</button>
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
        selectUser() {
            this.$emit("userSelected", this.selectedUser);
            console.log("Selected user:", this.selectedUser);
        },
    },
  
};
</script>
