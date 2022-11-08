let position = 0;
function recursionAnimation(){
    position = position + 5;
    if (position > 400) return;
    document.querySelector('.child').style.left = position + 'px';
    animation();
}
function animation() {
    setTimeout(recursionAnimation,100);
}
animation();
// ------------------------
let offset = 0;
function move(){
    offset = offset + 5;
    document.querySelector('.child-2').style.left = offset + 'px';
    if (offset > 400) {
        return true;
    }
    setTimeout(move, 500);
}
document.querySelector('.click').onclick = move;