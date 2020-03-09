/* Author: Aniket*/
// OnLoad of window the function of conunter will be executed
window.onload = function () {
  var counters = document.querySelectorAll('.counter');

// For every counter assign and declare a update counter function
  counters.forEach(
    function (counter) {
      var updateCounter = function () {
        var speed = 100;
        // get the limit from data-attribute 
        var target = +counter.getAttribute('data-target');
        // get the initial count from data-attribute
        var count = +counter.getAttribute('data-current');
        // the incrementor
        var increment = target / speed;
        if (count < target) {
          var  currentVal = count + increment;
          counter.setAttribute("data-current" , currentVal);
          counter.innerText = Math.floor(currentVal);
          setTimeout(updateCounter, 50);
        } else {
          counter.innerText = target;
        }
      };
    updateCounter();
  });
}
