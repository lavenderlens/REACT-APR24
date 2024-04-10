const startTime = new Date().getMilliseconds();

const getEndTime = () => {
  let tempendTime = new Date().getMilliseconds();
  let second = (tempendTime - startTime) / 1000;
  return `took ${second} to finish`;
};

console.log("1: start App ", getEndTime());
setTimeout(() => {
  console.log("2: setTimeout ", getEndTime());
}, 0);
console.log("3: end App ", getEndTime());
