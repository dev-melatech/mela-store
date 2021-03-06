import FooterQuickLinks from "@/components/FooterBar/FooterQuickLinks/FooterQuickLinks";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterSocials from "@/components/FooterBar/FooterSocials/FooterSocials";
import FooterContactUs from "@/components/FooterBar/FooterContactUs/FooterContactUs";
import FooterNewsLetter from "@/components/FooterBar/FooterNewsLetter/FooterNewsLetter";
import { action } from "@storybook/addon-actions";

export default {
  component: FooterBar,
  title: "E-commerce/Footer/Footer Bar",
  argTypes: {
    copyrightText: { control: null },
    classes: { control: null }
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
    "<ms-footer-bar :copyright-text='copyrightText' :classes='classes'>" +
    "<b-container>" +
    "<b-row>" +
    '<b-col lg="4" md="6" class="mb-5" sm="12">' +
    "<ms-footer-quick-links " +
    ':links="quickLinks.links" ' +
    ':label="quickLinks.label"' +
    ' :classes="quickLinks.classes"' +
    "/>" +
    "<ms-footer-socials" +
    " :label='socials.label' " +
    ":label-text='socials.labelText' " +
    ":classes='socials.classes'" +
    " :links='socials.links'" +
    "/>" +
    "</b-col>" +
    '<b-col lg="4" md="6" class="mb-5" sm="12">' +
    "<ms-footer-contact-us " +
    ":addresses='contact.addresses' " +
    ":phones='contact.phones' " +
    ":emails='contact.emails' " +
    ":label='contact.label' " +
    ":classes='contact.classes'" +
    "/>" +
    "</b-col>" +
    '<b-col lg="4" md="6" class="mb-5" sm="12">' +
    "<ms-footer-newsLetter " +
    ":label='newsletter.label' " +
    ":label-text='newsletter.labelText'" +
    " :classes='newsletter.classes'" +
    " @subscribe='subscribe'" +
    "/>" +
    "</b-col>" +
    "</b-row>" +
    "</b-container>" +
    "</ms-footer-bar>",
  data() {
    return {
      socials: {
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
        classes: "mt-4"
      },
      quickLinks: {
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
      },
      contact: {
        label: "Contact Us",
        addresses: [
          "House No. 09 , Road No.25 Dhaka,Bangladesh",
          "House No. 09 , Road No.25 Dhaka,Bangladesh",
          "House No. 09 , Road No.25 Dhaka,Bangladesh"
        ],
        phones: ["+1(888)234-56789", "+1(888)234-56789", "+1(888)234-56789"],
        emails: [
          "youremail@gmail.com",
          "youremail@gmail.com",
          "youremail@gmail.com"
        ],
        classes: ""
      },
      newsletter: {
        label: "Join Our NewsLetter",
        labelText:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
        classes: ""
      }
    };
  },
  methods: {
    subscribe: action("subscribe")
  }
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  copyrightText: "Your Website Name All Right Reserved",
  classes: ""
};
