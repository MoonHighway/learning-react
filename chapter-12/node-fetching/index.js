const fetch = require("node-fetch");

const userDetails = response => {
  const login = response.login;
  console.log(login);
};

fetch("https://api.github.com/users/moonhighway")
  .then(res => res.json())
  .then(userDetails);
