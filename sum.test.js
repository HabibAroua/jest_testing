const sum =  require('./sum')
const object = require('./object');
const string = require('./string');
const fetchData = require('./fetchData');
const fetchData1 = require('./fetchData1');

test("test case",()=>{
    expect(sum()).toBe(3)
}); 

test("object testing", ()=>{
    expect(object()).toEqual({name:'anil'})
});

test("string test case",()=>{
    expect(string()).toMatch('Hello')
});

test("promise testing",()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('hello')
    })
});

test("test async function", async ()=>{
    const data = await fetchData1()
    expect(data).toBe('done');
})