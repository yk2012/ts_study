var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var person = { name: 'yk', gender: Gender.male };
// let person = { name: 'yk', gender: 'male' }

console.log(Gender.male);
console.log(Gender['male']);
console.log(Gender[0]);
