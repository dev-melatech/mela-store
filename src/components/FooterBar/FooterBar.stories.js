import FooterQuickLinks from "@/components/FooterQuickLinks/FooterQuickLinks";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterSocials from "@/components/FooterSocials/FooterSocials";
import FooterContactUs from "@/components/FooterContactUs/FooterContactUs";
import FooterNewsLetter from "@/components/FooterNewsLetter/FooterNewsLetter";

export default {
  component: FooterBar,
  title: "E-commerce/Footer/Footer Bar",
  argTypes: {
    copyrightText: { control: null },
    classes: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component:
          ' _```import FooterQuickLinks from "melatech_ui"```_ ' +
          "\n\n " +
          '_```import FooterSocials from "melatech_ui"```_' +
          "\n\n " +
          '_```import FooterSocials from "melatech_ui"```_' +
          "\n\n " +
          '_```import FooterContactUs from "melatech_ui"```_' +
          "\n\n " +
          '_```import FooterNewsLetter from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: {
    FooterBar,
    FooterQuickLinks,
    FooterSocials,
    FooterContactUs,
    FooterNewsLetter
  },
  props: Object.keys(argTypes),
  template:
    "<FooterBar>" +
    "<b-container>" +
    "<b-row>" +
    '<b-col lg="3" md="6" class="mb-5" sm="12"><FooterSocials/></b-col>' +
    '<b-col lg="2" md="6" class="mb-5" sm="12"><FooterQuickLinks/></b-col>' +
    '<b-col lg="3" md="6" class="mb-5" sm="12"><FooterContactUs/></b-col>' +
    '<b-col lg="4" md="6" class="mb-5" sm="12"><FooterNewsLetter/></b-col>' +
    "</b-row>" +
    "</b-container>" +
    "</FooterBar>"
});

// Each story then reuses that template
export const Default = Template.bind({});
