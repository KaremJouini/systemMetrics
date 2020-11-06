function factoriel(n){
    if(n==0){
        return 1;
    }else{
        return n*factoriel(n-1);
    }
}
function factorielIterative(n){
    if(n==0||n==1){
        return 1;
    }else{
        let f=1;
        for(let i=2;i<=n;i++){
            f*=i;
        }
        return f;
    }
}

module.exports= {factoriel,factorielIterative};
