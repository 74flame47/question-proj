//alert("You're all set to run!");

/**

const btnChange = () => {
    let choice0 = document.getElementById("choice0");
    choice0.innerHTML = "New Answer";
}

btnChange();


let barryB = {
    firstName: "Barry",
    lastName: "Burrows",
    age: 27,
    isLoved: true
};

let list =[
    {
        userName: "Harry",
        password: "Barr",
    }
];


barryB.happy = "Yes he is!";





console.log("Is Barry happy? " + barryB.happy);
console.log("You are gaining power Barry! You are building the strength to acheive your dreams! This power to do what ever you want.");





 
let database = [
    {
        userName: "harry4",
        password: "4real",
    },
];

let newsfeed = [
    {
        username: "accountHolder",
        timeline: "timeline",
    }
];

 */


//Create a database array, along with a news feed array. 
//Then add users into the database as objects, about 3.
//Next add the users into the newsfeed along with their posts.
//Create prompts that receives users information: name and password
//I want the database to store the information that was added. So I can't use prompt. Use prompt for now then change it in the future.





//This stores the user information. If they are apart of the site, then they will be here
let database = [
    {
        userName: "personA",
        password: 11,
    },
    {
        userName: "personB",
        password: 12,
    },
    {
        userName: "personC",
        password: 13,
    },
    {
        userName: "personD",
        password: 14,
    },
];

//This is where the user messages are stored
let timeline = [];


//This is the prompt that allows the user to give their information.
let userprompt = prompt("Welcome! Please enter your user name.");
let userPassprompt = prompt("Awesome! Lastly enter your password for that account.");


//This is the actual function that will determine what to do with information.
const signIn = (user, userPass) => {
    for(let x = 0; x < database.length; x++){
        if(user === database[x].userName && userPass === database[x].password){
            alert("Welcome back " + user);
            let message = prompt("What would you like to say to your fans?");
            timeline.push(message);
            console.log(timeline);
        }else{
            //alert("Something went wrong...are you sure you're one of us?");
        }
    }  
}

signIn(userprompt, userPassprompt);










































