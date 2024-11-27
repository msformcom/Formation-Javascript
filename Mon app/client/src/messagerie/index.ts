// MVVM
// V View => HTML
// M Model => Donne les infos et agit
// VM ViewModel => index.ts => Assurer la liaison entre View et Model

import { Messagerie } from "../services/messagerie.js";

// document.addEventListener("DOMContentLoaded",()=>{
//     // Création du socket
//     let socket=new WebSocket("ws://localhost:4200/messagerie");

//     // réception des messages
//     socket.addEventListener("message",(e)=>{
//         let ul=document.querySelector("#ul_messages");
//         let li=document.createElement("li");
//         li.innerHTML=e.data;
//         ul?.appendChild(li);
//     })

//     document.querySelector("#btn_envoi")!.addEventListener("click",()=>{
//         if(socket.readyState!=socket.OPEN){
//             socket=new WebSocket("ws://localhost:4200/messagerie");
//         }
//         let message=(document.querySelector("#input_entree") as HTMLInputElement).value;
//         socket.send(message);
//     });
// });

document.addEventListener("DOMContentLoaded",()=>{
    // Instanciation du service
    let service=new Messagerie();

    service.messages.subscribe(tab=>{
        console.log(tab);
        let ul=document.querySelector("#ul_messages");
        ul!.innerHTML="";
        for(var m of tab){
            let li=document.createElement("li");
            li.innerHTML=m.texte;
            ul!.appendChild(li);
        }
        // Mettre à jour le ul avec la nouvelle liste des messages
    });

    // Envoi d'un message
    document.querySelector("#btn_envoi")!.addEventListener("click",()=>{
        let message=(document.querySelector("#input_entree") as HTMLInputElement).value;
        service.sendMessage(message);
    });

})
