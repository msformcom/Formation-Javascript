
// Closure => function que j'exécute immédiatement et qui créé un espace de variables indépendant
(function(){
    // toute variable ou fonction définié ici 
    var a=1;
    window.b=1; // variable visible globalement
    window.alert=console.log;
    alert(a);

})();

// Avec ES6 et +
// class Voiture{
//     model="C3";
//     marque="Peugeot";
// }

// Remplace la classe dans le JS <= ES5
function Voiture(){
    this.marque="Peugeot";
    this.model="C3";
}



function Quatre4(){
    quatreRoues=true;
}

Quatre4.prototype=new Voiture(); // Quatre4 herite de voiture
Quatre4.prototype.toto=2; // surcharge du membre toto pour le Quatre4


// prototype
var v=new Voiture();
var v2=new Voiture();
console.log(v.toto); // undefined
console.log(v.model); // Peugeot

// Ajout d'un membre hérité à la classe Voiture par l'intermédiaire de son prototype
Voiture.prototype.toto=1;

console.log(v.toto); // 1
// quand je lis une propriété toto de v =>
//1) le systeme va chercher dans v une propriété propre (ownproperty) du nom toto
// 2) Chercher la propriété dans le prototype du constructuer

v.toto=2;
console.log(v.toto); // 2
console.log(v2.toto); // 1


var q=new Quatre4(); 
// Existe car Quatre4 hérite de voiture dont le proto possède toto
console.log(q.toto);

// date
var d=new Date(1968,8,11); // 11/09/1968

var c=1/0; // Infinity, -Infinity, -0, +0
a="1";
if(a==1){
    // "1"==1 => True
}
if(a===1){
     // "1"===1 => False
}

var a;
if(a){
    // truthy falsy, 
    // falsy :  undefined, null, false, "", 0,NaN
}


// Attention !
var a=document.querySelector("input[type='number']#a").value; // Dans l'input =>1
var b=document.querySelector("input[type='number']#b").value; // Dans l'input =>2
var c=a+b; // "12"

var a=+document.querySelector("input[type='number']#a").value; // Dans l'input =>1
var b=+document.querySelector("input[type='number']#b").value; // Dans l'input =>2
var c=a+b; // 3

document.addEventListener("DOMContentLoaded",()=>{
    // Ce code sera exécuté aorès chargement complet du document
    document.querySelector("[input[type='number']").innerHTML=new Date().toDateString();
    
    // Selecteurs CSS, permettent une sélection plus fine des éléments dans le DOM
    document.querySelectorAll(".titre");
});