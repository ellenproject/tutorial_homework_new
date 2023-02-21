const account = document.querySelector(".account");
const password = document.querySelector(".password");
const register = document.querySelector(".register");

register.addEventListener('click', function(e){
    callSingUp();
    
})

function callSingUp(){
    // email: 'gonsakon3@gmail.com',
    // password: '12345678',

    if(account.value == "" || password.value == ""){
        alert("請填寫正確資訊");
        return; //中斷程式，就不會跑後續程式碼
    }

    let obj = {};

    obj.email = account.value;
    obj.password = password.value;
    console.log(obj);
    
    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup', obj)
      .then(function (response) {
        // console.log(response);
        if(response.data.message == "帳號註冊成功"){
            alert('恭喜您！註冊成功囉！')
        }else{
            alert('帳號註冊失敗，有可能有人用你的email註冊！')
        }

        //回傳成功後﹙無論註冊成功或失敗﹚，把資料清除
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        console.log(error);
      });
}

