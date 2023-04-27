window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let output = document.getElementById("output")
let pro1 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("First")
	},1000)
})
promises.push(pro1);

let pro2 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("Second")
	},2000)
})
promises.push(pro2);

let pro3 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("third")
	},3000)
})
promises.push(pro3);

let pro4 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("fourth")
	},4000)
})
promises.push(pro4);

let pro5 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("five")
	},5000)
})
promises.push(pro5);

Promise.any(promises).then((res)=>{
	output.innerHTML = res;
})

