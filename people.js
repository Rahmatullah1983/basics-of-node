const peoples = [
    { name: 'Ahmed', age: 30, email: "bugti@gmail", phone: 923002262409 },
    { name: 'Ali', age: 25, email: "baloch@gmail", phone: 923002262409 },
    { name: 'Asad', age: 40, email: "asad@gmail", phone: 923002262409 },
    { name: 'Danish', age: 35, email: "danish@gmail", phone: 923002262409 },
    { name: 'Muhammad', age: 60, email: "muhammad@gmail", phone: 923002262409 },
];
const names = peoples.map(peoples => peoples.name)
const ages = peoples.map(peoples => peoples.age)
const email = peoples.map(peoples => peoples.email)
const phone = peoples.map(peoples => peoples.phone)
module.exports = {
    names, ages, email, phone
};


