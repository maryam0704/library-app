<template>
    <div>
        <UserBorrowedBooks v-if="loginStore.isAuthenticated" :user="loginStore.authenticatedUser" />
    </div>
</template>

<script>
import { useloginStore } from "@/store/loginStore";
import UserBorrowedBooks from "@/components/UserBorrowedBooks.vue";

export default {
    components: {
        UserBorrowedBooks
    },
    setup() {
        const loginStore = useloginStore();

        return {
            loginStore
        };
    }
};
</script>
