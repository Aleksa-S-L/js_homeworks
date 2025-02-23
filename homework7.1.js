//  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/
//  ^ – початок рядка
//  [a-zA-Z0-9]+ – перше слово (мінімум одна літера або цифра)
//  (?:\.[a-zA-Z0-9]+)? – (необов'язково) друге слово після крапки
//  @ – обов'язковий символ @
//  (gmail\.com|yahoo\.com) – лише Gmail або Yahoo
//  $ – кінець рядка
var arr = [
	{ userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
	{ userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
	{ userName: "Andrii", lastName: "", email: "andrii@mail.ru" } // Нам такі не підходять
];

const trustedEmails = arr
	.map(obj => obj.email) // Беремо тільки email
	.filter(email => /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email))

console.log(trustedEmails);  // Вивід: ["test.test@gmail.com", "dmitro.porohov@yahoo.com"]
                              

