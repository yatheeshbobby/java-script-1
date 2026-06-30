
// var employeename = "G.Yatheesh";
// let employeeage = "32";
// const companyname = "stackly";

// console.log("employeename:",employeename);
// console.log("employeeage:",employeeage);
// console.log("companyname:",companyname);

// alert("welcome to employee portal");
// let taskcompleted = confirm("have you completed today's task?");

// console.log(taskcompleted);

// employeename = prompt("enter your name");

// console.log(employeename);

// console.warn("task submitted successfully");

// console.error("task submission failed");

// // employee age before promotion
// employeeage = 31;
// console.log("employee age before promotion:", employeeage);

// // update age after promotion
// employeeage = 32;
// console.log("employee age after promotion:", employeeage);





// // 01 employee registration

// let employeename = "yatheesh";
// let employeeID = "STK-26-2892";

// const department = "full stack developer";
// const salary = 50000;
// const permanent = true;

// console.log("employee details");
// console.log("______________________________");
// console.log("name         :", employeename);
// console.log("employee ID  :", employeeID);
// console.log("department   :", department);
// console.log("salary       :", salary);
// console.log("permanent :", permanent);


// // 02 employee skills

// const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// console.log("first skill :", skills[0]);
// console.log("third skill :", skills[2]);
// console.log("second skill :", skills[1]);
// console.log("last skill :", skills[skills.length -1]);
// console.log("total skills :", skills.length);


// // 03 company object

// const company = {
//     companyname: "stackly",
//     location: "bangalore",
//     employees: "200",
//     technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"]
// };

// console.log(`companyname :${company.companyname}`);
// console.log(`location :${company.location}`);
// console.log(`second technology :${company.technologies[1]}`);
// console.log(`total technologies :${company.technologies.length}`);

// // 04 salary caculation

// let basicsalary = 50000
// let bonus = 5000

// let totalsalary = basicsalary + bonus;
// let tax = totalsalary * 0.10;
// let finalsalary = totalsalary - tax;
// let printallvalues = totalsalary

// console.log(`basic salary : ${basicsalary}`);
// console.log(`bonus: ${bonus}`);
// console.log(`totalsalary : ${totalsalary}`);
// console.log(`tax (10%) : ${tax}`);
// console.log(`finalsalary : ${finalsalary}`);
// console.log(`printallvalues : ${printallvalues}`);


// // 05 attendance checker

// let attendance = 92;
// let result = attendance >= 75 ? "eligible for exam" : "not eligible for exam";

// console.log(`attendance : ${attendance}`);
// console.log(`result : ${result}`);


// // 06 login verification

// let username = "admin";
// let password = "admin123";

// console.log(username === "admin" && password === "admin" ? "login successful" : "login failed");
// console.log(username === "admin" && password === "admin123" ? "login successful" : "login failed");

// // 07 production billing

// let productname = "laptop";
// let price = 50000;
// let quantity = 5;
// let totalcost = price * quantity;

// console.log(`productname : ${productname}`);
// console.log(`price : ${price}`);
// console.log(`quantity : ${quantity}`);
// console.log(`totalcost : ${totalcost}`);


// // 08 increment and decrement

// let counter = 100;

// console.log("initial value:", counter);

// //pre increment (++counter)
// //first increment the value, then return the value

// console.log("pre increment:", ++counter); 
// //counter becomes 101, then returns 101

// //post increment (counter++)
// //first return the value, then increment the value 

// console.log("post increment:", counter++); 
// console.log("value after post increment:", counter);
// //returns 101, 

// //pre decrement (--counter)
// //first decrement the value, then return the value

// console.log("pre decrement:", --counter); 
// //counter becomes 101, then returns 101

// //post decrement (counter--)
// //first return the value, then decrement the value 

// console.log("post decrement:", counter--);
// console.log("value after post decrement:", counter);
// //returns 101, then counter becomes 100  


// // 09 comparison checker


// console.log(10 == "10"); //true 
// //value is same but type is different   

