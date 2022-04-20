// 1 ЗАДАНИЕ

let age_2 = 18
let age_3 = 60
const checkAge = function(age) {
    if (age < age_2) {
        return ("You don’t have access cause your age is " + age + ". It’s less then 18")
    } else if (age >= age_2 && age < age_3) {
        return ("You are welcome!")
    } else if (age > age_3) {
        return ("Keep calm and look Culture channel")
    } else {
        return ("Technical work")
    }
}

console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))


// 2 ЗАДАНИЕ

let age_2 = 18
let age_3 = 60

const checkAge = function(age) {
    if (typeof(age) == "number") {
        if (age < age_2) {
            return ("You don’t have access cause your age is " + age + ". It’s less then 18")
        } else if (age >= age_2 && age < age_3) {
            return ("You are welcome!")
        } else if (age > age_3) {
            return ("Keep calm and look Culture channel")
        } else {
            return ("Technical work")
        }
    } 
    else {
        return ("Error")
    }
}

console.log(checkAge("авыа"))

// 3 ЗАДАНИЕ

let age_2 = 18
let age_3 = 60
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

console.log(checkAge("2"))
