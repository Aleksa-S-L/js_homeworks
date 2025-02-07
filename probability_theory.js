export function checkProbabilityTheory(count) {
	// Перевіряємо, що вхідний параметр є числом і більше 0
	if (typeof count !== "number" || count <= 0) {
	  throw new Error("Аргумент повинен бути додатним числом");
	}
 
	let evenCount = 0; // Лічильник парних чисел
	let oddCount = 0;  // Лічильник непарних чисел
 
	for (let i = 0; i < count; i++) {
	  // Генеруємо випадкове число в діапазоні від 100 до 1000 включно
	  let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
 
	  // Перевіряємо, чи число парне
	  if (randomNumber % 2 === 0) {
		 evenCount++;
	  } else {
		 oddCount++;
	  }
	}
 
	// Обчислюємо відсоткове співвідношення
	let evenPercentage = (evenCount / count) * 100;
	let oddPercentage = (oddCount / count) * 100;
 
	// Виводимо результати
	console.log("Кількість згенерованих чисел:", count);
	console.log("Парних чисел:", evenCount);
	console.log("Непарних чисел:", oddCount);
	console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% / ${oddPercentage.toFixed(2)}%`);
 }
 
 // Тестовий виклик функції
 checkProbabilityTheory(1000);