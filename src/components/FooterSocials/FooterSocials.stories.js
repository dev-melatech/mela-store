import FooterSocials from "@/components/FooterSocials/FooterSocials";
export default {
  component: FooterSocials,
  title: "E-commerce/Footer Socials",
  argTypes: {
    data: {
      table: {
        defaultValue: {
          summary: "See default json structure",
          detail:
            "[\n" +
            "    {\n" +
            '      social_key: "social_key",\n' +
            "      link:\n" +
            '        "https://social_link.com",\n' +
            "    }\n" +
            "]"
        }
      },
      control: null,
      description:
        "The following social keys are supported: " +
        "\n\n " +
        "'facebook', 'twitter', 'linkedin', 'google_plus', 'instagram'"
    },
    backgroundColor: { control: "color" },
    iconColor: { control: "color" },
    socialText: { control: "text" },
    classes: { control: "text" }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import FooterSocials from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterSocials },
  props: Object.keys(argTypes),
  template:
    '<FooterSocials :social-text="socialText" :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  data: [
    {
      social_key: "facebook",
      link: "https://social_link.com"
    },
    {
      social_key: "twitter",
      link: "https://social_link.com"
    },
    {
      social_key: "linkedin",
      link: "https://social_link.com"
    },
    {
      social_key: "google_plus",
      link: "https://social_link.com"
    },
    {
      social_key: "instagram",
      link: "https://social_link.com"
    }
  ],
  backgroundColor: "#999",
  iconColor: "#fff",
  socialText:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
  classes: ""
};
