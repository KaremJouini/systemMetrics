function factoriel(n){
    if(n==0){
        return 1;
    }else{
        return n*factoriel(n-1);
    }
}

module.exports= {factoriel};