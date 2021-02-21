# Shopping Cart
<br>

```js
import ShoppingCart from "mela-store";
```

### Example:

<ShoppingCartDocs>

```vue
<shopping-cart
  :products="data"
  @increase-cart-quantity="increaseCartQuantity"
  @decrease-cart-quantity="decreaseCartQuantity"
  @delete-product="deleteProductFromCart"
>
</shopping-cart>
```

To replace native a link tags with a vue link or nuxt link, you replace the default using the available slot.
```vue
<!-- vue -->
<template v-slot:product-link="{ item }">
    <VueLink :to="item.link" class="melastore-product-title">
      {{ item.title }}
    </VueLink>
</template>

<!-- nuxt -->
<template v-slot:product-link="{ item }">
    <NuxtLink :to="item.link" class="melastore-product-title">
      {{ item.title }}
    </NuxtLink>
</template>
```
</ShoppingCartDocs>
