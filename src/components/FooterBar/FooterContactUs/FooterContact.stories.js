import FooterContactUs from "@/components/FooterBar/FooterContactUs/FooterContactUs";
import FooterContainer from "@/components/Containers/FooterContainer";
export default {
  component: FooterContactUs,
  title: "E-commerce/Footer/Contact",
  argTypes: {
    phones: { control: "array" },
    emails: { control: "array" },
    addresses: { control: "array" },
    label: { control: "text" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterContactUs, FooterContainer },
  props: Object.keys(argTypes),
  template:
    "<FooterContainer>" +
    "<FooterContactUs " +
    ":addresses='addresses' " +
    ":phones='phones' " +
    ":emails='emails' " +
    ":label='label' " +
    ":classes='classes'" +
    "/>" +
    "</FooterContainer>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  label: "Contact Us",
  addresses: [
    "House No. 09 , Road No.25 Dhaka,Bangladesh",
    "House No. 09 , Road No.25 Dhaka,Bangladesh",
    "House No. 09 , Road No.25 Dhaka,Bangladesh"
  ],
  phones: ["+1(888)234-56789", "+1(888)234-56789", "+1(888)234-56789"],
  emails: ["youremail@gmail.com", "youremail@gmail.com", "youremail@gmail.com"],
  classes: ""
};
