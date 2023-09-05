import { shallowMount } from "@vue/test-utils";
import AdminPage from "@/components/AdminPage.vue";

// const mockStore = {
//   isAuthenticated: true,
//   isAdminUser: true,
//   authenticatedUser: "AdminUser",
// };

// describe("AdminPage.vue", () => {
//   it("renders the component when isAdminUser is true", () => {
//     const wrapper = shallowMount(AdminPage);
// console.log(mockStore);
//     expect(wrapper.exists()).toBe(true);
//   });
    
//      it("does not render the component when isAdminUser is false", () => {
//        const wrapper = shallowMount(AdminPage);

       
//        wrapper.vm.store.isAdminUser = false;

//        expect(wrapper.exists()).toBe(false);
//      });
//   });