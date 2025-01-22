document.addEventListener("DOMContentLoaded", ready);



function ready() {
  startType();
}

function startType() {
  let log = document.getElementById('log');
  let text = document.getElementById('text');
  let data = text.innerHTML;
  data = data.trim();

  new TypeIt('#log', {
    speed: 80,
    startDelay: 1000
  })
  .type(data)
  .go();
}