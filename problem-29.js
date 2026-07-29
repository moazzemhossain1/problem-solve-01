// proglem-29:Loging system





let user = {
 username:"admin",
 password:"12345"
}
// console.log(user.username)



function logingSystem(user){
    // console.log(.name)
    if(user.username==="admin" && user.password==="12345"){
        return "Loging succusefully"
    }
    else{
        return "Inviled information"
    }

}
console.log(logingSystem(user))