// console.log(10 === "10"); //false
// // value is same but type is different

// console.log(20 !="20"); //false 
// // value is same but type is different

// console.log(20 !=="20"); //true 
// // value is same but type is different

// console.log(5 < 10); //true 
// // value is less than 10

// console.log(15 >= 20); //false
// // value is greater than or equal to 20

// console.log(100 <= 100); //true
// // value is equal to 100

// // 10 user interface

// let employeeName = prompt("enter your name");
// let employeeAge = prompt("enter your age");
// let joinCompany = confirm("have you joined the company?");

// if(joinCompany){
//     alert(`welcome ${employeeName}, your age is ${employeeAge} and you have joined the company`);
//     }
//     else{
//         alert("thank you for your response, please join the company soon");
//     }





//     // mini employee portal

//     //promt user to enter name, age and confirm if they have joined the company

//     let employeeName1 = prompt("enter your name");
//     let employeeAge1 = prompt("enter your age");

//     //confirm if they have joined the company

//     let joinCompany1 = confirm("have you joined the company?"); 

//     //alert a message based on the user's response

//     if(joinCompany1){
//         alert(`welcome ${employeeName1}, your age is ${employeeAge1} and you have joined the company`);
//     }
//     else{
//         alert("thank you for your response, please join the company soon");
//     }

//     //employee object with name, age and joined status

//     const employee = {
//         name: "yatheesh1",
//         ID: "STK-26-2892",
//         age: 32,
//         department: "full stack developer",
//         salary: 50000,                          
//     };     
    
//     //skills array with HTML, CSS, JavaScript, React, Git, Node.js

//     const skills1 = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

//     //company object with name, location, employees and technologies

//     const company1 = {
//         companyname: "stackly",
//         location: "bangalore",
//         employees: "200",
//         technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"]
//     };

//     //salary calculation with basic salary, bonus, total salary, tax and final salary

//     let basicsalary1 = 50000
//     let bonus1 = 5000       

//     //attendance checker with attendance and result

//     let attendance1 = 92;
//     let result1 = attendance1 >= 75 ? "eligible for exam" : "not eligible for exam";    



//     // flight ticket booking system


//     // passenger details
//     let passengerName = prompt("enter your name");
//     let passengerAge = prompt("enter your age");
//     let passengerGender = prompt("enter your gender");

//     // flight details
//     const flightDetails = "air india";
//     const flightNumber = "AI-202";
//     const departureTime = "10:00 AM";
//     const arrivalTime = "12:00 PM";
//     const departureLocation = "bangalore";
//     const arrivalLocation = "delhi";    

//     //ticket price calculation with base price, tax and final price
//     let basePrice = 5000;
//     let tax1 = basePrice * 0.10;
//     let finalPrice = basePrice + tax1;

//     //seat type selection with economy, business and first class
//     let seatType = prompt("select seat type: economy, business or first class");
//     let section = seatType === "economy" ? "economy" : seatType === "business" ? "business" : "first class";
//     let seattypeCharge = section === "economy" ? 0 : section === "business" ? 2000 : 5000;


//     //extra luggage selection with yes or no
//     let extraLuggage = confirm("do you want to add extra luggage?");

//     //luggage charge
//     let luggageCharge = extraLuggage ? 1000 : 0;

//     //age discount calculation with age and discount
//     let discount = passengerAge >= 60 ? 1000 : 0;
//     let discountedPrice = finalPrice - (finalPrice * discount);

//     // final ticket price calculation with final price, luggage charge and discounted price
//     let totalTicketPrice = discountedPrice + luggageCharge;

//     //booking status
//     let bookingconfirmation = confirm("confirm your booking?");

//     let bookingmessage = bookingconfirmation ? "booking confirmed" : "booking cancelled";

