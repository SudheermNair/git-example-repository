let hello: string="hello world";
let number = "hi";
let var1 = number.length
function getReply(x:string){
    return x.toUpperCase();
}
getReply("hello");


function addTwo(x:number):boolean{
    return true
}
addTwo(2)

function createUser({name:string,isPaid:boolean}){

}
type sudheer = {name:string,phonenumber:number}
function createNewUser(x:sudheer){
    console.log(x.name)
}
createNewUser({name:"sudheer",phonenumber:8139050986})
let newUser = {name:"Sudheer",isPaid:true,email:"sudheer.m008@gmail.com"};
createUser(newUser);

type user = {
    name:string
    readonly id:number
    phonenumber?:number
}
function createMyUser(x:user){
    console.log(x.id);
}
let noobUser:user = {
name:"sudheer",
id:1
}

const employeeNames:user[] = [];
employeeNames.push({name:"sudheer",id:1})

type employee = {
    name:string
    id:number
}
type student = {
    name:string,
    id:number
}
type school = employee & student;
let sudheer:number|string = 23;
console.log(sudheer)

const data:(string|number|boolean)[] = [1,32,"sudheer",false];
console.log(data);

let sudhi:[number,number,number] = [2,3,5]
console.log(sudhi);

enum colors{
    black,
    brown,
    yellow = 5,
    orange,
    red
}

interface employeeDetails {
    name:string,
    id:number,
}

interface studentDetails{
    username:string,
    st_id:number
}

interface schoolDetails extends employeeDetails,studentDetails{
    phonenumber:number
}

const school:schoolDetails = {
name:"vyasa",
id:1,
username:"sudheer",
st_id:1,
phonenumber:9999999
}

interface item<T>{
    name:T;
}
const newItem:item<string>={
name:"sudheer"
}
console.log(school);
export{}