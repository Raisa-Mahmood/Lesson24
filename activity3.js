function validation(){
    const user=document.getElementById("i1").value;
    const pswd=document.getElementById("i2").value;
    const age=document.getElementById("i3").value;
    const eml=document.getElementById("i4").value;
    const msgbox=document.getElementById("p1");
    let message="";
    if(user==""){
        message="Name is required!";
        msgbox.style.color="red";
    }
    else if(pswd==""){
        message="Password is required!";
        msgbox.style.color="red";
    }
    else if(age==""){
        message="Age is required!";
        msgbox.style.color="red";
    }
    else if(eml==""){
        message="Email is required!";
        msgbox.style.color="red";
    }
    else {
        message="Signing in was successful!";
        msgbox.style.color="green";
    }
    msgbox.innerText=message
}