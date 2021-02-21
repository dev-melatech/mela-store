<script>
class Svg {
  constructor(svgFile) {
    const div = document.createElement("div");
    div.innerHTML = svgFile;
    // change to wherever your svg files are
    const fragment = document.createDocumentFragment();
    fragment.appendChild(div);
    this.svg = fragment.querySelector("svg");
  }

  classes(classes) {
    if (classes) {
      this.svg.classList = "";
      classes.split(" ").forEach(className => {
        this.svg.classList.add(className);
      });
    }
    return this;
  }

  width(width) {
    if (width) {
      this.svg.setAttribute("width", width);
    }
    return this;
  }

  height(height) {
    if (height) {
      this.svg.setAttribute("height", height);
    }
    return this;
  }

  toString() {
    return this.svg.outerHTML;
  }
}
export default {
  props: [
    "name",
    "classes",
    "width",
    "height",
    "title",
    "total",
    "dir",
    "svgFile"
  ],
  render(h) {
    return h("div", {
      domProps: {
        classList: "flex-items-center",
        innerHTML:
          `<span>${new Svg(this.svgFile)
            .classes(this.classes)
            .width(this.width)
            .height(this.height)}</span>` +
          `<span class='nav-title cart-total d-none'>${this.total}</span>`
      }
    });
  }
};
</script>
