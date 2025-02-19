/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (!this.length) return -1;
    const lastEl = this[this.length - 1];
    
    return lastEl === null || typeof lastEl === "number" || typeof lastEl === "boolean" || Array.isArray(lastEl) || typeof lastEl === "object"
      ? lastEl
      : isNaN(Number(lastEl)) ? lastEl : Number(lastEl);
  };
  
  const testCases = [
    { input: [1, 2, 3] },
    { input: ["5"] },
    { input: ["hello"] },
    { input: [true, "42"] },
    { input: [null, {}, null] },
    { input: [null, "5.5"] },
    { input: [{}, [], { y: 7 }] },
    { input: [[]] },
    { input: [{}, true] },
  ];
  
  testCases.forEach(({ input }) => console.log(`${JSON.stringify(input)} →`, input.last()));
  