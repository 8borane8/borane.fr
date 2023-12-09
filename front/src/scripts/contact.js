const object = document.querySelector("#input-object");
const message = document.querySelector("#input-message");
const firstname = document.querySelector("#input-firstname");
const lastname = document.querySelector("#input-lastname");
const phone = document.querySelector("#input-phone");
const email = document.querySelector("#input-email");

phone.addEventListener("input", () => {
    const phoneNumber = phone.value.replace(/\D/g, "");
    const formatedPhoneNumber = [];
    
    for (let i = 0; i < phoneNumber.length; i += 2) {
        formatedPhoneNumber.push(phoneNumber.slice(i, i + 2));
    }
    
    phone.value = formatedPhoneNumber.join(" ");
});


let contactRequestSent = false;
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    if(contactRequestSent)
        return;

    contactRequestSent = true;

    fetch("https://api.borane.fr/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            object: object.value,
            message: message.value,
            firstname: firstname.value,
            lastname: lastname.value,
            phone: phone.value,
            email: email.value
        })
    });
    
    Slick.redirect("/");
});