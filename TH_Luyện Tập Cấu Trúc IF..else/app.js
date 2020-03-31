function check() {
    let acc=document.getElementById("acc").value;
    if (acc=="admin"){
        let pass= prompt("Nhập Mật KHẩu","");
       if (pass=="TheMaster") {
           alert("Welcome to C0320H1");
       }else{
           alert("Sai Mật Khẩu");
       }
    }else if (acc=="null"){
        alert("Canceled");
    }else {
        alert("I don't Know You..!");
    }
}