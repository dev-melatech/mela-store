<style>
.prop{
    background: #f1e5e7;
    border-radius: 5px;
    padding: 3px 8px;
    color: #333;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    margin: 0 5px;
}
</style>

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
    @empty-cart="emptyCart"
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

### Notes
1. The <span class="prop">label</span> prop should have a fixed value of "Cart".
2. Object keys in <span class="prop">products</span> props array should satisfy default values.
<!-- STORY -->

