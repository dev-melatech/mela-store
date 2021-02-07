### Imports
```js
import ShoppingCart from "melatech_ui";
```

### Component Usage
```js
<shopping-cart
    :products="data"
    label="Cart"
    @proceed-to-checkout="proceedToCheckout"
    @increase-cart-quantity="increaseCartQuantity"
    @decrease-cart-quantity="decreaseCartQuantity"
    @delete-product="deleteProductFromCart"
>
    <!--item link slot-->
    <template v-slot:product-link="{ item }">
      <a :href="item.link" class="melatech-ui-product-title">
      {{ item.title }}
      </a>
    </template>
</shopping-cart>
```
<br>

### Slots

| Name                 | Scopes                   | Description                                      |
| :---------------------: |:---------------------------:| :----------------------------------------------- |
| product-link      | *item* - product object   |  The 'Product Link' content       |

### Events

| Event                 | Arguments                   | Description                                      |
| :---------------------: |:---------------------------:| :----------------------------------------------- |
| delete-product     | -   |  Deletes selected product from favourites        |
| decrease-cart-quantity        | *product* - selected item   |  Decreases cart quantity of selected item   |
| increase-cart-quantity        | *product* - selected item   |  Increase cart quantity of selected item  |
| proceed-to-checkout      | *product* - selected item   |  Initializes the checkout process   |


### Notes
1. The `label`prop should have a fixed value of "Cart".
2. Object keys in `products`props array should satisfy default values.

