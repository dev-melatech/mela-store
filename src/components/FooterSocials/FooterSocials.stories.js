import FooterSocials from "@/components/FooterSocials/FooterSocials";
export default {
  component: FooterSocials,
  title: "E-commerce/Footer/Socials",
  argTypes: {
    data: {
      table: {
        type: {
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
    backgroundColor: { control: null },
    iconColor: { control: null },
    label: { control: null },
    labelText: { control: null },
    classes: { control: null }
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
  template: "<FooterSocials/>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  data: []
};
