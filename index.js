// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplierValue) {
  return fareValue => fareValue * multiplierValue;
}
const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, selectionFunction) {
  if (selectionFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } 
  else if (selectionFunction === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
  else console.log("error")
}
  