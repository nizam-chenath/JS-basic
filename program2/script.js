
function numtypeFunction(){
    n = parseInt(document.f1.t1.value)
    i=1;
    s=0;
    while(i<n){
        if(n % i ==0)
        s=s+i
        i=i+1
    }
    if(s==n){
        alert("perfect")
    }
    if(s>n){
       alert("abundant")
    }
    if(s<n){
      alert("deficiant")
    }

  
}