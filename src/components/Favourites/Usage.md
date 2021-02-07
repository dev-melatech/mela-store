### Imports
```js
import Favourites from "melatech_ui";
```

### Component Usage
```js
<favourites
  :products="data"
  label="Favourites"
  @delete-product="deleteProductFromFavourites"
  @move-to-cart="moveToCart" 
>
  <!--item link slot-->
  <template v-slot:product-link="{ item }">
    <a :href="item.link" class="melatech-ui-product-title">
      {{item.title}}
    </a>
  </template>
</favourites>
```
<br>

### Slots

| Name                 | Scopes                   | Description                                      |
| :---------------------: |:---------------------------:| :----------------------------------------------- |
| product-link      | *item* - product object   |  The 'Product Link' content       |

### Events

| Event                 | Arguments                   | Description                                      |
| :---------------------: |:---------------------------:| :----------------------------------------------- |
| delete-product     | *product* - selected item   |  Deletes selected product from favourites        |
| move-to-cart        | *product* - selected item   |  Move selected product from favourites to cart   |


### Notes
1. The `label` props should have a fixed value of "Favourites".
2. Object keys in `products` props array should satisfy default values.

