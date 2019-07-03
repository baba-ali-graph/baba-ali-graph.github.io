		
			function createTyper(str, identifier,delayTime,looped,blinker,spd) {
			const words = str.split('|')
			const options = createOptions(words,delayTime,looped,blinker,spd)
			const toAttach = createElemAndAttachToParent(identifier)
			const myTyper = new Typed(toAttach,options)
			return myTyper
			}
			
			const createOptions = (words,delayed,looped,blinker,spd) => ({
				strings : words,
				typeSpeed : 20,
				backSpeed : 20,
				showCursor : blinker ? blinker : true,
				startDelay : delayed ? delayed : 0,
				loop:looped ? looped : true
			})
			
			function createElemAndAttachToParent(identifier){
				const elem = document.createElement('span')
				const parent = document.querySelector(identifier)
				parent.appendChild(elem)
				elem.setAttribute('id',''+identifier.split(/[.#]/)[1]+'-child')
				return "#" + elem.getAttribute('id')
			}
