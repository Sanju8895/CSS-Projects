

const rememberedPassword = document.querySelector("#remember-password");



let user = {username :"admin", password : "admin123"};

        let validationMessageDiv = document.querySelectorAll('.validation_message');
        validationMessageDiv.forEach((ele)=>{
            ele.style.display = 'none';
        })
     
      function login(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

       if(username == user.username && password == user.password){
          window.location.href="dashboard.html"
          console.log(rememberedPassword.value,"remembered password value")
          rememberedPassword.addEventListener("click", ()=>{
            console.log("remembered")
             if(rememberedPassword){
              localStorage.setItem('username', user.username);
              localStorage.setItem('password', user.password);
          }
          })
         
         }else{
          if(username !== user.username){
            alert('Please enter a valid username');
          }else if(password !== user.password){
            alert('Please enter a valid password');
          }else{
            alert("worng credentials");
          }
         }
    }