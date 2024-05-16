interface cartItem{
  name: string;
  price: number;
  quantity: number;
}

let cartItems:cartItem[]=[];

function findIndexByName(array: cartItem[], name: string): number {
  for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
          return i;
      }
  }
  return -1; // Item not found
}

function addItem()
{
  const itemNameInput=document.getElementById("itemName") as HTMLInputElement;
  const itemPriceInput=document.getElementById("itemPrice") as HTMLInputElement;
  const itemQuantityInput=document.getElementById("itemQuantity") as HTMLInputElement;

  const itemName=itemNameInput.value;
  const itemPrice=parseInt(itemPriceInput.value);
  const itemQuantity=parseInt(itemQuantityInput.value);

  if(!itemName || isNaN(itemPrice) || itemPrice<=0 || isNaN(itemQuantity) || itemQuantity<=0)
  {
    alert("Please enter a valid item name, positive price, and positive quantity.");
    return;
  }

  const newItem:cartItem={
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity
  };
  cartItems.push(newItem);
  displayItems();
  itemNameInput.value="";
  itemPriceInput.value="";
  itemQuantityInput.value="";
}

function removeItem()
{
  const itemNameInput=document.getElementById("removeItemName") as HTMLInputElement;
  const itemName=itemNameInput.value;

  const index=findIndex(cartItems,itemName);

  if(index!==-1)
  {
    cartItems.splice(index,1);
    displayItems();
  }
  else{
    alert("Item not found in the cart.");
  }
}

function displayItems()
{
  const ItemsDiv=document.getElementById('items');
  if(ItemsDiv)
  {
    ItemsDiv.innerHTML="";
  }

  cartItems.forEach((item)=>{
    const itemDiv=document.createElement('div');
    itemDiv.innerText=`${item.name} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`;
    ItemsDiv?.appendChild(itemDiv);
  })
}