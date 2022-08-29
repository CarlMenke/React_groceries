# React Groceries

![grocery bag](https://img.thrfun.com/img/095/445/reusable_shopping_bag_x1.jpg)

## Overview

In this lab, you will build an app that let's you make a list of groceries to buy

## Getting Started

- Clone this repo and `cd` into it.
- Create your react app named `react_groceries`.
- `cd react_groceries` and begin your work from there.


## Instructions

```js
{
  item: '',
  brand '',
  units: '',
  quantity: 0,
  isPurchased: false
}
```

- Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
- Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
- Add some style to your app
- **Stretch** Add a button that says 'remove' and when clicked the value of `isPurchased` is toggled

## Bonus
- Make multiple grocery lists (one for each family member) and have them update independently
- sort your list alphabetically
- create other ways to sort your data (ie by quantity)
- change the 'remove' button's functionality to atually remove the item from the list
- add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later
- expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images, some will work and save lifecycles/lazy loading for later)