<template>
    <div>
        <h1>User List</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <button @click="navigateToUser(user)">Select {{ user.name }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: "UserOne" },
                { id: 2, name: "UserTwo" },
                // Add more users as needed
            ],
        };
    },
    methods: {
        navigateToUser(user) {
            // Use router.push to navigate to the UserOne route (or other routes) based on the selected user
            this.$router.push({ name: user.name });
        },
    },
};
</script>
