describe("this context",()=>{
    class Voiture{
        prix=1000;
        augmenter(){
            this.prix+=1;
        }
    }
    let vis=this;

    // sera exécutée dans le contexte global
    let f1=function(){
        let vis=this;
    }
    // sera exécutée dans le context actuel (this actuel)=> this de la fonction
    let f2=()=>{
        let vis=this;
    }

    it("a un contexte",()=>{
        let v=new Voiture();
        v.augmenter();
        expect(v.prix).toBe(1001);
    })

    it("changement de contexte",()=>{
        let v=new Voiture();

        v.augmenter.call({prix:100}); // exécuter la fonction augmenter avec un contexte specifique
        expect(v.prix).toBe(1001);
    })

    it("function classique",()=>{
        
        let vis=this;
        f1();
    });
    it("function fléchée",()=>{
        // Définition d'une fonction fléchée
        let vis=this;
        f2();
    })

    it("arguments",()=>{
        let t=[1,2,3];
        let tSum=t.reduce((a,b)=>{
          return  a+b;
        },0);


        let sum=function(){
            let s=0;
            for(let i=0;i<arguments.length;i++){
                s+=arguments[i];
            }

            //Array.reduce.call(arguments)
            // arguments.forEach(n=>{
            //     s+=n;
            // })
            return s;


        }
        sum(1,2,3,5); //11
    })
    it("call function",()=>{
        var f=function(a,b){
            return a+b;

        }

        f.call(3,2,1); //=> execute f => this : 3 , a:2, b: 1
        let g=f.bind(3,2) // => fonction g => this : 3 , a:2
        g(5) // execute indirectement f => this : 3 , a:2, b: 5
        f.apply( [1,2]) //=> execute f => this : 3 , a:1, b: 2

    })

    


})