/**
 * Created by Ikhsan Pratama on 11/27/2023.
 */
$("#tombol-login").click(function(e){
    var username = $('#username').val();
    var password = $('#password').val();
    if(username == ""){
        alert('username tidak boleh kosong');
    }else if(password == ""){
        alert("password tidak boleh kosong")
    }else if(username != "ikhsan" || password != "pratama"){
        alert("username & password salah");
    }else{
        window.location.replace("index2.html");
    }
    e.preventDefault();
});