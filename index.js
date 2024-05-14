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

//saleStatus("approved", 30);

function percentage10(price){
    return price - price * 10 /100;
}

//console.log(percentage10(20));

let num1 = 3;

num1+=21;

//console.log(num1);

//console.log(num1 >= 0);

//console.log(num1 ===  3);
// === compara tipo e valor, == não compara valor

let driver = 900;
let speed = driver >110? 'Acima da velocidade' : "Abaixo da velocidade";
//console.log(speed);

let temIdadeMinima = true;
let temTituloEleitor = false;

let podevotar = temIdadeMinima && temTituloEleitor;
//console.log("pode votar? " + (podevotar? "phoode" :"não pode"));
//fato interessante: se tirar as parenteses do pode votar, a string de antes não aparece


let podeViajar = !podevotar? "pode":"não pode";
//console.log("POde viajar? " +podeViajar )


let corCliente = undefined;
let corEstoque = "Black";
let corVendida = corCliente || corEstoque;
//console.log(corVendida);
//no JS é possível usar operadores lógicos com String's

let driverSpeed = 110;

 if (driverSpeed > 110){
//     console.log("Driving too fast");
 }
 else if(driverSpeed>40 && driverSpeed<=110){
//     console.log("Ok");
 }
 else{
//     console.log("Driving too slow");
 }


let airport = "";

switch(airport){
    case "MCO":
        console.log("Orlando");
        break;
    case "JFK":
        console.log("John F. Kennedy");
        break;
    case "SEA":
        console.log("Seattle");
        break;
    default:
//        console.log("Unknown");    
    }

for(i=10;i<=20;i++){
    if(i === 15){
        break;
    }
    console.log("Número: "+i);
}

let j = 1;
while(j<=10){
  //  console.log("Numero"+j);
    j++;
}

let k=1;
do{
  //  console.log(k);
    k++;
}while(k<=10);


const myCar={
    model: "BMW",
    year:2023,
    km:68000
}
//for each gambiarra
for( let i in myCar){
    // console.log(i, myCar[i]);
};


//for each de verdade
const amigos = ["Marcos", "ana", "Jose"];

for (let i of amigos){
 //   console.log( i );
}