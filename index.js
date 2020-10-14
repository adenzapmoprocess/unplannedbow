
document.getElementById('Myst').addEventListener('change', function () {
    var style = this.value == "Monday" || this.value == "Saturday" ? 'block' : 'none';
    document.getElementById('Joy').style.display = style;

});

document.getElementById('Myst').addEventListener('change', function () {
    var style = this.value == "Tuesday" || this.value == "Friday" ? 'block' : 'none';
    document.getElementById('Sorrow').style.display = style;
});

document.getElementById('Myst').addEventListener('change', function () {
    var style = this.value == "Wednesday" || this.value == "Sunday" ? 'block' : 'none';
    document.getElementById('Glorious').style.display = style;
});

document.getElementById('Myst').addEventListener('change', function () {
    var style = this.value == "Thursday" ? 'block' : 'none';
    document.getElementById('Lumi').style.display = style;
});


document.getElementById('Myst').addEventListener('change', function () {
  var data = document.getElementById("Myst");
  var val = data.value;

  if ( val === "Monday" || val == "Saturday") {
    document.getElementById("con").innerHTML = "Let us Contemplate the 5 Joyful Mysteries";
  }

if ( val == "Wednesday" || val == "Sunday") {
    document.getElementById("con").innerHTML = "Let us Contemplate the 5 Glorious Mysteries"; }

 if ( val == "Tuesday" || val == "Friday") {
    document.getElementById("con").innerHTML = "Let us Contemplate the 5 Sorrowful Mysteries";}

  if ( val == "Thursday"){
    document.getElementById("con").innerHTML = "Let us Contemplate the 5 Luminos Mysteries";}

});
