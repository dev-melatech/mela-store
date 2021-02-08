# Favourites
<br>

```js
import Favourites from "mela-store";
```

### Example:

<FavouritesDocs>

```vue
<favourites
  :products="products"
  @move-to-cart="moveToCart"
  @delete-product="deleteProductFromFavourites"
>
</favourites>
```

To replace native a link tags with a vue link or nuxt link, you replace the default using the available slot.
```vue
<!-- vue -->
<template v-slot:product-link="{ item }">
    <VueLink :to="item.link" class="melastore-product--title">
      {{ item.title }}
    </VueLink>
</template>

<!-- nuxt -->
<template v-slot:product-link="{ item }">
    <NuxtLink :to="item.link" class="melastore-product--title">
      {{ item.title }}
    </NuxtLink>
</template>
```
</FavouritesDocs>