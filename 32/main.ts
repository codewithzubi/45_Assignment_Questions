//Arry of Current User
let current_users = ["Khan Muhammad", "Zeeshan", "Kamlesh", "Asad", "Saira"];
//Arry of New User
let new_users = ["Ali", "Saira", "Zhoaib", "Asad", "Falak Fatima"];

new_users.forEach((new_one_user) => {
  let our_condition = current_users.some(
    (current_one_users) =>
      current_one_users.toLowerCase() === new_one_user.toLowerCase()
  );
  if (our_condition) {
    console.log(`Sorry ${new_one_user} is already taken!!`);
    
  }
  else{
    console.log(`This User ${new_one_user} is available`);
    
  }
});
