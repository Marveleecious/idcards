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
if (phone.startsWith('081') || phone.startsWith('080') || phone.startsWith('091') || phone.startsWith('090')  || phone.startsWith('070') || phone.startsWith('071') ) {
    if (phone.length == 11 ){
        valid = phone
    }
 else{
    valid = "invalid"
 }
}
else{
    valid = "invalid"
}
phoneno.innerHTML = valid;

let ages =document.getElementById('ages');
if (age >= 18){
    valid = age
}

else{
    valid = "you must be" + 18 
}

ages.innerHTML = valid;
})



