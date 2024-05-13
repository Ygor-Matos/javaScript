// exemplo de objeto 
let pen = {
    itemName: "Pen",
    itemPrice: 3,
    itemAvailable:true,
    itemColor: "Red"
};

pen.itemColor = "blue";

//console.log(pen);

//exemplo de array

let friends = ['Marcos',"Silvia","Elisa"];
friends[1]="Junior";
//console.log(friends);

function saleStatus(status, total ) {
    console.log("Transaction " + status + "! Total amount: $"+total);
};

saleStatus("approved", 30);

function percentage10(price){
    return price - price * 10 /100;
}

//console.log(percentage10(20));

let num1 = 3;

num1+=21;

console.log(num1);
//++
//--