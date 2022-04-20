// 4 ЗАДАНИЕ

let age_2 = 18
let age_3 = 60
let data = prompt("Сообщите свой возраст, пожалуйста") 
const checkAge = function(age) {
    let count = Number(age)
    
    if (count) {
        if (age < age_2) {
            return ("You don’t have access cause your age is " + age + ". It’s less then 18")
        } else if (age >= age_2 && age < age_3) {
            return ("You are welcome!")
        } else if (age > age_3) {
            return ("Keep calm and look Culture channel")
        } else {
            return ("Technical work")
        } 
    } else {
        return ("Error")
        }

}

alert(checkAge(data))