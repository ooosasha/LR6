function randomNumber() {
    return new Promise((resolve) => {
      // Генеруємо випадковий час у діапазоні від 1 до 3 секунд
      const randomTime = Math.floor(Math.random() * 3000);
  
      // Генеруємо випадкове число від 1 до 100
      const randomValue = Math.floor(Math.random() * 100) + 1;
  
      // Виконуємо Promise через випадковий час
      setTimeout(() => {
        resolve(randomValue);
      }, randomTime);
    });
  }
  
  // Використання функції
  randomNumber()
    .then(number => {
      console.log(`Випадкове число: ${number}`);
    });
  

