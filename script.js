function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 0);
    });
}
function evenNumber(arr) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const even=arr.filter(item=>item%2===0);
		resolve (even);
	},1000)})
	
}
function multiplication(arr) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const multi=arr.map(item=>item*2);
		resolve (multi);
	},2000)})
}

function output(text) {
	const outputText=document.getElementById('output');
	  if (outputText) {
        outputText.textContent = text;
    } else {
        console.error("Element with ID 'output' not found.");
    }
}
getNumbers()
  .then((number) => {
    output(`${number}`);
    return evenNumber(number);
  })
  .then((arr) => {
    output(`${arr}`);
    return multiplication(arr);
  })
  .then((output1)=>{
    output(`${output1}`);
  
  })
  .catch((errer) => {
    output(errer);
  });















