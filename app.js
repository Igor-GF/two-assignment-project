const changeEl = document.getElementById("change");

changeEl.addEventListener('click', changeText);

function changeText(e) {

  e.target.innerHTML = "To This!"
  
};
