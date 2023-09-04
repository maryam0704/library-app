
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
        },
    },
  
};
</script>
