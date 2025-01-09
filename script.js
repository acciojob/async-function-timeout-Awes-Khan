//your JS code here. If required.;


const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click',()=>{
	makeDelay();
})

async function makeDelay() {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value, 10);
  
  new Promise((resolve)=>setTimeout(()=>{
  	output.innerHTML=text;
    resolve();
    
  },delay));
	
}