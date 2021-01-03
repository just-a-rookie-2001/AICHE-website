var form = document.getElementById("contactForm");

function validate() {
    email = document.getElementById("email");
    usrname = document.getElementById("name");
    phone = document.getElementById("phone");
    msg = document.getElementById("message");

    if (usrname.value == "") {
        alert("Please provide your name!");
        usrname.focus();
        return false;
    }
    if (
        phone.value == "" ||
        isNaN(phone.value) ||
        phone.value.length != 10
    ) {
        alert("Please provide your 10 digit phone number");
        phone.focus();
        return false;
    }
    if (msg.value == "") {
        alert("Please provide your message!");
        return false;
    }
    if (email.value == "") {
        alert("Please provide your Email !");
        email.focus();
        return false;
    } else {
        atpos = email.value.indexOf("@");
        dotpos = email.value.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter email ID in correct format")
            document.myForm.email.focus();
            return false;
        }
    }
    return true;
}

function handleForm(event) {
    event.preventDefault();
    if (validate()) {
        email = document.getElementById("email").value;
        usrname = document.getElementById("name").value;
        phone = document.getElementById("phone").value;
        msg = document.getElementById("message").value;
        body =
            "You have received a new message from your website contact form. Here are the details: \n\n Name: " +
            usrname +
            "\n\nEmail: " +
            email +
            "\n\nPhone: " +
            phone +
            "\n\nMessage: \n" +
            msg;
        Email.send({
            SecureToken: "470a2f46-df5f-4743-be22-7d2341fe277b",
            To: "aiche.seas@ahduni.edu.in",
            From: email,
            Subject: "AIChE Website User Contact - " + usrname,
            Body: body,
        }).then((message) => alert(message));
    }
}
form.addEventListener("submit", handleForm);
