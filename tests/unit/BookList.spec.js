import { shallowMount } from "@vue/test-utils";
import BookList from "@/components/BookList.vue";

describe("BookList.vue", () => {
  it("fetches and displays books", async () => {
    const mockData = [
      { _id: 1, title: "Book 1", author: "Author 1", isReserved: false },
      {
        _id: 2,
        title: "Book 2",
        author: "Author 2",
        isReserved: true,
        reservedBy: "User 1",
      },
    ];

    const wrapper = shallowMount(BookList, {
      data() {
        return {
          books: mockData,
        };
      },
    });
// we will use $nextTick to wait for the DOM to update after the data is set
//  instead od using setTimeout
    await wrapper.vm.$nextTick();

    
    expect(wrapper.text()).toContain("Book 1");
    expect(wrapper.text()).toContain("Author 1");
    expect(wrapper.text()).toContain("Available");
    
  });
    
   
});