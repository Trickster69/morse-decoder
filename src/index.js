const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res,
    str;
    for (let i = 0; i < expr.length; i+=10) {
        str = expr.slice(i, i+10);
        res += MORSE_TABLE[str.replace(/10/g,".").replace(/11/g, "-").replace(/0/g, "")];
        
    }
    return res.replace(/undefined/g," ").trim();
}

module.exports = {
    decode
}
// console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));