/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function () {

    if (this.length === 0) return -1;
    let lastEl = this.slice(-1)[0];
  
    if (typeof lastEl === "number" || typeof lastEl === "boolean") return lastEl;
  
    if (Array.isArray(lastEl)) return JSON.stringify(lastEl);
    
    if (typeof lastEl === "object") return JSON.stringify(lastEl);
  
    return isNaN(Number(lastEl)) ? lastEl : Number(lastEl);
};

const testCases = [
    { input: [1, 2, 3]},
    { input: ["5"]},
    { input: ["hello"]},
    { input: [true, "42"]},
    { input: [null, {}, null] },
    { input: [null, "5.5"] },
    { input: [{}, [], {}]},
    { input: [[]] }, 
    { input: [{}, true]},
  ];
  
  testCases.forEach(({ input }) => {
    const result = input.last();
    console.log(`${JSON.stringify(input)} → ${result}`);
  });
  

