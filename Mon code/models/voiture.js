// Remplace la classe dans le JS <= ES5
function Voiture(){
    this.marque="Peugeot";
    this.model="C3";
}
// Ajout d'un membre hérité à la classe Voiture par l'intermédiaire de son prototype
Voiture.prototype.toto=1;


function Quatre4(){
    quatreRoues=true;
}

Quatre4.prototype=new Voiture(); // Quatre4 herite de voiture
Quatre4.prototype.toto=2; // surcharge du membre toto pour le Quatre4

