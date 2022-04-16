// constructing our own promise

let myPromise = new Promise(function (resolve, reject) {
	let num1 = 1;
	let num2 = 10;
	let string = "Value is equal to 2";
	if (num1 + num2 == 2) {
		// resolve();
		resolve(string);
	} else {
		reject("NO, value are not equal");
	}
});

myPromise.then(function (string) {
	console.log("in .then", string);
})
.catch(function (err) {
	console.log(err);
});
