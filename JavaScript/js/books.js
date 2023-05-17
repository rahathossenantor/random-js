// Seconds to hour conversion.
const seconsToHour = (seconds) => {
  let minutes = seconds / 60
  let hours = minutes / 60
  return hours
}

// Foot to goj conversion.
const footToGoj = (foot) => {
  let goj = foot / 3
  return goj
}

// Goj to mile conversion.
const gojToMile = (goj) => {
  let mile = goj / 1760
  return mile
}

const feetToMile = (feet) => {
  let goj = footToGoj(feet)
  let mile = gojToMile(goj)
  return mile
}

// Chacking is even number or not.
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

// A class that's creat new stores.
class Store {
  constructor(storeName) {
    this.storeName = storeName,
      this.products = []
    this.prices = {}
    this.stock = {}
    this.totalSales = 0
  }

  isProductAvailable(productName) {
    let productIndex = this.products.indexOf(productName)
    if (productIndex === -1) {
      return false
    } else {
      return true
    }
  }

  addNewProduct(productName, productQuantity, productPrice) {
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

  getProductPrice(productName) {
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

  getTotalSales() {
    let sales = this.totalSales
    return sales
  }

  sellProducts(productName, productQuantity) {
    let product = this.isProductAvailable(productName)
    let available = this.stock[productName]
    if (!product) {
      let status = `Sorry! we do not have the ${productName}!`
      return status
    } else {
      if (available < productQuantity) {
        let status = `Sorry! we do not have ${productQuantity} ${productName}!`
        return status
      } else {
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

// This function count how many words in a sentents.
function wordCount(sentence) {
  let count = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " && sentence[i + 1] !== " ") {
      count++
    }
  }
  count++
  return count
}

// This function count how many sentents in a paragraph.
function sentenceCount(paragraph) {
  let count = 0
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "." || paragraph[i] === "?" || paragraph[i] === "!") {
      count++
    }
  }
  return count
}

// This function count how many vowels in a sentents.
function vowelsCount(sentence) {
  sentence = sentence.toLowerCase()
  let count = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
      count++
    }
  }
  return count
}

// This function remove duplicat elements.
function removeDuplicate(items) {
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