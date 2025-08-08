let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";

    if (pass.value.length < 4) {
      str.innerHTML = "Weak";
      str.style.color = "red";
    } else if (pass.value.length >= 4 && pass.value.length <= 7) {
      str.innerHTML = "Medium";
      str.style.color = "orange";
    } else {
      str.innerHTML = "Strong";
      str.style.color = "lightgreen";
    }
  } else {
    msg.style.display = "none"; // ✅ Corrected space
    str.innerHTML = ""; // ✅ Clear the strength text
  }
});
