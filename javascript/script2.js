function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve("Число більше 10");
      } else {
        reject("Число менше або дорівнює 10");
      }
    });
  }
  
  
  checkNumber(15)
    .then(message => {
      document.getElementById("result").textContent = message; 
      document.getElementById("loader").style.display = "none"; 
    })
    .catch(error => {
      document.getElementById("result").textContent = error; 
      document.getElementById("loader").style.display = "none"; 
    });
  
 
  document.getElementById("loader").style.display = "block";
  