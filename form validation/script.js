function Registration_Form(){
    let Name =document.getElementById("name").value;
    let Contact =document.getElementById("contact").value;
    let Email =document.getElementById("email").value;
    let Password =document.getElementById("password").value;
    let Confirm_password =document.getElementById("confirm_password").value;
    
    
    if(Name==""||Contact==""||Email==""||Password==""||Confirm_password==""){
        alert("All feild are Mandatory to fill");
        return false
    }else if(Contact.length>11||Contact.length<11){
        alert("Contact number must be 11")
        return false
    }else if (isNaN(Contact)){
        alert("Contact must be in number")
        return false
    }else if(Password.length!=10){
        alert("Password must be equal to 10 digit")
        return false
    } else if (Password!=Confirm_password){
        alert("enter the same password")
        return false
    }else{
        return true
    }
    }