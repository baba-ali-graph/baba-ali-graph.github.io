
// TYPING EFFECT
	const text = `
	${greeter()} |
	Welcome to AleeyCreative |
	I am a young developer... | 
	who builds websites,  | 
	who builds webapps, |	
	and APIs. |
	You can learn more about me <span class="highlight mdi mdi-arrow-down-circle"> </span> |
	
	`
	const myTyper = createTyper(text, '.text-1', 0, false)
	let words = 'I am a young developer who build stuffs for the <span class=highlight> web </span> | You can learn more about me <span class="highlight mdi mdi-arrow-down-circle"> </span> '  
	
	
	
	
	
// ANIMATION WHEN SCROLLING

AOS.init({
	easing:"ease-in-out-sine",
})    


// GREETER FUNCTION

function greeter(where) {
	const hr = new Date().getHours()
	console.log('current hours',hr)
	let when  = hr < 12 ? 'morning' : hr >= 12 && hr < 16 ? 'afternoon' : 'evening'
	let actualgreeting = 'Good ' + when
	if(where)
		document.querySelector('where').textContent = actualgreeting
	else return actualgreeting
} 
