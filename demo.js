   //function pow(x , y) {
	//return x**y;
	//};
	//const result = pow(2,3);
	//console.log(result);

	function pow(x, y) {
		if (y === 0)	return 1;
		if (x === 0 && y < 0) throw new Error("Ділення на нуль неможливе"); // 0 у від'ємному степені не визначено
		let result = 1;
		let isNegativExponent = false; // Перевірка на від'ємний степінь

		// Якщо степінь від'ємний, робимо його додатнім для обчислення
		if ( y < 0 ) {
			isNegativExponent = true;
			y = -y;
		}

		// Використовуємо цикл for для множення числа 'x' y разів
		for (let i = 0; i < y; i++ ) {
			result = result * x;
		}

		// Якщо початковий степінь був від'ємним, повертаємо обернене значення
		return isNegativExponent ? 1 / result : result;
	};

	//Перевірка функції
	console.log (pow (2, 3));
	console.log (pow(4, 5));
	console.log (pow (5, 0));
	console.log (pow (2,-2));
	console.log(pow(-2, 4));   
	console.log(pow(-2, 3));   
	console.log(pow(0, 5));    
	
	try {
	  console.log(pow(0, -1)); // Викине помилку: ділення на нуль
	} catch (error) {
	  console.error(error.message);
	};