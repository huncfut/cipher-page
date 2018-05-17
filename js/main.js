window.onload = function() {
  input = document.getElementById("input")
  h = document.getElementById("tag")
}

function hash(s) {
  a = 1
  c = 0
  if (s) {
    a = 0
    for (h = s.length - 1; h >= 0; h--) {
      o = s.charCodeAt(h)
      a = (a<<6&268435455) + o + (o<<14)
      c = a & 266338304
      a = c!==0?a^c>>21:a
    }
  }
  return String(a);
}

function check() {
  if (hash(input.value.toUpperCase()) == "60872263") {
    $("#collapseSuccess").collapse('show')
  } else {
    input.value = ""
    input.focus()
  }
}
