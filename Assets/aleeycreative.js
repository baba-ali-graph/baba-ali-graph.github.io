// TYPING EFFECT
const text = `
	${greeter()} |
	Welcome to AleeyCreative |
	I am a software developer  | 
	I build websites,  | 
	interactive applications, |	
	and APIs. |
	Learn more about me <span class="highlight mdi mdi-arrow-down-circle"> </span> |
	`
const myTyper = createTyper(text, ".text-1", {
  cursor: false,
  backSpeed: 15
})

// ANIMATION WHEN SCROLLING
AOS.init({
  easing: "ease-in-out-sine"
})

// GREETER FUNCTION

function greeter(targetEl) {
  const hr = new Date().getHours()
  console.log("current hours", hr)
  let when = hr < 12 ? "morning" : hr >= 12 && hr < 16 ? "afternoon" : "evening"
  let actualgreeting = "Good " + when
  if (targetEl) document.querySelector(targetEl).textContent = actualgreeting
  else return actualgreeting
}
