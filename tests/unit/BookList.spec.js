import { shallowMount } from "@vue/test-utils";
import BookList from "@/components/BookList.vue";


describe("BookList.vue", () => {
    it("renders props.course when passed", () => {
        const book = {
            title: "Vue.js",
            author: "The Progressive JavaScript Framework",
     
        };

        const wrapper = shallowMount(BookList, {
            propsData: { book },
        });
        expect(wrapper.find("h2").text()).toBe(book.title);
    });
})
