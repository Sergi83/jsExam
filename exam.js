

    // 1. Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

//    let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

//     console.log(Math.max(...arr), 'check max number');


    // 2. Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

// let arr0 = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"];


// let i;
// let elem;
// let strArr = [];

// for(i = 0; i < arr0.length; i++) {
//     elem = arr0[i];
//     console.log(typeof elem)
//     if (typeof elem == "string") {
//         strArr.push(elem);
//         console.log(elem);
//     }
// }
// console.log(strArr, 'arrStr')

    // 3. Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – 
    // Вивести всіх юзерів з типом user. 
    // Вивести юзерів які мають хоббі hiking. 
    // Додати можливість додати нове поле для всіх юзерів – job (true/false);

//     const USERS = [
//         {
//             name: "Yura", 
//             age: 55, 
//             hobby: ["football", "ski", "hiking"], 
//             type: "Admin"
//         }, 
//         {
//             name: "Yulian", 
//             age: 28, 
//             hobby: ["films", "games", "hiking"], 
//             type: "user"
//         }, 
//         {
//             name: "Taras", 
//             age: 38, 
//             hobby: ["hunting", "TV", "javascript"], 
//             type: "user"
//         }];

// const showUser = allUsers => {
//     const userArr = [];
//     allUsers.map((user) => {
//         user.type === "user" ? userArr.push(user.name) : null;
//     });
//     console.log(`${userArr.join(", ")} - users`)
// }

// const showHiker = allHiking => {
//     const whoHike = [];
//     allHiking.map((user) => {
//         user.hobby.includes("hiking") ? whoHike.push(user.name) : null;
//     });
//     console.log(`${whoHike.join(", ")} - whoHike`)
// }


// let addJobStatus = (elem) => {
//     let job;
    
//     const getObj = USERS.filter(obj => obj.name === `${elem}`);
    
//     let jobFalse = USERS.forEach(function(item) {item.job = false;});

//         if (getObj) {
//             jobFalse;
            
//             getObj.forEach(function(item) {item.job = true;});

//         } else {
//             jobFalse;
//         }
//     // });
//     console.log(USERS);
// };
 
// showUser(USERS);
// showHiker(USERS);
// addJobStatus("Yura");




    // 4. Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

// window.addEventListener('oncopy', evt = () => {
//     if (true) alert("це інтелектуальна власність власника");
// })




    // 5. https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. 
    // Вивести нумерований список з іменами всіх країн та їх столицями на сторінку, 
    // назву країни зробити великими буквами. 
