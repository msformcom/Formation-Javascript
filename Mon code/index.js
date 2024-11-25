// Avec JS
// 1) manque d'isolation des fonctions et des variables
// 2) imports des dépendances qui est délégué au fichier html
// 3) typage des variables => pas de types
// 4) éléments du language / api qui sont disponibles en fonction de quels navigateur

// Typescript
// 1) Module => Importer des scripts externes 
// 2) Typage fort => TS = JS + Typage => Compilation => JS
// 3) target => ES3, ES6 , .., ES2015 , ..,  ES2022



// Closure => function que j'exécute immédiatement et qui créé un espace de variables indépendant
(function(){
    // toute variable ou fonction définié ici 
    let a=1;
    window.b=1; // variable visible globalement
    window.alert=console.log;
    alert(a);

})();

// Avec ES6 et +
// class Voiture{
//     model="C3";
//     marque="Peugeot";
// }


// prototype
var v=new Voiture();
var v2=new Voiture();
console.log(v.toto); // undefined
console.log(v.model); // Peugeot



console.log(v.toto); // 1
// quand je lis une propriété toto de v =>
//1) le systeme va chercher dans v une propriété propre (ownproperty) du nom toto
// 2) Chercher la propriété dans le prototype du constructuer

v.toto=2;
console.log(v.toto); // 2
console.log(v2.toto); // 1


var q=new Quatre4(); 
debugger;
if(q instanceof Quatre4){

}

if(typeof(q)=='Object'){

}


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


if(a){
    // truthy falsy, 
    // falsy :  undefined, null, false, "", 0,NaN
}


// Attention !
let a=document.querySelector("input[type='number']#a").value; // Dans l'input =>1
var b=document.querySelector("input[type='number']#b").value; // Dans l'input =>2
var c=a+b; // "12"

 a=+document.querySelector("input[type='number']#a").value; // Dans l'input =>1
var b=+document.querySelector("input[type='number']#b").value; // Dans l'input =>2
var c=a+b; // 3


var d = `La somme
 de ${a} et ${b} est ${a + b}`;

document.addEventListener("DOMContentLoaded",()=>{
    // Ce code sera exécuté aorès chargement complet du document
    document.querySelector("[input[type='number']").innerHTML=new Date().toDateString();
    
    // Selecteurs CSS, permettent une sélection plus fine des éléments dans le DOM
    document.querySelectorAll(".titre");
});


// destructuring
let e=1;
let f=2;
let g=2;
let [h,i]=[5,6];
let tab1=[1,2];
let tab2=[3,4];
[e,f]=tab2;
// e: 3
// f: 4
let tab=[tab1,tab2]// [[1,2],[3,4]]
// spread
tab=[...tab1,...tab2] // [1,2,3,4]