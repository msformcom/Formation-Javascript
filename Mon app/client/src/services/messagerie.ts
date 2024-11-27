
//import { BehaviorSubject, bufferCount, bufferTime, map, Observable, Subject,} from "../node_modules/rxjs/dist/types/index";

//import { Observable } from "../node_modules/rxjs/dist/types/internal/Observable.js";

import * as rxjs from "../node_modules/rxjs/dist/types";


export interface IMessage{
    texte:string;
    date:Date;
}

export interface IMessagerie{
    sendMessage(message:string) : void;
    sendMessage(message:number, nbDigits:number) : void;
    get messages() : rxjs.Observable<IMessage[]>
}

export class Messagerie implements IMessagerie{
    constructor(){
        // this._messagesRenvoyes.subscribe(r=>{
        //     console.log(r);
        // })
        this.socket.addEventListener("message",(e)=>{

            // Ajouter une sortie avec le message
            this._messages.next(e.data);
        })
    }
    socket=new WebSocket("ws://localhost:4200/messagerie");
    // Déclaration des signatures de la méthode
    sendMessage(message: string): void;
    sendMessage(message: number, nbDigits:number): void;
    // Implémentation => ne compte plus au niveau typage si déclarations présentes au dessu
    sendMessage(message: string | number, p2?:number): void {
        if(typeof message=="number"){
            this.sendMessage(message.toFixed(p2));
        }
        if(typeof message=="string"){
            this.socket.send(message);
        }
    }

    // Ceci est l'observable qui permet d'emmetre les messages
    _messages=new rxjs.BehaviorSubject<string>("Bienvenue");
    _messagesRenvoyes= this._messages
                .pipe(rxjs.map(t=>({
                                date:new Date(),
                                texte:t
                            })))
                .pipe(rxjs.scan((acc,s)=>{
                    acc.push(s);
                    acc.slice(-4);
                    return  acc;
                },[] as IMessage[]));
    get messages(): rxjs.Observable<IMessage[]> {
        return this._messagesRenvoyes;
    }

}



