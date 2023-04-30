// program to get your grade
function getYourGrade(){
    var studentMarks = prompt("Enter your marks:")
    studentMarks = parseFloat(studentMarks);
    if (studentMarks >= 81 && studentMarks <= 100) {
      document.write("<h1>Your Grade is: 'Golden A+'</h1>");
    }else if (studentMarks >= 61 && studentMarks <= 80) {
      document.write("<h1>Your Grade is: 'A+'</h1>");
    }else if (studentMarks >= 41 && studentMarks <= 60) {
      document.write("<h1>Your Grade is: 'A'</h1>");
    }else if (studentMarks >= 21 && studentMarks <= 40) {
      document.write("<h1>Your Grade is: 'A-'</h1>");
    }else if (studentMarks >= 01 && studentMarks <= 20) {
      document.write("<h1>Your Grade is: 'B'</h1>");
    }else{
      document.write("<h1>Sorry! you entered an incorrect number! Please try again later.</h1>");
    }
  }
  
  
  // Inch to feet converter.
  function inchToFeet(inch){
    let a = inch / 12
    return a
  }
  console.log(inchToFeet(24))
  
  
  // Checking year is a leap year or not.
  function isLeapYear(year){
    let y = year % 4
    let result
    if (y === 0) {
      result = `${year} is a leap year.`
      return result
    }else{
      result = `${year} is not a leap year.`
      return result
    }
  }
  console.log(isLeapYear(Number(prompt(`Enter year:`))))
  
  
  // get the factorial using for loop.
  let factorial = 1
  for(let i = 1; i <= 5; i++){
    factorial *= i
    console.log(factorial)
  }
  
  // functional way to get the factorial using for loop.
  function factorial(n){
    let fac = 1
    for(let i = 1; i <= n; i++){
      fac *= i
    }
    return fac
  }
  console.log(factorial(Number(prompt(`Enter a number:`))))
  
  
  // get the factorial using while loop.
  let i = 1
  let f = 1
  while(i <= 10){
    f *= i
    console.log(f)
    i++
  }
  
  
  // functional way to get the factorial using while loop.
  function factorial(n){
    let i = 1
    let f = 1
    while(i <= n){
      f *= i
      i++
    }
    return f
  }
  console.log(factorial())
  
  
  // Recursive way to get the factorial.
  function getFactorial(n){
    if (n === 0) {
      return 1
    }else{
      return n * getFactorial(n - 1)
    }
  }
  console.log(getFactorial())
  
  
  // Swapping variable value.
  let a = 10
  let b = 20
  // Before swapping:
  console.log(`Before swapping: ${a}, ${b}`)
  let temp = a
  a = b
  b = temp
  // After swapping:
  console.log(`After swapping: ${a}, ${b}`)
  
  
  // Fobonacci using for loop.
  function fibo(n){
    let num = [0, 1]
    for(let i = 2; i <= n; i++){
      num[i] = num[i - 1] + num[i - 2]
    }
    return num
  }
  console.log(fibo(10))
  
  
  // Fibonacci using while loop.
  function fibonacci(n){
    const fibo = [0, 1]
    let i = 2
    while(i <= n){
      fibo[i] = fibo[i-1] + fibo[i-2]
      i++
    }
    return fibo
  }
  console.log(fibonacci(10))
  
  
  // Prime number.
  function isPrimeNumber(n){
    for(let i = 2; i <= n-1; i++){
      if (n % i === 0) {
        return `${n} is not a prime number!`
      }else{
        return `${n} is a prime number!`
      }
    }
  }
  console.log(isPrimeNumber(4))
  
  
  // Find out max element of an array.
  let studentsMarks = [15,28,15,528,689,90,76,]
  let maxMarks = studentsMarks[0]
  for(let i = 0; i < studentsMarks.length; i++){
    let maxElement = studentsMarks[i]
    if (maxElement > maxMarks) {
      maxMarks = maxElement
    }
  }
  console.log(maxMarks)
  
  
  // Array sum
  let randomArray = [10,10,10,30]
  let arraySum = 0
  for(let i = 0; i < randomArray.length; i++){
    arraySum += randomArray[i]
  }
  console.log(arraySum)
  
  
  // Removing duplicate items from an array.
  let studentID = [27,38,29,8,27,29]
  let unique = []
  let element;
  let index;
  for(let i = 0; i < studentID.length; i++){
    element = studentID[i]
    index = unique.indexOf(element)
    if (index == -1) {
      unique.push(element)
    }
  }
  console.log(studentID)
  console.log(unique)
  
  
  {
    let sentence = `Amar shonar Bangladesh. Tumi amar matribhumi.`
  
    let counts = 0
    let i = 0
    let char = ``
    while(i < sentence.length){
      char = sentence[i]
      if (char == ` ` && sentence[i - 1] != ` `) {
        counts++
      }
      i++
    }
    counts++
    console.log(counts)
  }
  
  
  function wordCount(sentence){
    let count = 0
    let letter;
    for(let i = 0; i < sentence.length; i++){
      letter = sentence[i]
      if (letter === " " && sentence[i - 1] !== " ") {
        count++
      }
    }
    count++
    return count
  }
  console.log(wordCount(sentence))
  
  
  function reverseSentence(str){
    let latter
    let reverse = ""
    for(let i = 0; i < str.length; i++){
      latter = str[i]
      reverse = latter + reverse
    }
    return reverse
  }
  console.log(reverseSentence(sentence))
  
  
  function animalsCount(deep){
    let animals = 0
    if (deep <= 10) {
      animals = deep * 50
    }else if (deep <= 20) {
      let firstPart = 10 * 50
      let remain = deep - 10
      remain *= 100
      animals = firstPart + remain
    }else{
      let firstPart = 10 * 50
      let secondPart = 10 * 100
      let remain = deep - 20
      remain *= 300
      animals = firstPart + secondPart + remain
    }
    return animals
  }
  console.log(animalsCount(32))
  
  
  function makeArray(){
    let element;
    let funcArguments = []
    for(let i = 0; i < arguments.length; i++){
      element = arguments[i]
      funcArguments.push(element)
    }
    return funcArguments
  }
  let result = makeArray(28,58,27,19,30,49,20)
  
  
  // This code is from stackoverflow
  {
    // program to check leap year
    function checkLeapYear(year) {
      //three conditions to find out the leap year
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
          console.log(year + ' is a leap year');
      } else {
          console.log(year + ' is not a leap year');
      }
    }
    // take input
    const year = prompt('Enter a year:');
    checkLeapYear(year);
  }