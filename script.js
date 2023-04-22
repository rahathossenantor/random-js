const seconsToHour = (seconds) => {
  let minutes = seconds / 60
  let hours = minutes / 60
  return hours
}

const footToGoj = (foot) => {
  let goj = foot / 3
  return goj
}

const gojToMile = (goj) => {
  let mile = goj / 1760
  return mile
}

const feetToMile = (feet) => {
  let goj = footToGoj(feet)
  let mile = gojToMile(goj)
  return mile
}

const isEvenNumber = (number) => {
  if (number <= 0) {
    return `${number} is an incorrect number!`
  }
  
  let remainder = number % 2
  
  if (remainder == 0) {
    return `${number} is an even number.`
  }
  
  return `${number} is an odd number.`
}

const fAge = [13,15,18,11,19,14,16,143]
let maxAge = 0
for(let i = 0; i < fAge.length; i++){
  let age = fAge[i]
  if (age > maxAge) {
    maxAge = age
  }
}
// console.log(maxAge)

const winterCloths = []
winterCloths.push('Genji', 'Panjabi', 'Sweter')

const serial = []
serial.push('Rahat', 'Kader', 'Rahman', 'Yousuf')
serial.shift()
serial.shift()
serial.shift()
// console.log(serial)

// const person = {
//   name: "Md Rahat Hossen Antor",
//   father: "Md Rasel Alam",
//   mother: "Nazmun Nahar",
//   nid: 9168082890,
//   passport: "A06985444",
//   dateOfBirth: "27/09/2004"
// }
// console.log(person.nid)

class Person {
  constructor(name, nid, passport) {
    this.name = name,
    this.nid = nid,
    this.passport = passport
  }
}

const man = new Person('Rahat', 9168082890, 'A06985444');
// console.log(man)

const students = {}

students[0] = "Hablu"
students[1] = "Bablu"
students[2] = "Gablu"
// console.log(students)

class Node {
  constructor(value){
    this.value = value,
    this.next
  }
}

class LinkedList {
  constructor(head){
    this.head = head
  }
}

const listNode = new Node('amader')
// console.log(listNode)
const manobBondhon = new LinkedList(listNode)
// console.log(manobBondhon)

// const locations = ['Hatirjhil', 'Komolapur', 'Mirpur', 'friendsHouse', 'Gulistan']

// for(let i = 0; i < locations.length; i++){
//   let jayga = locations[i]
//   if (jayga == 'friendsHouse') {
//     console.log('Tomal re paoa gese')
//     break
//   }
// }

const vortas = ['alu vorta', 'dal vorta', 'begun vorta', 'shutki vorta', 'sim vorta']
// console.log(vortas.indexOf('shutki vorta'))

const notes = [480,780,13,428,907,175,2]
notes.sort()
// console.log(notes)


class Store {
  constructor(storeName) {
    this.storeName = storeName,
    this. products = []
    this.prices = {}
    this.stock = {}
    this.totalSales = 0
  }
  
  isProductAvailable(productName){
    let productIndex = this.products.indexOf(productName)
    if (productIndex === -1) {
      return false
    } else {
      return true
    }
  }
  
  addNewProduct(productName, productQuantity, productPrice){
    let isExist = this.isProductAvailable(productName)
    if (isExist) {
      let available = this.stock[productName]
      this.stock[productName] += productQuantity
    } else {
      this.products.push(productName)
      this.stock[productName] = productQuantity
      this.prices[productName] = productPrice
    }
  }
  
  getProductPrice(productName){
    if (productName === ``) {
      let status = `Please write the product name carefully!`
      return status
    } else {
      let isAvailable = this.isProductAvailable(productName)
      if (isAvailable) {
        let productPrice = this.prices[productName]
        return productPrice
      } else {
        let status = `Sorry! we do not have the ${productName}!`
        return status
      }
    }
  }
  
  getTotalSales(){
    let sales = this.totalSales
    return sales
  }
  
  sellProducts(productName, productQuantity){
    let product = this.isProductAvailable(productName)
    let available = this.stock[productName]
    if (!product) {
      let status = `Sorry! we do not have the ${productName}!`
      return status
    } else {
      if (available < productQuantity) {
        let status = `Sorry! we do not have ${productQuantity} ${productName}!`
        return status
      } else{
        let productPrice = this.getProductPrice(productName)
        let currentSales = productPrice * productQuantity
        this.totalSales += currentSales
        let remaining = available - productQuantity
        this.stock[productName] = remaining
        let status = `Thanks for purchase :)`
        return status
      }
    }
  }
}


function wordCount(sentence) {
  let count = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " && sentence[i+1] !== " "){
    count++
    }
  }
  count++
  return count
}

function sentenceCount(paragraph) {
  let count = 0
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "." || paragraph[i] === "?" || paragraph[i] === "!"){
    count++
    }
  }
  return count
}

function vowelsCount(sentence){
  sentence = sentence.toLowerCase()
  let count = 0
  for(let i = 0; i < sentence.length; i++){
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
      count++
    }
  }
  return count
}


function removeDuplicate(items){
  const selected = []
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let index = selected.indexOf(item)
    if (index === -1) {
      selected.push(item)
    }
  }
  return selected
}
