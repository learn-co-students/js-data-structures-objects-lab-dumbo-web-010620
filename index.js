// Write your solution in this file!

let driver = {} 

function updateDriverWithKeyAndValue(driver, key, value) {
    let newObj = Object.assign({}, driver) 
    newObj[key] = value
    return newObj

    // console.log(Object.assign({}, driver, key, value))
    // return Object.assign({}, driver, key, value)

    // let newDriver = driver
    // console.log(driver, key, value)
    // newDriver[key.toString()] = value;
    // console.log(driver)
    // console.log(newDriver)

    // return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value 
    return driver 
}

function deleteFromDriverByKey(driver, key) {
    let newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
}