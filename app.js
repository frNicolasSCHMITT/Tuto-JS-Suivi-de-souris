let balls = document.getElementsByClassName("ball");

document.onmousemove = function() {

    let x = event.clientX * 100 / window.innerWidth + "%";  //pout tracker la position du curseur du client
    let y = event.clientY * 100 / window.innerHeight + "%";

    for(let i = 0; i<2; i++){
        balls[i].style.left = x;    //oriente les yeux en direction du pointer
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x +",-" + y +")";    //oriente à l'opposé pour adoucir l'effet
    }
}