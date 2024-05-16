// interface CartItem{
//   name: string;
//   price: number;
//   quantity: number;
// }
var cartItems = [];
function findIndex(array, name) {
    return array.findIndex(function (item) { return item.name === name; });
}
function addItem() {
    var itemNameInput = document.getElementById("itemName");
    var itemPriceInput = document.getElementById("itemPrice");
    var itemQuantityInput = document.getElementById("itemQuantity");
    var itemName = itemNameInput.value;
    var itemPrice = parseInt(itemPriceInput.value);
    var itemQuantity = parseInt(itemQuantityInput.value);
    if (!itemName || isNaN(itemPrice) || itemPrice <= 0 || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Please enter a valid item name, positive price, and positive quantity.");
        return;
    }
    var newItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    cartItems.push(newItem);
    displayItems();
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";
}
function removeItem() {
    var itemNameInput = document.getElementById("removeItemName");
    var itemName = itemNameInput.value;
    var index = findIndex(cartItems, itemName);
    if (index !== -1) {
        cartItems.splice(index, 1);
        displayItems();
    }
    else {
        alert("Item not found in the cart.");
    }
}
function displayItems() {
    var ItemsDiv = document.getElementById('items');
    if (ItemsDiv) {
        ItemsDiv.innerHTML = "";
    }
    cartItems.forEach(function (item) {
        var itemDiv = document.createElement('div');
        itemDiv.innerText = "".concat(item.name, " - Quantity: ").concat(item.quantity, " - Price: $").concat(item.price.toFixed(2));
        ItemsDiv === null || ItemsDiv === void 0 ? void 0 : ItemsDiv.appendChild(itemDiv);
    });
}
