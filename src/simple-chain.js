const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (position<1 || position>this.chain.length-1) {
      this.chain = [];
      throw "Error";
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('').slice(0,-2);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
