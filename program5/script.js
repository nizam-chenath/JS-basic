function multipleTable(){
    var number = document.f1.number.value;
    var limit = document.f1.limit.value;
    // document.getElementById("heading").innerHTML = ("multiplication table here")

    for(let i=1;i<=limit;i++){
        ans = number * i;
        document.writeln(number + " * " + i + " = " + ans + "<br>")
    }

}