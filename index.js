function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "okonifiok0@gmail.com",
        Password : "jhoesef151",
        To : 'okonifiok0@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}