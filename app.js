function afa(aja) {
    var res = document.getElementById('xyz');
    res.value += aja;
}
function clearkro() {
    var res = document.getElementById('xyz');
    res.value = '';
}
function getResult() {
    var res = document.getElementById('xyz');
    res.value = eval(res.value);

}