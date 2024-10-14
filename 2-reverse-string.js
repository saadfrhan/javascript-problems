const word = "hello";
let reversed = "";

for (let i = 0; i <= word.length - 1; i++) {
  reversed += word[word.length - 1 - i];
}

console.log(reversed);
