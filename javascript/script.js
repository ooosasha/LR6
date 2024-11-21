const loader = document.getElementById("loader");
const result = document.getElementById("result");

loader.style.display = "block"; 

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!"); 
  }, 2000);
});

promise
  .then((message) => {
    loader.style.display = "none"; 
    result.textContent = message; 
  })
  .catch((error) => {
    loader.style.display = "none";
  });
