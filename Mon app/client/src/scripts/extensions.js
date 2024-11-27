
Date.prototype.addDays=function(n){
    // this => Objet date sur lequel la fonction est utilisée
    // retour de la nouvelle date calculée
    return new Date(this.getTime()+24*60*60*1000*n);
}



