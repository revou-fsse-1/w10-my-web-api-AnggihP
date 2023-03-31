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
       
        const API_ENDPOINT_ACCOUNT  = "https://64247aee7ac292e3cfeb96c1.mockapi.io/accounts"
             
async function createNewAccounts(newAccount) {
  try {
    const params = {
      method: "POST",
      body: JSON.stringify(newAccount),
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch("https://64247aee7ac292e3cfeb96c1.mockapi.io/accounts", params);
   
    console.log("sudah submit");
  } catch (error) {
    console.log("error", error);
  }
}
        function register() {
          event.preventDefault();
        
          var inputEmail = document.getElementById("re").value;
          var inputpassword = document.getElementById("rp").value;
          var passwordRetype = document.getElementById("rrp").value;
        
          const validateLowerCase = /[a-z]/;
          const validateUpperCase = /^[A-Z][A-Za-z0-9]{1,11}$/;
          const validateNumber = /[0-9]/;
          const myRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
        
          if (inputEmail == "") {
            alert("Email required.");
            return;
          } else if (!myRegex.test(inputEmail)) {
            alert("Please input valid email");
          } else if (inputpassword == "") {
            alert("Password required.");
            return;
          } else if (!validateUpperCase.test(inputpassword)) {
            alert(
              "Please input password with min 1 Upper case"
            );
          } else if (passwordRetype == "") {
            alert("Password required.");
            return;
          } else if (inputpassword != passwordRetype) {
            alert("Password don't match retype your Password.");
            return;
          } else { createNewAccounts({email: inputEmail, password: inputpassword});
          }}

        function login() {
          event.preventDefault();
        
          var inputEmail = document.getElementById("se").value;
          var inputpassword = document.getElementById("sp").value;
        
          var i = emailArray.indexOf(inputEmail);
        
          if (emailArray.indexOf(inputEmail) == -1) {
            if (inputEmail == "") {
              alert("Email required.");
              return;
            }
            alert("Email does not exist.");
            return;
          } else if (passwordArray[i] != inputpassword) {
            if (inputpassword == "") {
              alert("Password required.");
              return;
            }
            alert("Password does not match.");
            return;
          } else {
            alert(inputEmail + " yor are login Now \n welcome to our website.");
            localStorage.setItem("email", inputEmail);
            localStorage.setItem("password", inputpassword);
            window.location.href = "app.html";
          }
        }
