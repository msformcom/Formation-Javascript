"use strict";
// MVVM
// V View => HTML
// M Model => Donne les infos et agit
// VM ViewModel => index.ts => Assurer la liaison entre View et Model
document.addEventListener("DOMContentLoaded", () => {
    // Création du socket
    let socket = new WebSocket("ws://localhost:4200/messagerie");
    // réception des messages
    socket.addEventListener("message", (e) => {
        let ul = document.querySelector("#ul_messages");
        let li = document.createElement("li");
        li.innerHTML = e.data;
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
    });
    document.querySelector("#btn_envoi").addEventListener("click", () => {
        if (socket.readyState != socket.OPEN) {
            socket = new WebSocket("ws://localhost:4200/messagerie");
        }
        let message = document.querySelector("#input_entree").value;
        socket.send(message);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXNzYWdlcmllL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPO0FBQ1AsaUJBQWlCO0FBQ2pCLHFDQUFxQztBQUNyQyxxRUFBcUU7QUFFckUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFDLEdBQUUsRUFBRTtJQUM3QyxxQkFBcUI7SUFDckIsSUFBSSxNQUFNLEdBQUMsSUFBSSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUUzRCx5QkFBeUI7SUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1FBQ25DLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxFQUFFLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEIsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEdBQUUsRUFBRTtRQUMvRCxJQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDO1lBQy9CLE1BQU0sR0FBQyxJQUFJLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLE9BQU8sR0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7UUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1lc3NhZ2VyaWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNVlZNXHJcbi8vIFYgVmlldyA9PiBIVE1MXHJcbi8vIE0gTW9kZWwgPT4gRG9ubmUgbGVzIGluZm9zIGV0IGFnaXRcclxuLy8gVk0gVmlld01vZGVsID0+IGluZGV4LnRzID0+IEFzc3VyZXIgbGEgbGlhaXNvbiBlbnRyZSBWaWV3IGV0IE1vZGVsXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57XHJcbiAgICAvLyBDcsOpYXRpb24gZHUgc29ja2V0XHJcbiAgICBsZXQgc29ja2V0PW5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo0MjAwL21lc3NhZ2VyaWVcIik7XHJcblxyXG4gICAgLy8gcsOpY2VwdGlvbiBkZXMgbWVzc2FnZXNcclxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChlKT0+e1xyXG4gICAgICAgIGxldCB1bD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VsX21lc3NhZ2VzXCIpO1xyXG4gICAgICAgIGxldCBsaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MPWUuZGF0YTtcclxuICAgICAgICB1bD8uYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bl9lbnZvaVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICBpZihzb2NrZXQucmVhZHlTdGF0ZSE9c29ja2V0Lk9QRU4pe1xyXG4gICAgICAgICAgICBzb2NrZXQ9bmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjQyMDAvbWVzc2FnZXJpZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lc3NhZ2U9KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfZW50cmVlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIHNvY2tldC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==