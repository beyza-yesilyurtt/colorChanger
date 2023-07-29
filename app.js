const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const className = button.className;
    changeB(className);
    moveButtons();
   
  });
});

function changeB(className) {
  if (className === 'red-button') {
    body.style.backgroundColor = 'rgb(248, 93, 93)';
  } else if (className === 'green-button') {
    body.style.backgroundColor = ' rgb(109, 219, 109)';
  } else if (className === 'pink-button') {
    body.style.backgroundColor = ' rgb(223, 127, 143)';
  } else if (className === 'blue-button') {
    body.style.backgroundColor = ' rgb(91, 151, 219)';
  } else if (className === 'purple-button') {
    body.style.backgroundColor = 'rgb(177, 70, 177)';
  }
}

function moveButtons() {
    buttons.forEach(button => {
      
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    });
  }

  
  
  