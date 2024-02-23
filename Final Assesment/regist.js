let collegename=document.getElementById("clgname") ;
let teamname=document.getElementById("tname");
let teamleadercontactnumber=document.getElementById("phn");
 
 
 function validate(){
    if (clgname.value ==""){
       alert ("College name cannot be blank");
        return false;
    } else if(tname.value==""){
       alert ("Team name cannot be empty");
        return false;
    }
    else if (tname.value.length>20){
       alert ("must less than 20 characters");
        return false;
    }
    else if(phn.value==""){
       alert ("phone number is compulsory");
        alert("allow only numbers");
        
    }
    }