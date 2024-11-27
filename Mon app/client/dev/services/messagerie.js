//import { BehaviorSubject, bufferCount, bufferTime, map, Observable, Subject,} from "../node_modules/rxjs/dist/types/index";
//import { Observable } from "../node_modules/rxjs/dist/types/internal/Observable.js";
//import * as rxjs from "../node_modules/rxjs/dist/types/";
export class Messagerie {
    constructor() {
        this.socket = new WebSocket("ws://localhost:4200/messagerie");
        // Ceci est l'observable qui permet d'emmetre les messages
        this._messages = new rxjs.BehaviorSubject("Bienvenue");
        this._messagesRenvoyes = this._messages
            .pipe(rxjs.map(t => ({
            date: new Date(),
            texte: t
        })))
            .pipe(rxjs.scan((acc, s) => {
            acc.push(s);
            return acc.slice(-4);

        }, []));
        // this._messagesRenvoyes.subscribe(r=>{
        //     console.log(r);
        // })
        this.socket.addEventListener("message", (e) => {
            // Ajouter une sortie avec le message
            this._messages.next(e.data);
        });
    }
    // Implémentation => ne compte plus au niveau typage si déclarations présentes au dessu
    sendMessage(message, p2) {
        if (typeof message == "number") {
            this.sendMessage(message.toFixed(p2));
        }
        if (typeof message == "string") {
            this.socket.send(message);
        }
    }
    get messages() {
        return this._messagesRenvoyes;
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlcmllLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDZIQUE2SDtBQUU3SCxzRkFBc0Y7QUFFdEYsT0FBTyxLQUFLLElBQUksTUFBTSxpQ0FBaUMsQ0FBQztBQWN4RCxNQUFNLE9BQU8sVUFBVTtJQUNuQjtRQVVBLFdBQU0sR0FBQyxJQUFJLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBY3ZELDBEQUEwRDtRQUMxRCxjQUFTLEdBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFTLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELHNCQUFpQixHQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsQ0FBQztZQUNILElBQUksRUFBQyxJQUFJLElBQUksRUFBRTtZQUNmLEtBQUssRUFBQyxDQUFDO1NBQ1YsQ0FBQyxDQUFDLENBQUM7YUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsRUFBRTtZQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBUSxHQUFHLENBQUM7UUFDaEIsQ0FBQyxFQUFDLEVBQWdCLENBQUMsQ0FBQyxDQUFDO1FBbEM3Qix3Q0FBd0M7UUFDeEMsc0JBQXNCO1FBQ3RCLEtBQUs7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1lBRXhDLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBS0QsdUZBQXVGO0lBQ3ZGLFdBQVcsQ0FBQyxPQUF3QixFQUFFLEVBQVU7UUFDNUMsSUFBRyxPQUFPLE9BQU8sSUFBRSxRQUFRLEVBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBRyxPQUFPLE9BQU8sSUFBRSxRQUFRLEVBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQWNELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7Q0FFSiIsImZpbGUiOiJzZXJ2aWNlcy9tZXNzYWdlcmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBidWZmZXJDb3VudCwgYnVmZmVyVGltZSwgbWFwLCBPYnNlcnZhYmxlLCBTdWJqZWN0LH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvdHlwZXMvaW5kZXhcIjtcclxuXHJcbi8vaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L3R5cGVzL2ludGVybmFsL09ic2VydmFibGUuanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvdHlwZXNcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdle1xyXG4gICAgdGV4dGU6c3RyaW5nO1xyXG4gICAgZGF0ZTpEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlcmlle1xyXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZTpzdHJpbmcpIDogdm9pZDtcclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2U6bnVtYmVyLCBuYkRpZ2l0czpudW1iZXIpIDogdm9pZDtcclxuICAgIGdldCBtZXNzYWdlcygpIDogcnhqcy5PYnNlcnZhYmxlPElNZXNzYWdlW10+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlcmllIGltcGxlbWVudHMgSU1lc3NhZ2VyaWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIC8vIHRoaXMuX21lc3NhZ2VzUmVudm95ZXMuc3Vic2NyaWJlKHI9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChlKT0+e1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciB1bmUgc29ydGllIGF2ZWMgbGUgbWVzc2FnZVxyXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlcy5uZXh0KGUuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNvY2tldD1uZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6NDIwMC9tZXNzYWdlcmllXCIpO1xyXG4gICAgLy8gRMOpY2xhcmF0aW9uIGRlcyBzaWduYXR1cmVzIGRlIGxhIG3DqXRob2RlXHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZTogbnVtYmVyLCBuYkRpZ2l0czpudW1iZXIpOiB2b2lkO1xyXG4gICAgLy8gSW1wbMOpbWVudGF0aW9uID0+IG5lIGNvbXB0ZSBwbHVzIGF1IG5pdmVhdSB0eXBhZ2Ugc2kgZMOpY2xhcmF0aW9ucyBwcsOpc2VudGVzIGF1IGRlc3N1XHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcgfCBudW1iZXIsIHAyPzpudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0eXBlb2YgbWVzc2FnZT09XCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZS50b0ZpeGVkKHAyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBtZXNzYWdlPT1cInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2VjaSBlc3QgbCdvYnNlcnZhYmxlIHF1aSBwZXJtZXQgZCdlbW1ldHJlIGxlcyBtZXNzYWdlc1xyXG4gICAgX21lc3NhZ2VzPW5ldyByeGpzLkJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFwiQmllbnZlbnVlXCIpO1xyXG4gICAgX21lc3NhZ2VzUmVudm95ZXM9IHRoaXMuX21lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAucGlwZShyeGpzLm1hcCh0PT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ZTp0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICAucGlwZShyeGpzLnNjYW4oKGFjYyxzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5zbGljZSgtNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBhY2M7XHJcbiAgICAgICAgICAgICAgICB9LFtdIGFzIElNZXNzYWdlW10pKTtcclxuICAgIGdldCBtZXNzYWdlcygpOiByeGpzLk9ic2VydmFibGU8SU1lc3NhZ2VbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlc1JlbnZveWVzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=
