import { Quatre4 ,Voiture} from "./models/index.js";
import * as models from "./models/index.js";

var v=new models.Voiture();

document.addEventListener("DOMContentLoaded",()=>{
    alert("coucou");
    document.querySelector("#heure")!.innerHTML=new Date().toDateString();
    let [a,b]=[1,2];

    var q=new Quatre4();
});