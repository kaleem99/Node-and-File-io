const fs = require("fs");

class Visitor {
    constructor(fullName, age, date, time, comments, employer) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = date;
        this.timeOfVisit = time;
        this.comments = comments;
        this.employer = employer;
    }
    save() {
        let data = JSON.stringify(this, '\n', 4);
        var name = this.fullName.split(" ").join("_").toLowerCase();
        fs.writeFile(`./visitor_${name}.json`, data, (err) => {
            if (err) {
                throw err;
            }
            else {
                console.log("Information saved");
            }
        });
    }
}

function load(name) {
    var fullName = name.split(" ").join("_").toLowerCase();
    var name = fs.readFile(`./visitor_${fullName}.json`, 'utf8', (err, jsonData) => {
        if (err) {
            throw err;
        }
        console.log("Information loaded\n\n", jsonData);
    })
    return name;
}

// var alice = new Visitor("Alice Cooper", 36, "2020-08-12", "11:55", "excellent service", "trevor philips");
// alice.save();
// load("Alice Cooper");

// var bob = new Visitor("Bob Marley", 46, "2020-08-22", "12:55", "excellent service", "trevor philips");
// bob.save();
// load("Bob Marley");
module.exports = { Visitor, load };