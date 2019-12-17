var kata = ''
function balikKata(kata) {
    var s = '';
    var i = kata.length;
    while (i>0) {
        s += kata.substring(i-1,i);
        i--;
    }
    return s;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS