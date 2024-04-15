//Arry of Current User
var current_users = ["Khan Muhammad", "Zeeshan", "Kamlesh", "Asad", "Saira"];
//Arry of New User
var new_users = ["Ali", "Saira", "Zhoaib", "Asad", "Falak Fatima"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) {
        return current_one_users.toLowerCase() === new_one_user.toLowerCase();
    });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!!"));
    }
    else {
        console.log("This User ".concat(new_one_user, " is available"));
    }
});
