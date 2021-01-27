import Vue from "vue";
import Lander1 from "@/components/Landers/Lander1";
import TestButton from "@/components/Buttons/TestButton";

const Components = {
  Lander1,
  TestButton
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
