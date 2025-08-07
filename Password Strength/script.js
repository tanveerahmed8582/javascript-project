let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = " none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "weak";
  }
});
