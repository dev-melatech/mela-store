import FooterQuickLinks from "@/components/FooterBar/FooterQuickLinks/FooterQuickLinks";
import FooterContainer from "@/components/Containers/FooterContainer";

export default {
  component: FooterQuickLinks,
  title: "E-commerce/Footer/Quick Links",
  argTypes: {
    links: {
      table: { expanded: true }
    },
    label: { control: "text" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterQuickLinks, FooterContainer },
  props: Object.keys(argTypes),
  template:
    "<FooterContainer>" +
    '<FooterQuickLinks :links="links" :label="label" :classes="classes">' +
    "</FooterQuickLinks>" +
    "</FooterContainer>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  links: [
    {
      title: "Account",
      href: "/account"
    },
    {
      title: "About Us",
      href: "/about-us"
    },
    {
      title: "Contact Us",
      href: "/contact-us"
    }
  ],
  label: "Quick Links",
  classes: ""
};
