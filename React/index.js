
// index.js

// show the document structure & tags in the browser console to find the tags
//console.log(document)

// copy & paste the id tag for the increment button
// save it as a variable
const incrementBtn = document.getElementById("increment-btn");
const countDisplay = document.getElementById("count-display");

// can change the text of the buttons & count display : DOM
//countDisplay.innerText = "1"
//incrementBtn.innerText = "press me"

// -- state: data that affects user interface
let currentCount = 0;


//-------- event listener
// ( event listening for, function )
incrementBtn.addEventListener('click', () => {
    //alert(' you clicked me')

    // update the count to increment
    currentCount++
    // update the DOM
    countDisplay.innerText = currentCount
})


// the code above does not scale, REACT allows for scalability.

// step 1: Add React script tags from here : https://reactjs.org/docs/add-react-to-a-website.html#step-2-add-the-script-tags

//      <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
//      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

//        place the 2 script src tags in the HTML <head> section

// step 2: switch to react.js file

