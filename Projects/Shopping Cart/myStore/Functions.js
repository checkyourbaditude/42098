
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
        inventoryStr+="<input type='radio' id='add"+i+"' onclick='scoreModel()'>";
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
function addToCart(){

}

//sets cart items to local storage
function setStorage(){
	document.location="Cart.html";
}