// 'number' + 3 + 3
// Рядок + число -> конкатенація
// 'number3' + 3 -> 'number33'
console.log('number' + 3 + 3); //'number33'

//null + 3
//null перетворюється на 0
//0 + 3 -> 3
console.log (null + 3); //3

//5 && "qwerty"
//Логічний оператор && повертае останнє істине значення
//5 -> true, "qwerty" -> true значить , повернеться "qwerty"
console.log (5 && "qwerty"); //"qwerty"

// +'40' + +'2' + "hillel"
//унарний + перетворює строку у число
//40 + 2 + "hillel" -> 42 + "hillel" -> "42hillel"
console.log (+'40' + +'2' + "hillel"); //"42hillel"

// '10' - 5 === 6
// Рядок '10' перетворюється на число
// 10 - 5 -> дає 5
// 5 === 6 -> false ( строге порівняння)
console.log('10' - 5 === 6); // false

//true + false
// true → 1, false → 0
// 1 + 0 → 1
console.log(true + false); // 1

//'4px' - 3
// '4px' не може бути перетворено на число, тому результат NaN
// NaN - 3 -> також дає NaN, оскільки будь-яка операція з NaN (окрім порівняння) завжди повертає NaN.
console.log('4px' - 3); // NaN (не є числом)

// '4' - 3
// Рядок '4' перетворюється на число
// 4 - 3 -> 1
console.log ('4' - 3); // 1 

//'6' + 3 ** 0;
//3 ** 0 -> 1 (степінь)
//'6' + 1 -> '61'
console.log('6' + 3 ** 0); //'61'

// 12 / '6'
// '6' перетворюється на число
// 12 / 6 ->  2
console.log(12 / '6'); // 2

// '10' + (5 === 6) 
// 5 === 6 -> false ( строге порівняння)
// '10' + false → '10false'
console.log('10' + (5 === 6)); // "10false"

// null == '' ->  Порівнюються значення типів null та string (порожній рядок).
// null порівнюється тільки з undefined, але не з порожнім рядком
console.log(null == ''); // false

// 3 ** (9 / 3)
// 9 / 3 -> 3 (першечергове виконуємо дії в дужках)
// 3 ** 3 ->  27 (возведення у ступень)
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true' (!!'false' — подвійне заперечення перетворює значення в булеве: !!'false' -> true)
// Будь-який непорожній рядок → true (!!"true" - > true)
// !!'false' -> true, !!'true' -> true
// true == true ->true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1 (Починаємо з оператора && (він має вищий пріоритет за ||))
// '0' -> істинне значення
// '0' && 1 -> 1
// 0 || 1 -> 1
console.log(0 || '0' && 1); // 1

// (+null == false) < 1
// +null -> 0 (унарний плюс перетворює null у 0)
// 0 == false -> true (бо false -> 0)
// true < 1 (true конвертується в 1, отже маємо 1 < 1) -> false

console.log((+null == false) < 1); // false

// false && true || true
// false && true -> false (оскільки false зупиняє виконання)
// false || true -> true
console.log(false && true || true); // true

// false && (false || true)
// false || true -> true (оскільки в дужках)
// false && true -> false
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5
// +null -> 0 (унарний плюс перетворює null у 0)
// 0 == false -> true (бо false -> 0)
// 1 ** 5 -> 1 (возведення у ступень)
// true < 1 -> false (true конвертується в 1), отже 1 < 1 -> false
console.log((+null == false) < 1 ** 5); // false.