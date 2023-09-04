
<template>
    <div>
         <UserList :allUsers="allUsers" @userSelected="loginUser" />
        <AdminPage />
    </div>
        <!-- <UserList :allUsers="allUsers" @userSelected="loginUser" /> -->

</template>

<script>

import AdminPage from "@/components/AdminPage.vue";
import { useloginStore } from "@/store/loginStore";
import UserList from "@/components/UserList.vue";


export default {
    name: "AdminPageView",
    components: {
        AdminPage,
        UserList,
    },
    setup() {
        const allUsers = ["admin", "userOne"];
        const loginStore = useloginStore();

        const loginUser = (user) => {
            loginStore.authenticate(user);
        };
        return {
            allUsers,
            loginUser,
            loginStore,
        };
    },
};
</script>