
const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "panel.html";
    })
    .catch((error) => {
      console.error(error);
      errorMessage.textContent = "Hatalı e-posta veya şifre.";
    });
});