//     //passenger details display
//     console.log(`passenger name : ${passengerName}`);
//     console.log(`passenger age : ${passengerAge}`);
//     console.log(`passenger gender : ${passengerGender}`);
//     console.log(`flight details : ${flightDetails}`);
//     console.log(`flight number : ${flightNumber}`);
//     console.log(`departure time : ${departureTime}`);
//     console.log(`arrival time : ${arrivalTime}`);
//     console.log(`departure location : ${departureLocation}`);
//     console.log(`arrival location : ${arrivalLocation}`);
//     console.log(`base price : ${basePrice}`);
//     console.log(`tax : ${tax1}`);
//     console.log(`final price : ${finalPrice}`);
//     console.log(`seat type : ${section}`);
//     console.log(`extra luggage : ${extraLuggage ? "yes" : "no"}`);
//     console.log(`luggage charge : ${luggageCharge}`);
//     console.log(`discount : ${discount}`);
//     console.log(`discounted price : ${discountedPrice}`);
//     console.log(`total ticket price : ${totalTicketPrice}`);
//     console.log(`booking message : ${bookingmessage}`);

//     alert(`flight booking summary:
//         passenger name : ${passengerName}
//         passenger age : ${passengerAge}
//         passenger gender : ${passengerGender}
//         flight details : ${flightDetails}
//         flight number : ${flightNumber}
//         departure time : ${departureTime}
//         arrival time : ${arrivalTime}
//         departure location : ${departureLocation}
//         arrival location : ${arrivalLocation}`);




// // 01 task employee information system

// // employee deatiles

// let empName = "John";
// let empAge = 32;
// let empDepartment = "full stack developer";
// let empsalary = 50000;

// // store deatils in an object

// let employees = {
//     name: "John",
//     age: 32,
//     department: "full stack developer",
//     salary: 50000,
// };  

// // print all deatils

// console.log("Employee Details:");
// console.log("Name:", employee.name);
// console.log("Age:", employee.age);
// console.log("Department:", employee.department);
// console.log("Salary:", employee.salary);    

// // check bonus eligibility

// if (employee.salary > 40000) {
//     console.log("Eligible for bonus.");
// } else {
//     console.log("Not eligible for bonus.");
// }


// // 02 task supermarket billing requirements

// // product details

// let productName = "Laptop bags";
// let productPrice = 5000;
// let productQuantity = 2; 

// // calculate total cost  
// let totalCost = productPrice * productQuantity;
// let discounts = 0;
// let finalAmount = 5000;

// //apply discount

// if (totalCost > 5000) {
//     discount = totalCost * 0.10;
//     finalAmount = totalCost - discount;
// } else {
//     finalAmount = totalCost;
// }

// // print bill details

// console.log("===== Supermarket Bill =====");
// console.log("Product Name:", productName);
// console.log("Product Price:", productPrice);
// console.log("Product Quantity:", productQuantity);
// console.log("Total Cost:", totalCost);
// console.log("Discount:", discount);
// console.log("Final Amount to be paid:", finalAmount);


// //03 task student result portal requirements

// // student details

// let studentname = "Rahul";
// let marks = "85";

// console.log("student name:", studentname);
// console.log("marks:", marks);

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("fail");
// }

// // 04 task bank ATM eligibility requirements

// let usernames = "Ramesh";
// let accountbalance = 10000;
// let withdrawalamount = 5000;

// console.log("user name:", username);
// console.log("accountbalance:", accountbalance);
// console.log("withdrawalamount:", withdrawalamount);

// if (withdrawalamount <= accountbalance) {
//     console.log("transaction successfull");
// } else{
//     console.log("insufficient balance");
// }


// // 05 task login validation requirement

// let username1 = "admin";
// let passwords = "12345";

// let usernameinput = prompt("enter username:");
// let passwordinput = prompt("enter password:");

// if (usernameinput === username1 && passwordinput === password) {
//     console.log("login successfull");
// } else {
//     console.log("invalid username or password");
// }


// // 06 online food order requirements

// let fooditems = ["pizza","burger","pasta","biryani","sandwich","noodles","dosa","ice cream"];
    

