// npm init
// npm i express

// Chargement de la function express
// Chargement de module

const express=require("express");
const { message } = require("gulp-typescript/release/utils");

// Créer un serveur web
const app=express();



app.use(
(req,res,next)=>{
    //req = objet representant la requete => ip, body, cookies
    // res = objet representant la réponse => res.status(401)
    console.log("Requete entrante vers "+ req.url);
    // Passer au suivant
    next();
    console.log("Fin de requete vers "+ req.url);
}
)
// sert les fichiers statiques situés dans le dossier dist
app.use(express.static("./client/dev"));

// création d'un hub et ajout du middleware qui var gérer la comm ws sur app
const hub=require("express-ws")(app);

// Adresse : ws://localhost:4200/messagerie
app.ws("/messagerie",(ws,req)=>{
    // ws.on("connect",()=>{
    //     console.log("Nouvelle connection");
    // })
    ws.on("message",(msg)=>{
        // Journalisation du message entrant
        console.log("Message ws entrant : "+msg);
        //ws.send("Message recu")
        // Envoi du message à tous les clients
        for(let c of hub.getWss().clients){
            c.send(msg);
        }
    })
});


app.listen(4200,()=>{
    console.log("Server démarré");
});