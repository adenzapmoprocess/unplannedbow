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
