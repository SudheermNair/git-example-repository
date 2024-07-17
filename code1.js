"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = "hello world";
var number = "hi";
var var1 = number.length;
function getReply(x) {
    return x.toUpperCase();
}
getReply("hello");
function addTwo(x) {
    return true;
}
addTwo(2);
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
function createNewUser(x) {
    console.log(x.name);
}
createNewUser({ name: "sudheer", phonenumber: 8139050986 });
var newUser = { name: "Sudheer", isPaid: true, email: "sudheer.m008@gmail.com" };
createUser(newUser);
function createMyUser(x) {
    console.log(x.id);
}
var noobUser = {
    name: "sudheer",
    id: 1
};
var employeeNames = [];
employeeNames.push({ name: "sudheer", id: 1 });
var sudheer = 23;
console.log(sudheer);
var data = [1, 32, "sudheer", false];
console.log(data);
var sudhi = [2, 3, 5];
console.log(sudhi);
var colors;
(function (colors) {
    colors[colors["black"] = 0] = "black";
    colors[colors["brown"] = 1] = "brown";
    colors[colors["yellow"] = 5] = "yellow";
    colors[colors["orange"] = 6] = "orange";
    colors[colors["red"] = 7] = "red";
})(colors || (colors = {}));
var school = {
    name: "vyasa",
    id: 1,
    username: "sudheer",
    st_id: 1,
    phonenumber: 9999999
};
console.log(school);
