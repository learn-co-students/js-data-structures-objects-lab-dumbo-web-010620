// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, k, v) {
    return Object.assign({}, driver, {[k]: v} );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    driver[k] = v;

    return driver;
}

function deleteFromDriverByKey(driver, k) {
    const newItem = Object.assign({}, driver);

    delete newItem[k];

    return newItem;
}

function destructivelyDeleteFromDriverByKey(driver, k) {
    delete driver[k];

    return driver
}