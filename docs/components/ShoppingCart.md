# Shopping Cart
<br>

<code-group>
<code-block title="Imports">
```js
import ShoppingCart from "melatech_ui";
```
</code-block>
</code-group>

### Example:

<Demo>
<code-group>
<code-block title="Component">
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
</code-block>
</code-group>
</Demo>
