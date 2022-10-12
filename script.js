let regForm = document.getElementById('registerform');
regForm.addEventListener('submit', function(e){
        e.preventDefault();
    let name = regForm['name'].value;
    let email = regForm['email'].value;
   let phone = regForm['phone'].value;
   let age = regForm['age'].value
//    console.log(name)
//    console.log(email)
//    console.log(phone)
//    console.log(age)
   
let fullname =document.getElementById('fullname');
fullname.innerHTML = name;

let emails =document.getElementById('emails');
emails.innerHTML = email;

let phoneno =document.getElementById('phoneno');
phoneno.innerHTML = phone;

let ages =document.getElementById('ages');
ages.innerHTML = age;
})



