const sum =  require('./sum')
const object = require('./object');
const string = require('./string');

test("test case",()=>{
    expect(sum()).toBe(3)
}); 

test("object testing", ()=>{
    expect(object()).toEqual({name:'anil'})
});

test("string test case",()=>{
    expect(string()).toMatch('Hello')
});