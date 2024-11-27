import { Quatre4 ,Voiture} from "./models/index.js";
import * as models from "./models/index.js";

var v=new Quatre4();



document.addEventListener("DOMContentLoaded",()=>{
    

    // Ajouter un li au ul présent dans la page
    // En js
    let lis=document.querySelectorAll("li");
    for(let e of lis){
        e.addEventListener("click",()=>{
            e.style.textDecoration="line-through";
        });
    };

    // en jquery
    $("li").on("click",function (){
        $(this).css("text-decoration",'line-through');
        });






    document.querySelector("#heure")!.innerHTML=new Date().addDays(7).toDateString();

});