const visitor = require("../src/main");
let fs = require("fs");

describe('function save()', function() {
    let bob = new visitor.Visitor('Bob Marley', 46, "2020-08-22", "12:55", "excellent service", "trevor philips");
    let visitorData = {
      'fullName': 'Bob Marley',
      'age': 46,
      'date': '2020-08-22',
      'time': '12:55',
      'comments': 'excellent service',
      'person': 'trevor philips'
    }
    
    it('exists', () => {
        expect(bob.save).toBeDefined()
    })

    it("writes visitors data to specified named file", () => {
        fs.readFile('./visitor_bob_marley.json', 'UTF8', (err, data) =>{
            if(err){throw err}
            else{
                let readData = data
                expect(readData).toEqual(JSON.stringify(bob, null, 4))
            }
        })
    })
    
    it('should match the data', () => {
        expect(visitorData.age).toEqual(46);
        expect(visitorData.date).toEqual('2020-08-22');
        expect(visitorData.time).toEqual('12:55');
        expect(visitorData.comments).toEqual('excellent service');
        expect(visitorData.person).toEqual('trevor philips')
        console.log("message", visitor.load.jsonData);
    })

})

describe('function load()', function() {
    it('exists', function() {
        expect(visitor.load).toBeDefined()
    })
})

describe('function save()', function() {
    let alice = new visitor.Visitor('Alice Cooper', 36, "2020-08-12", "11:55", "excellent service", "trevor philips");
    let visitorData = {
      'fullName': 'Alice Cooper',
      'age': 36,
      'date': '2020-08-12',
      'time': '11:55',
      'comments': 'excellent service',
      'person': 'trevor philips'
    }
    
    it('exists', () => {
        expect(alice.save).toBeDefined()
    })

    it("writes visitors data to specified named file", () => {
        fs.readFile('./visitor_alice_cooper.json', 'UTF8', (err, data) =>{
            if(err){throw err}
            else{
                let readData = data
                expect(readData).toEqual(JSON.stringify(alice, null, 4))
            }
        })
    })
    
    it('should match the data', () => {
        expect(visitorData.age).toEqual(36);
        expect(visitorData.date).toEqual('2020-08-12');
        expect(visitorData.time).toEqual('11:55');
        
        expect(visitorData.comments).toEqual('excellent service');
        expect(visitorData.person).toEqual('trevor philips')
    })

})

describe('function load()', () => {
    it('exists', () => {
        expect(visitor.load).toBeDefined()
    })
})