//     // first item
//     console.log("first item:", fooditems[0]);

//     // last item
//     console.log("last item:", fooditems[fooditems.length - 2]);

//     // total number of items
//     console.log("total number of items:", fooditems.length);
     
//     //display all food items using for...of
//     console.log("food items:");
//     for (let item of fooditems) {
//         console.log(item);
//     }


//     // 07 company employee directory requirements

//     let employer = {
//         name: "Sunil",
//         age: "35",
//         department: "IT",
//         salary: "45000",
//         experience: "5 years",
//     };

//     console.log("employer details:")

//     for (let key in employer) {
//         console.log(key + " : " + employer[key]);
//     }



//     // 08 traffic single system requirement

//     // take signal color from user
//     let signalcolor = prompt("enter signal color (red, yellow, green):");

//     //convert signal color
//     signalcolor = signalcolor.toLowerCase();

//     //check signal color
//     switch (signalcolor) {
//         case "red":
//             console.log("signal color: red");
//             console.log("action: stop"); break;

//             case "yellow":
//                 console.log("signal color: yellow");
//                 console.log("action: start"); break;

//                 case "green":
//                     console.log("signal coloe: green");
//                     console.log("action: go"); break;

//                     default:
//                         console.log("invalid signal");
//     }


//     // 09 age category checker requiremants

//     // ask user age

//     let age = "8";

//     // check age category
//     if (age >= 0 && age <= 12) {
//         console.log("child");
//     }
//     else if (age >= 13 && age <= 19) {
//         console.log("teenager");
//     }
//     else if (age >= 20 && age <= 59) {
//         console.log("adult");
//     }
//     else if (age >= 60) {
//         console.log("senior citizen");
//     }
//     else{
//         console.log("invalid age")
//     }


//     // 10 employee attendence requirements


//     // ask name
//     let employeername = prompt("Yugesh:");

//     // ask attendance
//     let attendances = prompt("enter attendance(present/absent):");

//     // ternary operator
//     let status = attendances.toLowerCase() === "present"

//     ? "attendance: present"
//     : "attendance: absent";

//     //output

//     console.log("welcome " + employeername);
//     console.log(status);



//     console.clear()


//     // 01 Employee management system requirements

//     let employers = [
//         { 
//             name: "ramu",
//             ID: 1234,
//             salary:30000,
//         },
//         {
//             name: "lakshman",
//             ID: 4321,
//             salary: 60000,
//         }
//     ];

//     for(let emp of employers){
//         console.log("name:", emp.name);
//         console.log("ID:", emp.ID);
//         console.log("salary:", emp.salary);

//         if(emp.salary >= 50000){
//             console.log("employers eligible for bonus");
//         } else{
//             console.log("employers not eligible for bonus");
//         }
//     }
    

//     // 02 student result portal requirements

//     let studentName = prompt("Rahul:");
//     let marks1 = Number(prompt("100:"));

//     let percentage = (marks1 / 100) * 100;
//     let grade;

//     if (percentage >= 90){
//         grade = "A+";
//     } else if (percentage >= 80){
//         grade = "A";
//     } else if (percentage >= 70){
//         grade = "B";
//     } else if (percentage >= 60){
//         grade = "C";
//     } else {
//         grade = "fail";
//     }

//     console.log("student name:" + studentName);
//     console.log("total marks:" + marks);
//     console.log("percentage:" + percentage);
//     console.log("grade:" + grade);


//     // 03 E-commerce cart requirement

//     let products = [{name: "laptop", price:50000},{name: "mouse", price:1500},{name: "keyboard", price:2000}];

//     function calculateBill(items) {
//         let total = 0;
//         for (let product of items) {
//             total += product.price;
//         }
//         let discount = 0;
//         if (total > 50000){
//             discount = total * 0.10;
//         }
//         let finalbill = total - discount;
//         console.log("products:");
//         for (let product of items){
//             console.log(product.name + product.price);
//         }

