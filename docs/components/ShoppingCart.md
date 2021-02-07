# Shopping Cart
<br>

<Code>

```js
import ShoppingCart from "melatech_ui";
```
</Code>

### Example:

<Demo>

```vue
<shopping-cart
    :products="data"
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
</Demo>
