const alertSuccessLogin = document.querySelectorAll(".alert-success-login");
const alertSuccessLike = document.querySelectorAll(".alert-success-like");
const alertDanger = document.querySelectorAll(".alert-danger");
const messageContainer = document.querySelectorAll(".pop-up-container");

const showAlert = (element) => {
  messageContainer.style.display = "flex";
  element.style.display = "block";
  setTimeout(() => {
    messageContainer.style.display = "none";
    element.style.display = "none";
  }, 2000);
};

const successLogin = () => {
  showAlert(alertSuccessLogin);
};

const successLike = () => {
  showAlert(alertSuccessLike);
};

const alertDangerMessage = () => {
  showAlert(alertDanger);
};

module.exports = { successLogin, successLike, alertDangerMessage };