//         console.log("total bill:" + total);
//         console.log("discount:" + discount);
//         console.log("finalbill:" + finalbill)
//     }
//     calculateBill(products);

// // 04 login authentication requirements

// let usernames1 = "admin";
// let passwords1 = "123456";

// // user entered values

// let enteredusername = "admin";
// let enteredpassword = "123456";

// // ternary operator
// let results = (username === enteredusername && password === enteredpassword)

// ? "login success"
// : "invalid credentials";

// console.log(result);


// // 05 traffic signal system


// let color = prompt("enter signal color (red, yellow, green):");

// switch(color.toLocaleLowerCase()) {
//     case "red":
//         console.log("stop"); break;

//     case "yellow":
//         console.log("ready"); break;

//     case "green":
//         console.log("go"); break;

//     default:
//         console.log("invalid signal");
// }


// // 06 ATM withdrawal system requirements


// let balance = 100000;
// let withdrawalsamount = 5000;

// console.log("avilable balance: ₹" + balance);
// console.log("withdrawal amount: ₹" + withdrawalsamount);

// if (withdrawalamount <= balance) {
//     balance = balance - withdrawalsamount;
//     console.log("withdrawal successful!");
//     console.log("remaining balance: ₹" + balance);
// } else {
//     console.log("insufficient balance!");
// }


// // 07 online food order requirements

// function placeorder(callback) {
//     console.log("order received");
// }

// function preparefood(callback) {
//     console.log("preparing food");
//     callback();
// }

// function deliverfood() {
//     console.log("food delivered");
// }

// placeorder(function(){
// preparefood(function(){
//     deliverfood();
//      });
// });


// // 08 cashback generator (generator function)

// function* cashbackgenerator() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "50% cashback";
//     yield "better kuck next time";
// }

// let offers = cashbackgenerator();


// console.log(offers.next().value);
// console.log(offers.next().value);
// console.log(offers.next().value);
// console.log(offers.next().value);


// // 09 hospital patient check requirement

// let ages = 25;
// let weight = 60;

// console.log("patient details");
// console.log("age:", age);
// console.log("weight:", weight, "kg");

// if (age > 18) {
//     if (weight > 50) {
//         console.log("eligible for treatment");
//     } else {
//         console.log("not eligible - weight should be above 50 kg");
//     }
// } else {
//     console.log("not eligible - age should be above 18");
// }


// // 10 final real-time project-mini employee portal

// // employee array

// let employees1 = [];
    

// // add employee(create)

// function addemployee(ID, name, salary) {
//     employees1.push({
//         ID: ID,
//         name: name,
//         salary: salary
//     });
//     console.log("employee added successfully");
// }


// function viewemployees() {
//     console.log("\nemployee list:");
//     employees1.forEach(emp => {
//         console.log(
//             `ID: ${emp.ID}, name: ${emp.name}, salary: ${emp.salary}`
//         );
//     });
// }

// // calculate bonus

// function calculateBonus(ID) {
//     let employee = employees1.find(emp => emp.ID === ID);

//     if (employee) {
//         let bonus = employee.salary * 0.10;
//         console.log(
//             `bonus for ${employee.name}: ₹${bonus}`
//         );
//     } else {
//         console.log("employee not found");
//     }
// } 

// // search employee by ID

// function searchemployee(ID) {
//     let employee = employees1.find(emp => emp.ID === ID);

//     if (employee) {
//         console.log("\nemployee found:");
//         console.log(employee);
//     } else {
//         console.log("employee not found");
//     }
// }

// // delete employee

// function deleteemployee(ID) {
//     let index = employees1.findIndex(emp => emp.ID === ID);

//     if (index !== -1) {
//         employees1.splice(index, 1);
//         console.log("employee deleted successfully");
//     } else {
//         console.log("employee not found");
//     }
// }

// // total employee count

// function totalemployees() {
//     console.log(`total employees: ${employees.length}`);
// }


// // calback function example

