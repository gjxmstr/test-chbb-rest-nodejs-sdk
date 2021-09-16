// Require chbb-rest-sdk
var chbb = require("chbb-rest-nodejs-sdk");

// Require chbb-rest-sdk
chbb.configure({
  mode: "dev", // dev only
  signing_key: "9Jei52+EWBDchGThTEsjTxqQtM8UKmxM6XAjdA==",
  subscription_key: "1ab2bsd-23023db-3233db-23sd2-23ff",
});

// Generate Token
chbb.generateToken({}, (error, tokenString) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Generated Token");
    console.log(tokenString);
    console.log("***************************");
  }
});

chbb.sale.registerSale({}, {}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Registered Sale Response");
    console.log(receivedData);
    console.log("***************************");
  }
});
