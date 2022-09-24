function startTime(){
    var today = new Date()
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
   e= document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
    console.log(e)

    var t = setTimeout(startTime, 500);
    
}
function checkTime(i){
    if(i<10){
        i = "0" + i
        return i
    }
    return i
}