// function employeeaction(callback) {
//     callback();
// }


// //testing

// employeeaction(() => addemployee(101, "rahul", 50000));
// employeeaction(() => addemployee(102, "babblu", 60000));
// employeeaction(() => addemployee(103, "ramana", 70000));

// viewemployees();
// calculateBonus(102);
// searchemployee(103);
// deleteemployee(101);

// viewemployees();
// totalemployees();

console.clear();


// task 05

// 01 employee salary problem

function yearlysalary() {
    let monthlysalary = 45000;
    let yearlysalary = monthlysalary * 12

    return yearlysalary;
}

console.log("yearly salary : ₹" + yearlysalary());

// 02 student pass or fail


function checkresult(marks) {
    if (marks >= 35) {
        return "pass";
    } else {
        return "fail";
    }
}

let marks2 = 72;

console.log("student marks:", marks2);
console.log("result:", checkresult(marks2));

// 03 food bill

function totalbill(price, quantity) {
    return price * quantity;
}

let bill = totalbill(180 , 3);
console.log("total bill: ₹" + bill);

// 04 welcome employee

function welcomeemployee(employeename, department) {
    console.log("welcome:" + employeename);
    console.log("department:", department);
}

welcomeemployee("Yatheesh.G", "Full Stack Developer");

// 05  shopping discount

function final_amount(price, discount) {
    return price - discount;
}

// give values
let prices = 65000;
let discount1 = 500;

console.log("final amount = ₹" + final_amount(prices, discount1));


// 06 company login

function loginsuccess(callback) {
    console.log("login successful");
    callback();   
}

function loaddashboard() {
    console.log("loading dashboard");
}
loginsuccess(loaddashboard);

// 07 foof delivery

function processorder(callback) {
    console.log("order received");
    callback();
}
function deliverysteps() {
    console.log("preparing food");
    console.log("out of delivery");
    console.log("delivered");
}

processorder(deliverysteps);


// 08 lucky draw

function* luckydraw() {
    yield "10%"
    yield "20%"
    yield "50%"
    yield "better luck for next time";
}

const coupons = luckydraw();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

// 09 employee bonus

function bonus2(salary) {
    return function(bonusamount) {
        console.log("total salary :" , salary + bonusamount);
    };
}
 bonus2(50000)(5000);

 // 10 merge employee deatails

 const employeepersonal = {
    name: "yashaswini",
    age: 32,
    city: "hyderabad"
 };

 const employeeoffice = {
    id: 100,
    department: "IT",
 };

