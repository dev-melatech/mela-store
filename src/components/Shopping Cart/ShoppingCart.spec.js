import { mount, createLocalVue } from "@vue/test-utils";
import ProductAction from "@/components/ShoppingCart/Lander";
import BootstrapVue from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

describe("Shopping cart component test", () => {
  it("Tests that image source in lander component is set correctly", () => {
    const wrapper = mount(ProductAction, {
      localVue,
      propsData: {
        img1: "Test1.jpg",
        img2: "Test2.jpg",
        img3: "Test3.jpg"
      }
    });
    const img = wrapper.findAll("img");
    expect(img).toHaveLength(3);
    expect(img.at(0).attributes().src).toEqual("Test1.jpg");
    expect(img.at(1).attributes().src).toEqual("Test2.jpg");
    expect(img.at(2).attributes().src).toEqual("Test3.jpg");
  });
});
