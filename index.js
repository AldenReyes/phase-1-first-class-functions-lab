// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = (multiplierValue) => fareValue => fareValue * multiplierValue;
const fareDoubler = (fare) => createFareMultiplier(2)(fare);
const fareTripler = (fare) => createFareMultiplier(3)(fare);

selectDifferentDrivers = (drivers, selectionFunction) => {
  if (selectionFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } 
  else if (selectionFunction === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
  else console.log("error")
}
  