const employeesalary = {

    salary: 50000,  
 };

 const employeedeatils = {
    ...employeepersonal, 
    ...employeeoffice,
    ...employeesalary
 };
  console.log(employeedeatils);


  // 11 shopping cart

  const cart1 = ["laptop", "mouse", "keyboard"];

  const cart2 = ["headphones", "usb", "cable", "webcam"];

  const cart3 = ["mobile", "charging cable", "pouch"];

  const mergedcart = [...cart1, ...cart2, ...cart3];

  console.log("merged cart:");
  console.log(mergedcart);

  // 12 students marks

  function student(name, ...marks) {
    let total = marks.reduce((sum, marks) => sum + marks, 0);
    let average = total / marks.length;

    console.log("student :", name);
    console.log("total marks :", total);
    console.log("average :", average);
  }

  student("Yuga", 95, 85, 75, 99);

  // 13 product deatails

  const product = {
    name: "lenova",
    price: 65000,
    brand: "Dell",
    stock: 20
  };

  const { name } = product;

  console.log("name:", name);
  console.log("price:", prices);


  // 14 customer details

  const customer = [100, "venkatesh", "Madanapalli", 8179498868];
   const [id, names, city] = customer;
   
   console.log("id :", id);
   console.log("names :", names);
   console.log("city :", city);


   // 15 add product

   let cart = ["mobile", "laptop"];

   cart.push("headphines");

   console.log("update cart:", cart);


   // 16 remove last product

   let cart4 = ["mobile", "laptop", "headphone"];

   console.log("before removing:");
   console.log(cart);

   let removeproduct = cart.pop();

   console.log("remove pruduct:", removeproduct);

   console.log("after removing:");
   console.log(cart);


   // 17 replace employee 

   let employees2 = ["mahesh", "suresh", "naresh",
    "sukesh"];

    employees2.splice(2, 1, "naresh");
    
    console.log(employees2);


    // 18 search product 

    let products2 = ["mouse","keyboard", "monitor", "laptop"];

    let isavailable = products2.includes("laptop");

    console.log("laptop available:", isavailable);


    // 19 employee rankings

    const salaries = [25000, 35000, 45000, 55000];

    salaries.sort((a, b) => a - b);

    console.log("salaries (lowest to highest):", salaries);



    // 20 reverse chat messages

    let messages = ["hi", "hello", "how are you", "good morning/afternoon/night"];

    messages.reverse();

    console.log(messages);



    // bonus task

    // employee management system

    let employees3 = [];

    // 01 add employees

    function addemployee(id, name, salary) {
        employees2.push({id, name, salary});
        console.log("employee added successfully!\n");
    }

    // 02 view employees

    function viewemployees() {
        if (employees2.length === 0) {
            console.log("no employees not found.\n");
            return;
        }

        console.log("employee list:");
        employees2.forEach(emp =>{
            console.log(`id: ${emp.id}, name: ${emp.name}, salary: ₹${emp.salary}`);
        });
        console.log();
    }

// 03 search employee by id

function searchemployee(id) {
    let employee = employees2.find(emp => emp.id === id);
    if (employee) {
        console.log(`id: ${employee.id}, name: ${employee.name}, salary: ₹${employee.salary}`);
    } else {
        console.log("employee not found.\n");
    }
    console.log();
}


// 04 calculate salary + bonus

function calculatebonus(id, bonus) {
    let employee = employees2.find(employee => employee.id === id);
    if (employee) {
        console.log(`employee: ${employee.name}`);
        console.log(`salary: ₹${employee.salary}`);
        console.log(`bonus: ₹${bonus}`);
        console.log(`total salary: ₹${employee.salary + bonus}`);
    } else {
        console.log("employee not found.\n");
    }
    console.log();
}


// 05 remove employee

function removeemployee(id) {
    let index = employees2.findIndex(e => e.id === id);

    if (index !== -1) {
        let removed = employees2.splice(index, 1)[0];
        console.log(`removed employee: ${removed.name} (id: ${removed.id})`);
    } else {
        console.log("employee not found.");
    }
    console.log();
}

// 06 sort employee by salary

function sortbysalary() {
    employees2.sort((a, b) => a.salary - b.salary);

    console.log("employees sort by salary:");
    viewemployees();
}

// 07 find employee by name

function findbyname(name) {
    let employee = employees2.find(employee => employee.name === name);

    if (employee) {
        console.log(`employee found: ${employee.name} (id: ${employee.id}, salary: ₹${employee.salary})`);
    } else {
        console.log("employee not found.");
    }
    console.log();
}

// 08 display employee details using destructuring

function displaydetails(id) {
    let employee = employees2.find(employee => employee.id === id);

    if (employee) {
        let {id, name, salary} = employee;
        
        console.log("employee2 details:");
        console.log("id:", id);
        console.log("name:", name);
        console.log("salary:", salary);
    } else {
        console.log("employee not found.");
    }
    console.log();
}

// data

addemployee(101, "rahul", 30000);
addemployee(102, "arun", 45000);
addemployee(103, "john", 35000);
addemployee(104, "david", 50000);

// view employee
viewemployees();

// search employee
searchemployee(102);

// calculate bonus
calculatebonus(103, 5000);

// remove employee 
removeemployee(101);

// view again
viewemployees();

// sort by salary
sortbysalary();

// find by name
findbyname("david");

// destructure
displaydetails(104);






