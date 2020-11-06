const calculationService=require("./services/calculationService");
test('fact 5 ', () => {
    expect(calculationService.factorielIterative(5)).toBe(120);
});
test('fact 0 ', () => {
    expect(calculationService.factorielIterative(1)).toBe(1);
});
test('fact -1 ', () => {
    expect(calculationService.factorielIterative(3)).toBe(6);
});