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
