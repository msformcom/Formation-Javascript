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
document.addEventListener("DOMContentLoaded", () => {
    // Instanciation du service
    let service = new Messagerie();
    service.messages.subscribe(tab => {
        console.log(tab);
        let ul = document.querySelector("#ul_messages");
        ul.innerHTML = "";
        for (var m of tab) {
            let li = document.createElement("li");
            li.innerHTML = m.texte;
            ul.appendChild(li);
        }
        // Mettre à jour le ul avec la nouvelle liste des messages
    });
    // Envoi d'un message
    document.querySelector("#btn_envoi").addEventListener("click", () => {
        let message = document.querySelector("#input_entree").value;
        service.sendMessage(message);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXNzYWdlcmllL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU87QUFDUCxpQkFBaUI7QUFDakIscUNBQXFDO0FBQ3JDLHFFQUFxRTtBQUVyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQscURBQXFEO0FBQ3JELDRCQUE0QjtBQUM1QixrRUFBa0U7QUFFbEUsZ0NBQWdDO0FBQ2hDLCtDQUErQztBQUMvQyx5REFBeUQ7QUFDekQsK0NBQStDO0FBQy9DLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsU0FBUztBQUVULDJFQUEyRTtBQUMzRSw4Q0FBOEM7QUFDOUMsc0VBQXNFO0FBQ3RFLFlBQVk7QUFDWiwyRkFBMkY7QUFDM0YsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFDVixNQUFNO0FBRU4sUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFDLEdBQUUsRUFBRTtJQUM3QywyQkFBMkI7SUFDM0IsSUFBSSxPQUFPLEdBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUU3QixPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUEsRUFBRTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsRUFBRyxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUM7UUFDakIsS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsQ0FBQztZQUNkLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3JCLEVBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELDBEQUEwRDtJQUM5RCxDQUFDLENBQUMsQ0FBQztJQUVILHFCQUFxQjtJQUNyQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxHQUFFLEVBQUU7UUFDL0QsSUFBSSxPQUFPLEdBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUMsS0FBSyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTVZWTVxyXG4vLyBWIFZpZXcgPT4gSFRNTFxyXG4vLyBNIE1vZGVsID0+IERvbm5lIGxlcyBpbmZvcyBldCBhZ2l0XHJcbi8vIFZNIFZpZXdNb2RlbCA9PiBpbmRleC50cyA9PiBBc3N1cmVyIGxhIGxpYWlzb24gZW50cmUgVmlldyBldCBNb2RlbFxyXG5cclxuaW1wb3J0IHsgTWVzc2FnZXJpZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tZXNzYWdlcmllLmpzXCI7XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57XHJcbi8vICAgICAvLyBDcsOpYXRpb24gZHUgc29ja2V0XHJcbi8vICAgICBsZXQgc29ja2V0PW5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo0MjAwL21lc3NhZ2VyaWVcIik7XHJcblxyXG4vLyAgICAgLy8gcsOpY2VwdGlvbiBkZXMgbWVzc2FnZXNcclxuLy8gICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChlKT0+e1xyXG4vLyAgICAgICAgIGxldCB1bD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VsX21lc3NhZ2VzXCIpO1xyXG4vLyAgICAgICAgIGxldCBsaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbi8vICAgICAgICAgbGkuaW5uZXJIVE1MPWUuZGF0YTtcclxuLy8gICAgICAgICB1bD8uYXBwZW5kQ2hpbGQobGkpO1xyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bl9lbnZvaVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuLy8gICAgICAgICBpZihzb2NrZXQucmVhZHlTdGF0ZSE9c29ja2V0Lk9QRU4pe1xyXG4vLyAgICAgICAgICAgICBzb2NrZXQ9bmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjQyMDAvbWVzc2FnZXJpZVwiKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgbGV0IG1lc3NhZ2U9KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfZW50cmVlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4vLyAgICAgICAgIHNvY2tldC5zZW5kKG1lc3NhZ2UpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xyXG4gICAgLy8gSW5zdGFuY2lhdGlvbiBkdSBzZXJ2aWNlXHJcbiAgICBsZXQgc2VydmljZT1uZXcgTWVzc2FnZXJpZSgpO1xyXG5cclxuICAgIHNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKHRhYj0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYik7XHJcbiAgICAgICAgbGV0IHVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdWxfbWVzc2FnZXNcIik7XHJcbiAgICAgICAgdWwhLmlubmVySFRNTD1cIlwiO1xyXG4gICAgICAgIGZvcih2YXIgbSBvZiB0YWIpe1xyXG4gICAgICAgICAgICBsZXQgbGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pbm5lckhUTUw9bS50ZXh0ZTtcclxuICAgICAgICAgICAgdWwhLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgdWwgYXZlYyBsYSBub3V2ZWxsZSBsaXN0ZSBkZXMgbWVzc2FnZXNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEVudm9pIGQndW4gbWVzc2FnZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5fZW52b2lcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgbGV0IG1lc3NhZ2U9KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfZW50cmVlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIHNlcnZpY2Uuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbiJdfQ==
