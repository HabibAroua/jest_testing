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

//before Each
const common = require('./common');

/*beforeEach(()=>{
    console.warn(common())
});*/

test("testing sum function",()=>{
    expect(sum()).toBe(3)
});

test("testing sum function",()=>{
    expect(sum()).toBe(3)
});

test("testing sum function",()=>{
    expect(sum()).toBe(3)
});

//new tutoriel
const functions = require('./functions');

test('Adds 2 + 2 to equal 4',()=>{
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5',()=>{
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy',()=>{
    expect(functions.checkValue(undefined)).toBeFalsy(); // you can use null
});

test('User should be Brad Traversy object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than and greater than
test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;

    expect(load1 + load2).toBeLessThan(1600);
});

test('Sum function under 6',()=>{
    expect(sum()).toBeLessThanOrEqual(6);
});

//Regex
test('There is no I in team',()=> {
    expect('teamI').not.toMatch(/i/);
});

// Arrays
test('Admin should be in usernames',()=>{
    usernames = ['john', 'karen','admin'];
    expect(usernames).toContain('admin');
});

//Working with async data
test('User fetched name should be Leanne Graham', ()=>{
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
});

// Async Await
test('User fetched name should be Leanne Graham', async ()=> {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});