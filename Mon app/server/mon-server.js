// npm init
// npm i express

// Chargement de la function express
// Chargement de module

const express=require("express");

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
app.use(express.static("../client/dev"));


app.listen(4200,()=>{
    console.log("Server démarré");
});