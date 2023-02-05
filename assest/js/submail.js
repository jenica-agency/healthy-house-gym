document.getElementById("subform").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("submail").value;
  const body = `<html><h2 style='color:red'>SUBSCRIBE TO OUR
    NEWSLETTER</h2><strong>Mail: ${username}  <br> Ask about our news</strong><br></html>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jenicaagency@gmail.com",
    Password: "ABC1A38323D05C388B9481FF4AA17CD8C333",
    To: "healthyhousegymegy@gmail.com",
    From: "jenicaagency@gmail.com",
    Subject: "Healthy House Gym",
    Body: body,
  });
  document.getElementById("submail").value = "";
  document
    .getElementById("submail")
    .setAttribute("placeholder", "Mail Was Sent");
});
