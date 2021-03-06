import FooterSocials from "@/components/FooterBar/FooterSocials/FooterSocials";
import FooterContainer from "@/components/Containers/FooterContainer";

export default {
  component: FooterSocials,
  title: "E-commerce/Footer/Socials",
  argTypes: {
    links: {
      table: { expanded: true }
    },
    label: { control: "text" },
    labelText: { control: "text" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterSocials, FooterContainer },
  props: Object.keys(argTypes),
  template:
    "<FooterContainer>" +
    "<FooterSocials" +
    " :label='label' " +
    ":label-text='labelText' " +
    ":classes='classes'" +
    " :links='links'" +
    "/>" +
    "</FooterContainer>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  links: [
    {
      link: "https://social.com",
      icon: {
        class: "fab",
        name: "facebook-f"
      }
    },
    {
      link: "https://social.com",
      icon: {
        class: "fab",
        name: "twitter"
      }
    },
    {
      link: "https://social.com",
      icon: {
        class: "fab",
        name: "linkedin-in"
      }
    },
    {
      link: "https://social.com",
      icon: {
        class: "fab",
        name: "google-plus-g"
      }
    },
    {
      link: "https://social.com",
      icon: {
        class: "fab",
        name: "instagram"
      }
    }
  ],
  label: "Follow Us",
  labelText:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
  classes: ""
};
