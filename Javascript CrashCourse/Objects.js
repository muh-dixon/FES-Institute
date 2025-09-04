let users = [
  {
    username: "Shabil",
    email: "shabil.dixon@gmail.com",
    subscription: "Pro",
    password: "12345",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Ty",
    email: "ty.mac@gmail.com",
    subscription: "VIP",
    password: "54321",
    lessonsCompleted: [0, 1],
  },
];

//Printing the entire object
console.log(users[0].username);

// Accessing object properties
for (let i = 0; i < users.length; i++) {
  console.log(users[i].lessonsCompleted);
}

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("User is logged in");
      } else {
        console.log("passowrd is wrong");
      }
      return;
    }
  }
  console.log("This email does not exist");
}

login("shabil.dixon@gmail.com", "12345");

function register(users2) {
    users.push(users2);
}

register({
    username: 'John',
    email: 'doit@gmail.com',
    password:'testfire',
    subscription: 'reg',
    discord: 'YOYO#001',
    lessonsCompleted: [0,1],
})

console.log(users);