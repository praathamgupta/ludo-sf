let steps;

function getRndInteger(min,max) {
  steps = Math.floor(Math.random() * (max - min)) + min;
  return steps;
}

let Players = [
    {
      token: document.getElementById("A1"),
      coordinates : 0
    },
    {
      token: document.getElementById("A2"),
      coordinates : 0
    },
    {
      token: document.getElementById("B1"),
      coordinates : 17
    },
    {
      token: document.getElementById("B2"),
      coordinates : 17
    }
  ]


Players.forEach(element => {
  element.token.addEventListener('click', function(){
    element.coordinates += steps;
    element.token.remove();
    document.getElementById(element.coordinates).appendChild(element.token);
  })
});
