const accountLogin = document.querySelector(".accountLogin");
const passwordLogin = document.querySelector(".passwordLogin");
const send = document.querySelector(".send");

send.addEventListener('click', function(e){
    callLogin();
})

function callLogin(){
    let objLogin = {};

    objLogin.email = accountLogin.value;
    objLogin.password = passwordLogin.value;

    if(accountLogin.value == '' || passwordLogin.value == ''){
        alert('請填寫正確資訊！')
        return;
    }

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signin',objLogin)
        .then( function(response) { 
            // console.log(response)
            if(response.data.message == '登入成功'){
                alert("恭喜您，登入成功囉！")
            }else{
                alert("登入失敗，請確認帳號密碼輸入正確，再試一次~")
            }
        })
        .catch( function(error) { 
            console.log(error)
        })
}