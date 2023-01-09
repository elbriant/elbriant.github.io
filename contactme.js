function sendEmail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    bodytext: document.getElementById("bodytext").value,
  };

  const serviceID = "service_ghcm1bk";
  const templateID = "template_06t7ras";

  emailjs.send(serviceID, templateID, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("bodytext").value = "";
    console.log(res);
    alert("El mensaje se ha enviando exitosamente");
  })
  .catch((err) => console.log(err));
}