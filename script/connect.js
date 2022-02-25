import { setItem } from "./localstorage.js";
import { isValid } from "./utilsRequest.js";
const email = document.getElementById("mail")
const password = document.getElementById("password")
const btn = document.getElementById("btn")




const sendData = ()=>{
  
    const options = {
        method: 'POST',
        url: 'https://127.0.0.1:8000/api/login_check',
        headers: {'Content-Type': 'application/json', Authorization: 'Bearer '},
        data: {email: email.value, password: password.value}
      };
     
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        setItem(response.data["token"])
      }).catch(function (error) {
        console.error(error.response);
      });

    }
const sendForm = ()=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
       
        if(isValid(email.value,password.value)){
            console.log("test")
            sendData( email.value,password.value)
        }
    })

}
sendForm();


