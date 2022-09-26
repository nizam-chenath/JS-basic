function checkPalindrom(){ 
    let string = document.form.string.value;
    let length = string.length
    let count =1 
    for(let i=0;i<length/2;i++){
        if(string[i] !== string[length-1-i]){
            count =0;
            break
        }
    }
    if(count==1){
        alert("string is palindrom")
    }
    else{
        alert("it is not palindrome")
    }
}