(function () {
	function init() {
	  document.getElementById('fontcolor').addEventListener('click',ändereSchriftFarbe);
	}

    function ändereSchriftFarbe () {
      for (var i = 0, p = document.getElementsByTagName('p'); i < p.length; i++) {
        p[i].style.color = 'red';
      }
    }

  document.addEventListener('DOMContentLoaded',init);
}());

(function () {
	function init() {
	  document.getElementById('numbsbgcolor').addEventListener('click',ändereNumbsHintergrundFarbe);
	}

    function ändereNumbsHintergrundFarbe () {
      for (var i = 0, button = document.getElementsByTagName('button'); i < button.length; i++) {
        button[i].style.background = 'blue';
      }
    }

  document.addEventListener('DOMContentLoaded',init);
}());
