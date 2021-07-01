/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timeHours = time.split(':');
  let timeInput = parseInt(timeHours[0]);

  if (timeInput < 12){
    return "Good Morning"
  }
  if (timeInput > 17){
    return "Good Evening"
  }
  else{
    return "Good Afternoon"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(message){
  let display = document.getElementById('greeting');
  display.innerText = message
  return message
}