import { isValid } from "./utilsRequest.js";

const email = document.getElementById("mail")
const password = document.getElementById("password")
const btn = document.getElementById("btn")
const err = document.getElementById("info-error")


const sendData = (mail,pass)=>{
    const options = {
    method: 'POST',
    url: 'https://127.0.0.1:8000/api/users/create',
    headers: {'Content-Type': 'application/json', Authorization: 'Bearer '},
    data: {email: mail, password: pass}
    };
    axios.request(options)

    .then(function (response) {
        console.log(response.data);      
   
    })
    .catch(function (error) {
        // handle error
        err.innerHTML =  error.response.data["hydra:description"]
        console.log(error.response.data["hydra:description"])
      })
    }
const sendForm = ()=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("fd");
        if(isValid(email.value,password.value)){
            sendData(email.value,password.value)
        }
    })

}
sendForm();


