function sendEmail(){
  var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	

  var numberPhone = document.getElementById("number").value || "not set";

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: numberPhone,
    subject: document.getElementById("subject").value,
    bodytext: document.getElementById("bodytext").value,
    time: date_time,
  };

  if (params[number] === undefined ) {
    params[number] == "Not set";
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