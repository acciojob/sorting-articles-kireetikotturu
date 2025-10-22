//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a, b)=>a.replace(/^(a |an |the)/i, "").trim().localeCompare(b.replace(/^(a |an |the)/i, "").trim()))

let ul = document.createElement("ul");
let body = document.querySelector("body");
body.appendChild(ul);


bands.forEach((item) =>{
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
})