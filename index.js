// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return {...driver, ...{ [key]: value } }; // <-- spread operator.
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value; // changes the value of said key.
    return driver; // explicitly returns the driver.
}

function deleteFromDriverByKey(driver, key){
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}