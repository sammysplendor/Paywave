export const protectPage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.replace("../pages/signin.html");
  }
};
