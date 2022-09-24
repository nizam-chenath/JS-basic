var i=0

function changeBg(){
 color = ["blue","red","green","yellow","white","black"]
 document.bgColor= color[i]
 i++
 if(i==5)
 i=0;
}