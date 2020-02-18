// Write your solution in this file!
let  driver = {}
function updateDriverWithKeyAndValue(driver, address, value){
    let newDriver = {...driver}
    newDriver.address = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value){
    driver.address = value
    return driver
}

function deleteFromDriverByKey(driver, name){
    let newDriver = {...driver}
    delete newDriver.name
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, name){
    delete driver.name
    return driver
}
