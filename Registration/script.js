

document.querySelector('.regbtn').addEventListener('click', function(){
    if (document.querySelector('#password1').value !== document.querySelector('#password2').value){
        document.querySelector('#alert').textContent = "Password must match each other";
        document.querySelector('#alert').style.color = "red";
        document.querySelector('#regsubmit').disabled = true;
    }else{
        document.querySelector('#alert').style.display = "none";
    }


});
