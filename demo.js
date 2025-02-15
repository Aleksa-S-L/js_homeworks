   //function pow(x , y) {
	//return x**y;
	//};
	//const result = pow(2,3);
	//console.log(result);

	export function pow(x, y) {
		if (y === 0) return 1; // Любое число в степени 0 равно 1
		if (y < 0) return 1 / pow(x, -y); // Обратное значение для отрицательной степени
		return x * pow(x, y - 1); // Рекурсивно умножаем x на себя y раз
	 }
	 
	 // Примеры проверки:
	 console.log(pow(2, 3));  // 8  (2 * 2 * 2)
	 console.log(pow(5, 0));  // 1  (любое число в степени 0 = 1)
	 console.log(pow(2, -2)); // 0.25 (1 / (2 * 2))
	 console.log(pow(3, 4));  // 81 (3 * 3 * 3 * 3)
	 console.log(pow(10, -3)); // 0.001 (1 / (10 * 10 * 10))
	 