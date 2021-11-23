let clicks = 0;
function onClickPlus() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
function onClickMinus() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}