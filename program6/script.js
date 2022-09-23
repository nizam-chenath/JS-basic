function read(){
    a =parseInt(document.f1.firstNumber.value) 
    b = parseInt(document.f1.secondNumber.value) 

}

function addition(){
    read()
    c=a+b
    document.f1.display.value = c
}

function multiplication(){
    read()
    c=a*b
    document.f1.display.value = c
}

function substraction(){
    read()
    c=a-b
    document.f1.display.value = c
}

function division(){
    read()
    c=a/b
    document.f1.display.value = c
}