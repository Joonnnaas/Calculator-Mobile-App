function insert(num) {
  document.getElementById('tv').value += num;
}

function equal() {
  let tv = document.getElementById('tv').value;

  if(tv)
  document.getElementById('tv').value = eval(tv);
}

function c() {
  document.getElementById('tv').value = "";
}

function back() {
  let tv = document.getElementById('tv').value;

  document.getElementById('tv').value = tv.substring(0,tv.length-1);
}
