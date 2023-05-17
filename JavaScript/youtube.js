// IIFE
(function add(first = 0, second = 0) {
    let sum = first + second
    console.log(sum)
})(3, 2)

let marks = [12, 57, 13, 102, 4, 76, 90, 19, 99]

function highestScore(scores) {
    let maxScore = scores[0]
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i]
        }
    }
    return maxScore
}
// console.log(highestScore(marks))
// console.log(Math.max(...marks))

function lowestScore(scores) {
    let minScore = scores[0]
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i]
        }
    }
    return minScore
}
// console.log(lowestScore(marks))
// console.log(Math.min(...marks))

// 2D Array
const studentsMarks = [
    ["Sakib", 185],
    ["Al Amin", 45],
    ["Masum", 32],
    ["Rahat", 80]
]

// Printing 2D array elements
for (let i = 0; i < studentsMarks.length; i++) {
    for (let j = 0; j < studentsMarks[i].length; j++) {
        console.log(studentsMarks[i][j])
    }
}

// Printing 2D array elements (Best way to print)
for (let i = 0; i < studentsMarks.length; i++) {
    let studentName = studentsMarks[i][0]
    let studentMark = studentsMarks[i][1]
    console.log(studentName, studentMark)
}

function highestScorer(info) {
    let highestRunner = info[0][0]
    let highestScore = info[0][1]
    for (let i = 1; i < info.length; i++) {
        if (highestScore < info[i][1]) {
            highestScore = info[i][1]
            highestRunner = info[i][0]
        }
    }
    return highestRunner
}
// console.log(highestScorer(playersInfo))

function Person(name, gender, age, address, lang = null) {
    this.name = name
    this.gender = gender
    this.age = age
    this.address = address
    this.lang = lang
    this.display = function () {
        console.log(this.name)
        console.log(this.gender)
        console.log(this.age)
        console.log(this.address)
        console.log(this.lang)
    }
}

const person = new Person("Md Rahat Hossen Antor", "Male", 18, "Dhaka, Bangladesh", ["Bangla", "English", "Hindi", "Urdu", "Arabic"])

const random = Math.floor(Math.random() * 10) + 11

// Guess the number game
let numOfWon = 0
let numOfLost = 0
for (var i = 1; i <= 5; i++) {
    let userInput = parseInt(prompt("Guess the number between 1 to 5:"))
    let randomNum = Math.floor(Math.random() * 5) + 1
    if (userInput === randomNum) {
        console.log("wow! you won!")
        numOfWon++
    } else {
        console.log(`oh! you lost! the number was ${randomNum}`)
        numOfLost++
    }
}
document.write(`You have won ${numOfWon} times!<br/>`);
document.write(`You have lost ${numOfLost} times!<br/>`);


// Creating image slider.
let img = document.getElementById("img")
const images = ["./images/p.png", "./images/o.png", "./images/d.png"]
let nextBtn = document.getElementById("next-btn")
let previousBtn = document.getElementById("previous-btn")
let imgIndex = 0

nextBtn.addEventListener("click", function () {
    imgIndex++
    if (imgIndex >= images.length) {
        imgIndex = 0
        img.src = images[imgIndex]
    }
    img.src = images[imgIndex]
})

previousBtn.addEventListener("click", function () {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = images.length - 1
        img.src = images[imgIndex]
    }
    img.src = images[imgIndex]
})

// playing audio
let audioBtn = document.getElementById("audio")
let song = new Audio("./audios/song.mp3")
audioBtn.addEventListener("click", function () {
    song.play()
})

// Creating a digital clock
let span = document.getElementById("time")

function formateTime(time) {
    if (time < 10) {
        time = `0${time}`
    }
    return time
}

function showTime() {
    const times = new Date()
    let hours = formateTime(times.getHours())
    let minutes = formateTime(times.getMinutes())
    let seconds = formateTime(times.getSeconds())
    let clock = `${hours}:${minutes}:${seconds}`
    span.innerHTML = clock
}
showTime()
window.setInterval(showTime, 1000)

// Error handler
try {
    throw "Im Error"
} catch (error) {
} finally {
}

function taskOne(callback) {
    console.log("Im task one")
    callback()
}

function taskTwo(callback) {
    setTimeout(() => {
        console.log("Im task two")
        callback()
    }, 2000)
}

