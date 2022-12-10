function SendMail() {
    var params = {
        from_name : document.getelementByld("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
     }
    emailjs.send("service_yoibtc8", "template_ka0a37k", params).then(function (res) {
                                                                                     
        alert("Success! " + res.status);
    })
}