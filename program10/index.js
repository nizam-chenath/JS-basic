function checkPassword ()  {
    var password1 = document.form.password1.value;
    var passsword2 = document.form.password2.value;
    if(password1.length<8){
        confirm("please enter a password that 8 or more character")
        return false
    }else if(password1 == passsword2){
        return true;
    }else{
        alert("password must be same")
        return false
    }
}