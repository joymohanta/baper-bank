document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("email");
  const email = userEmail.value;
  //   console.log(email);
  const userPassword = document.getElementById("password");
  const password = userPassword.value;
  //   console.log(password);
  // conditional entry
  if (email == "sontan@gmail.com" && password == "54321") {
    window.location.href = "banking.html";
  } else {
    console.log("Invalid user");
  }
});
