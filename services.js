var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн"
};

// Додаємо методи до об'єкта services
services.price = function () {
	return Object.values(this)
		 .filter(value => typeof value === "string" && value.includes("грн"))
		 .reduce((sum, value) => sum + parseInt(value), 0);
};

services.minPrice = function () {
	return Math.min(
		 ...Object.values(this)
			  .filter(value => typeof value === "string" && value.includes("грн"))
			  .map(value => parseInt(value))
	);
};

services.maxPrice = function () {
	return Math.max(
		 ...Object.values(this)
			  .filter(value => typeof value === "string" && value.includes("грн"))
			  .map(value => parseInt(value))
	);
};

// Додаємо нову послугу
services['Розбити скло'] = "200 грн";

console.log("Загальна вартість:", services.price() + " грн"); 
console.log("Мінімальна ціна:", services.minPrice() + " грн"); 
console.log("Максимальна ціна:", services.maxPrice() + " грн"); 
