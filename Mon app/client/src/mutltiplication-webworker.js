// Code d'un webworker
// le code ici va s'exécuter en parallele du code de la page 

self.addEventListener("message",(e)=>{
    let o=e.data;
    // recupération de a et b à partir de l'objet envoyé par la page
    let a=o.a;
    let b=o.b;
    // ca prend du temps
    let r=0;
    
    for(let i=0;i<a;i++){
        if(i % 100000000){
            self.postMessage({progress:i/a,result:undefined});
        }
        r+=b;
    }
    // Je renvois le résultat à la page sous la forme d'un message
    self.postMessage({progress:1,result:r});
})