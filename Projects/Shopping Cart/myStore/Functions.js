
//inventory of market
inventory=[
        {  name:"Item1",
           code:001,
           avail:1,
           desc:"First Item"
        },
        {  name:"Item2",
           code:002,
           avail:2,
           desc:"Second Item"
        },
]

//generates the table based on the inventory
function inventoryView(){
	var inventoryStr="<table id='inventoryList'><tr><th>Add</th><th>Item</th><th>code</th><th>Inventory</th><th class='Description'>Description</th><tr><table>";
	
    //Convert to a string
    var str=JSON.stringify(inventory);
    var object=JSON.parse(str);

    //Display the inventory
    for(var i=0;i<object.length;i++){
        var obj=object[i];

        inventoryStr+="<tr><td>"
        inventoryStr+="<input name='itemRadio' type='radio' id='add"+i+"'>";
        for(var prop in obj){
        	if(prop=="desc"){
        		inventoryStr+="<td class='Description'>"+obj[prop]+"</td>";
        		console.log("The description class tag was added");
        	}
        	else {
        		inventoryStr+="<td>"+obj[prop]+"</td>";
        	}
        }
        inventoryStr+="</tr>";
    }
    inventoryStr+="</table>";
    document.getElementById("inventoryForm").innerHTML=inventoryStr;

    document.getElementById("itemCnt").innerHTML="Your cart has "+inventoryCnt+" items";
}

//adds product to inventory, puts in local storage and updates global variable
function addToCart(fCart){
	var addition;

	for(var i=0;i<inventory.length;i++){
		if(document.getElementById('add'+i).checked==true){
			addition=inventory[i];
			fCart.push(addition);
			alert(addition["name"] + " has been added to your cart!");
		}
	}

	inventoryCnt++;

	document.getElementById("itemCnt").innerHTML="Your cart has "+inventoryCnt+" items";
}

function createCartView(){
	var cart=sessionStorage.getItem("cart");
    var cartStr="<table id='inventoryList'><tr><th>Delete</th><th>Item</th><th>code</th><th>Inventory</th><th class='Description'>Description</th><tr><table>";;
   	cart=parseToObject(cart);

   	//Display the inventory
    for(var i=0;i<cart.length;i++){
        var obj=cart[i];

        cartStr+="<tr><td>"
        cartStr+="<input name='itemRadio' type='radio' id='add"+i+"'>";
        for(var prop in obj){
        	if(prop=="desc"){
        		cartStr+="<td class='Description'>"+obj[prop]+"</td>";
        		console.log("The description class tag was added");
        	}
        	else {
        		cartStr+="<td>"+obj[prop]+"</td>";
        	}
        }
        cartStr+="</tr>";
    }

    cartStr+="</table>";
    document.getElementById("cartForm").innerHTML=cartStr;
}

function removeFromCart() {
	var cart=sessionStorage.getItem("cart");
	cart=parseToObject(cart);

	for(var i=0;i<cart.length;i++){
		if(document.getElementById('add'+i).checked==true){
			alert(cart[i].name + " has been removed from cart!");
			delete cart[i];
		}
	}

	setStorage(cart);
}

//sets cart items to local storage
function setStorage(fCart){

	fCart=stringifyObject(fCart);

	sessionStorage.setItem("cart", fCart);

	document.location="Cart.html";
}

function stringifyObject(obj){
	var str=JSON.stringify(obj);
	return str;
}

//Stringified Object Parse Function
function parseToObject(str){
	var obj=JSON.parse(str);
	return obj;
}

function gotoMarket() {
	document.location="Market.html";
}