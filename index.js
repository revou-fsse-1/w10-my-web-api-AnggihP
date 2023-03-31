const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });

        var emailArray = [];
        var passwordArray = [];
        
        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
       
        const API_ENDPOINT_ACCOUNT = "https://64247aee7ac292e3cfeb96c1.mockapi.io/accounts"
             
        function register() {
          event.preventDefault();
        
          var email = document.getElementById("re").value;
          var password = document.getElementById("rp").value;
          var passwordRetype = document.getElementById("rrp").value;
        
          const validateLowerCase = /[a-z]/;
          const validateUpperCase = /^[A-Z][A-Za-z0-9]{1,11}$/;
          const validateNumber = /[0-9]/;
          const myRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
        
          if (email == "") {
            alert("Email required.");
            return;
          } else if (!myRegex.test(email)) {
            alert("Please input valid email");
          } else if (password == "") {
            alert("Password required.");
            return;
          } else if (!validateUpperCase.test(password)) {
            alert(
              "Please input password with min 1 Upper case"
            );
          } else if (passwordRetype == "") {
            alert("Password required.");
            return;
          } else if (password != passwordRetype) {
            alert("Password don't match retype your Password.");
            return;
          } else if (emailArray.indexOf(email) == -1) {
            emailArray.push(email);
            passwordArray.push(password);
        
            alert(email + "  Thanks for registration. \nTry to login Now");
        
            document.getElementById("re").value = "";
            document.getElementById("rp").value = "";
            document.getElementById("rrp").value = "";
          } else {
            alert(email + " is already register.");
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            window.location.href = "index.html";
          }
        }


        function login() {
          event.preventDefault();
        
          var email = document.getElementById("se").value;
          var password = document.getElementById("sp").value;
        
          var i = emailArray.indexOf(email);
        
          if (emailArray.indexOf(email) == -1) {
            if (email == "") {
              alert("Email required.");
              return;
            }
            alert("Email does not exist.");
            return;
          } else if (passwordArray[i] != password) {
            if (password == "") {
              alert("Password required.");
              return;
            }
            // gimana caranya masukkin rest ke sini
            alert("Password does not match.");
            return;
          } else {
            alert(email + " yor are login Now \n welcome to our website.");
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            window.location.href = "app.html";
          }
        }
        // function forgot() {
        //   event.preventDefault();
        
        //   var email = document.getElementById("fe").value;
        
        //   if (emailArray.indexOf(email) == -1) {
        //     if (email == "") {
        //       alert("Email required.");
        //       return;
        //     }
        //     alert("Email does not exist.");
        //     return;
        //   }
        
        //   alert("email is send to your email check it in 24hr. \n Thanks");
        //   document.getElementById("fe").value = "";
        // }
        