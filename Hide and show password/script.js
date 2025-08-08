let Password = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");

eyeIcon.onclick = function () {
  if (Password.type == "password") {
    Password.type = "text";
    eyeIcon.src = "eyeIcon.png";
  } else {
    Password.type = "password";
    eyeIcon.src = "hiddenEye.jfif";
  }
};
