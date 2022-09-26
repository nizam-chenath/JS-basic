function validateEmail(){
     var email = document.form.email.value;
     var atPosition = email.indexOf("@")
     var dotPosition = email.indexOf(".");
     if(atPosition<1 || dotPosition< atPosition+2 || dotPosition+2 >= email.length){
         alert("enter a valied email address")
         return false
     }
     console.log(atPosition)

}