// \b[^aA\s]{6,}\b
//  \b – граница слова
//  [^aA\s] – любой символ, кроме A, a и пробела
//  {6,} – минимум 6 символов
//  \b – граница слова
const text = "Wonderful Joyful Happiness Time Task Apple";
const pattern = /\b[^aA\s]{6,}\b/g;
const matches = text.match(pattern);
console.log(matches); // ['Wonderful', 'Joyful']
