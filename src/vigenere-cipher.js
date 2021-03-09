const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {



  constructor (reverse) {
    this.reverse = reverse;
    this.vigenereTable = this.createTable();
  }

  createTable() {
    let vigenereTable = [];
    let vigenereLine = [];
    for (let i = 0; i<26; i++) {
      for (let j = 0; j<26; j++) {
        let asc = 97+i+j;
        if (asc>122) asc -= 26;
        vigenereLine.push(String.fromCharCode(asc));
      }
     vigenereTable.push(vigenereLine); 
     vigenereLine = [];
    }
    return vigenereTable;
  }

  createKeyLine(message, key) {
    let keyLine = '';
    let j = 0;

    for (let i = 0; i<message.length;i++) {
      if (message[i] != ' ') {
        keyLine += key[j];
          if (j<key.length-1){
              j++;
          } else j = 0;
      } else keyLine += ' ';
    }
    return keyLine;
  }

  encrypt(message, key) {
    this.keyLine = this.createKeyLine(message, key).toLowerCase();
    message = message.toLowerCase();
    let result = '';

    for (let i = 0; i<message.length; i++) {
      if (this.vigenereTable[0].includes(message[i])){
          let y = this.vigenereTable[0].indexOf(message[i]);
          let x = this.vigenereTable[0].indexOf(this.keyLine[i]);
          result += this.vigenereTable[y][x];
      } else result += message[i];
      }

    return (this.reverse == false) ? result.toUpperCase().split('').reverse().join('') : result.toUpperCase();
  }    
  decrypt(message, key) {
    this.keyLine = this.createKeyLine(message, key).toLowerCase();
    message = message.toLowerCase();
    let result = '';

    for (let i = 0; i<message.length; i++) {
      if (this.vigenereTable[0].includes(message[i])){
          let y = this.vigenereTable[0].indexOf(this.keyLine[i]);
          let x = this.vigenereTable[y].indexOf(message[i]);
          result += this.vigenereTable[0][x];
      } else result += message[i];
      }
      
    return (this.reverse == false) ? result.toUpperCase().split('').reverse().join('') : result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
