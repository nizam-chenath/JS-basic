
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
        document.getElementById("numtype").innerHTML= "the given number is perfect"
    }
    if(s>n){
       alert("abundant")
       document.getElementById("numtype").innerHTML= "the given number is abundant"
    }
    if(s<n){
      alert("deficiant")
      document.getElementById("numtype").innerHTML= "the given number is deficiant"
      document.getElementById("numtype").innerHTML= "the given number is deficiant"
    }

  
}