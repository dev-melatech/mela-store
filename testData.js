import ImageFile from "./static/images/featured/1.jpg";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const testData = {
  setProduct() {
    return {
      id: 1,
      title: `Item 1`,
      price: 3000,
      image_link: ImageFile
    };
  },
  setProducts() {
    let arr = [];
    const len = 100;
    for (let i = 0; i < len; i++) {
      arr.push({
        id: i + 1,
        title: `Item ${i + 1}`,

        price: 3000
      });
    }
    return arr;
  },
  setFeaturedProducts() {
    let arr = [];
    const len = 8;
    for (let i = 0; i < len; i++) {
      arr.push({
        id: i + 1,
        title: `Sample Item ${i + 1}`,
        price: 3000,
        image_link: ImageFile,
        slug: `item-${i + 1}`,
        discount: getRandomIntInclusive(0, 100)
      });
    }
    return arr;
  }
};

export default testData;
