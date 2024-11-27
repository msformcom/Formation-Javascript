// .d.ts => definitely Typed
// permet à typescript de connaitre des interfaces (méthodes, membres)
// d'objets définis en js

interface Date{
    /**
     * Ajoute un certain nombre de jours à une date
     * @param {number} n Le nombre de jours à ajoute
     * @returns {Date} La date calculée
     */
    addDays(n:number): Date;
}