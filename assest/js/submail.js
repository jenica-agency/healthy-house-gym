document.getElementById("subform").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("submail").value;
  const body = `<html><h2 style='color:red'>SUBSCRIBE TO OUR
    NEWSLETTER</h2><strong>Mail: ${username}  <br> Ask about our news</strong><br></html>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohiefineartcompany@gmail.com",
    Password: "1D5B9B8351314E69BDCD92389599CAB54073",
    To: "hagarhassan813@gmail.com",
    From: "mohiefineartcompany@gmail.com",
    Subject: "MohieFineArtco",
    Body: body,
  });
  document.getElementById("submail").value = "";
  document
    .getElementById("submail")
    .setAttribute("placeholder", "Mail Was Sent");
});
