import ImageFile from "../static/images/featured/1.jpg";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const data = {
  setProduct() {
    return {
      id: 1,
      title: `Sample Item 1`,
      price: 3000,
      image_link: ImageFile,
      slug: `sample-item-1`,
      discount: getRandomIntInclusive(0, 100)
    };
  },
  getProducts() {
    let arr = [];
    const len = 50;
    for (let i = 0; i < len; i++) {
      arr.push({
        id: i + 1,
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ${i +
          1}`,
        price: 3000,
        image_link: require("../static/images/featured/1.jpg"),
        slug: `sample-item-${i + 1}`,
        link: `/sample-item-${i + 1}`,
        discount: getRandomIntInclusive(0, 100),
        quantity: getRandomIntInclusive(0, 10)
      });
    }
    return arr;
  }
};

export default data;
