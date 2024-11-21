function checkNumber(num) {
    return new Promise((loader, result) => {
      if (num > 10) {
        loader("Число більше 10");
      } else {
        result("Число менше або дорівнює 10");
      }
    });
  }
  
  // Використання функції
  checkNumber(15)
    .then(message => {
      console.log(message); 
    })
    .catch(error => {
      console.error(error); 
    });
  