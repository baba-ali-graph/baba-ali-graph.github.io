function createTyper(str, identifier, options) {
  const words = str.split("|")
  const baseOptions = createOptions(words, options)
  const toAttach = createElemAndAttachToParent(identifier)
  const myTyper = new Typed(toAttach, baseOptions)
  return myTyper
}

const createOptions = (words, options = {}) => ({
  strings: words,
  typeSpeed: options.typeSpeed || 20,
  backSpeed: options.backSpeed || 20,
  showCursor: options.cursor || true,
  startDelay: options.delay || 0,
  loop: options.loop || true
})

function createElemAndAttachToParent(identifier) {
  const elem = document.createElement("span")
  const parent = document.querySelector(identifier)
  parent.appendChild(elem)
  elem.setAttribute("id", "" + identifier.split(/[.#]/)[1] + "-child")
  return "#" + elem.getAttribute("id")
}
