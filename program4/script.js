function primenum(){
    n=document.t1.number.value
    
    if(n<=0){
        alert("invalied number")
    }else{
      var num=2
      var count=1
      while(count<=n){
          var r=1;
          var i=2
          while(i<num){
              r=num%i
              if(r==0)
              break;
              i=i+1;
          }
          if(r!=0){
              if(count==n)
              document.t1.prime.value = num
            count++  
          }
        num++  
      }

      }
    }