function taskThree(callback) {
    console.log("Im task three")
    callback()
}

function taskFour(callback) {
    console.log("Im task four")
    callback()
}

function taskFive() {
    console.log("Im task five")
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive()
            })
        })
    })
})


function taskOne() {
    return new Promise((resolve, reject) => {
        let isResolved = true
        if (isResolved) {
            resolve(`Task one is resolved`)
        } else {
            reject(new Error(`Task one is rejected`))
        }
    })
}

function taskTwo() {
    return new Promise((resolve, reject) => {
        let isResolved = true
        if (isResolved) {
            resolve(`Task two is resolved`)
        } else {
            reject(new Error(`Task two is rejected`))
        }
    })
}

function taskTwo() {
    return new Promise((resolve, reject) => {
        let isResolved = true
        if (isResolved) {
            resolve(`Task two is resolved`)
        } else {
            reject(new Error(`Task two is rejected`))
        }
    })
}

function taskThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isResolved = true
            if (isResolved) {
                resolve(`Task three is resolved`)
            } else {
                reject(new Error(`Task three is rejected`))
            }
        }, 1000)
    })
}

function taskFour() {
    return new Promise((resolve, reject) => {
        let isResolved = false
        if (isResolved) {
            resolve(`Task four is resolved`)
        } else {
            reject(new Error(`Task four is rejected`))
        }
    })
}

function taskFive() {
    return new Promise((resolve, reject) => {
        let isResolved = true
        if (isResolved) {
            resolve(`Task five is resolved`)
        } else {
            reject(new Error(`Task five is rejected`))
        }
    })
}

taskOne().then((response) => {
    console.log(response)
}).then(() => {
    taskTwo().then((response) => {
        console.log(response)
    }).then(() => {
        taskThree().then((response) => {
            console.log(response)
        }).then(() => {
            taskFour().then((response) => {
                console.log(response)
            }).then(() => {
                taskFive().then((response) => {
                    console.log(response)
                })
            })
        })
    })
})


taskOne()
    .then(response => console.log(response))
    .then(taskTwo)
    .then(response => console.log(response))
    .then(taskThree)
    .then(response => console.log(response))
    .then(taskFour)
    .then(response => console.log(response))
    .then(taskFive)
    .then(response => console.log(response))
    .catch(error => console.log(error.message))

const number = 19.5
const status = Number.isInteger(number)
// console.log(status)

function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        return `${year} is a leap year.`
    } else {
        return `${year} is not a leap year.`
    }
}
// console.log(isLeapYear(2024))

function countVowels(sentence) {
    sentence = sentence.toLowerCase(sentence)
    const vowels = ["a", "e", "i", "o", "u"]
    let counts = 0
    for (let i = 0; i < sentence.length; i++) {
        let latter = sentence[i]
        let position = vowels.indexOf(latter)
        if (position !== -1) {
            counts++
        }
    }
    return counts
}


{
// LWS
function countVowels(sentence) {
    sentence = sentence.toLowerCase(sentence)
    sentence = Array.from(sentence)
    const vowels = ["a", "e", "i", "o", "u"]
    let counts = 0
    sentence.forEach(latter => {
        if (vowels.includes(latter)) {
            counts++
        }
    })
    return counts
}

function searchLetter(arr, letter) {
    firstIndex = arr.indexOf(letter.toLowerCase())
    firstIndex = firstIndex >= 0 ? firstIndex : `${letter} not found!`
    return firstIndex
}
// console.log(searchLetter(["a", "b", "c"], "a"))


function linearSearch(arr, letter) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            return i
        }
    }
    return `${letter} not found!`
}

// console.log(linearSearch(["a", "b", "c"], "a"))

function getLongestWord(words) {
    let longestWord = ""
    for (word of words) {
        if (longestWord.length < word.length) {
            longestWord = word
        }
    }
    return [words.indexOf(longestWord), longestWord]
}

console.log(getLongestWord(["Bangladesh", "India", "Pakistan", "Afghanistan"]))
}


{
// Chai our code
const nid = Symbol("symbol")

const jsUser = {
    name: "Md Rahat Hossen Antor",
    email: "md.rahathossenantor@gmail.com",
    [nid]: "9168082890",
    greetings: function () {
        console.log(`Hello ${this.name}!`)
    }
}
}