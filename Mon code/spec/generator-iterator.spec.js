describe("generator-iterator",()=>{
    let t=[1,2,3,4];
    let o={a:1,b:2};
    it("iteration",()=>{
        // in => clés ou index
        for(let i in t){
            // i : 0,1,2,3, length
            let v=t[i];
        }

        for(let i of t){
            let v=i;
        }

        for(let e of "toto"){
            let v=e;
        }
    });

    // est-il possible d'avoir un tableau avec les entiers positifs

    // Genator
    function* unDeuxTrois(){
        yield 1;
        yield 2;
        yield 3;
    }

    // 1,1,2,3,5,8,13,21
    function* fibo(){
        let i0=0;
        let i1=1;
        while(true){
            yield i1;
            [i0,i1]=[i1,i1+i0];
        }
    }



    it("use generator",()=>{
        // Iteration
        for(let i of fibo()){
            let v=i;
            if(i>1000){
                break;
            }
        }
    });

    it("iteration",()=>{
        var generator=fibo();
        // Demande au générateur la prochaine valeur
        let v=generator.next();
        while(!v.done){
            var t=v.value;
            v=generator.next();
        }


    })

})