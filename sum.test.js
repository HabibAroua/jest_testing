const sum =  require('./sum')
const object = require('./object');

test("test case",()=>{
    expect(sum()).toBe(3)
}); 

test("object testing", ()=>{
    expect(object()).toEqual({name:'anil'})
});