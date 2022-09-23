function triangle(){
    a=parseInt(prompt("enter side 1 of triangle"))
    b=parseInt(prompt("enter side 2 of triangle"))
    c=parseInt(prompt("enter side 3 of triangle"))
    
    if(a+b > c && b+c > a && a+c>b){
        alert("can form a traingle")
        s=(a+b+c)/2
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
        document.f1.res.value = area
    }else{
        alert("can not form a triangle with this sides")
    }
}