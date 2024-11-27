// MVVM
// V View => HTML
// M Model => Donne les infos et agit
// VM ViewModel => index.ts => Assurer la liaison entre View et Model

document.addEventListener("DOMContentLoaded",()=>{
    // Création du socket
    let socket=new WebSocket("ws://localhost:4200/messagerie");

    // réception des messages
    socket.addEventListener("message",(e)=>{
        let ul=document.querySelector("#ul_messages");
        let li=document.createElement("li");
        li.innerHTML=e.data;
        ul?.appendChild(li);
    })

    document.querySelector("#btn_envoi")!.addEventListener("click",()=>{
        if(socket.readyState!=socket.OPEN){
            socket=new WebSocket("ws://localhost:4200/messagerie");
        }
        let message=(document.querySelector("#input_entree") as HTMLInputElement).value;
        socket.send(message);
    });
});