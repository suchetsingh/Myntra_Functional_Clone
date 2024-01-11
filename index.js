let bagItems = [];
function addToBag(itemId) {
  bagItems.push(itemId);
  displayBagIcon();
}

function displayBagIcon() {
    // Select the element with the class "bag-item-count"
    let bagItemCountElement = document.querySelector(".bag-item-count");
  
    // Check if there are items in the bagItems array
    if (bagItems.length > 0) {
      // If there are items, make the element visible
      bagItemCountElement.style.visibility = 'visible';
  
      // Set the text content of the element to the number of items in the array
      bagItemCountElement.innerText = bagItems.length;
    } else {
      // If there are no items, hide the element
      bagItemCountElement.style.visibility = 'hidden';
    }
  }
  
displayItemsOnHomepage();
function displayItemsOnHomepage() {
  let intemsContainerElement = document.querySelector(".items-container");

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
        <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item-image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  intemsContainerElement.innerHTML = innerHTML;
}

// let item = {
//     item_image:'images/1.jpg',
//     rating:{
//         stars: 4.5,
//         noOfReviews:1400,
//     },
//     company_name:'Carlton London',
//     item_name:'Rhodium-Plated CZ Floral Studs',
//     current_price:606,
//     original_price:1045,
//     discount_percentage:42
// }
