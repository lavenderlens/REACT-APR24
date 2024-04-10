const now = () => new Date().getTime();
console.log("pausing...");
let start = now();
while (now() - start < 500) console.log("resuming...");
console.log(start);
console.log(now() - start);
