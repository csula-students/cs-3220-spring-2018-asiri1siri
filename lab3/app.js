
var x = window.incrementalGame.state.counter;
var y = document.getElementById("numb")+1;
window.onload = function()
  {
    document.querySelector('#pick').onclick = function ()
    {
      console.log(x++);
      document.getElementById("numb").innerHTML = y++;
    }
  }
