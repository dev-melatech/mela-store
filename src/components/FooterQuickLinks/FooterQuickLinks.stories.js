import FooterQuickLinks from "@/components/FooterQuickLinks/FooterQuickLinks";

export default {
  component: FooterQuickLinks,
  title: "E-commerce/Footer/Quick Links",
  argTypes: {
    data: {
      table: {
        defaultValue: {
          summary: "See default json structure",
          detail:
            "[\n" +
            "    {\n" +
            '      title: "Account",\n' +
            "      href:\n" +
            '        "/account",\n' +
            "    }\n" +
            "]"
        }
      },
      control: null
    },
    label: { control: "text" },
    classes: { control: "text" }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import FooterQuickLinks from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterQuickLinks },
  props: Object.keys(argTypes),
  template: '<FooterQuickLinks :data="data" :label="label" :classes="classes"/>'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  data: [
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
