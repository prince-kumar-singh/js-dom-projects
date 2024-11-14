var elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
    console.log(val.childNodes[3]);
    val.addEventListener('mouseenter', function(dets) {
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener('mouseleave', function(dets) {
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener('mousemove', function(dets) {
       val.childNodes[3].style.left=dets.x+"px";
       //val.childNodes[3].style.top=dets.y+"px";
    });

    
})



















// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector('#elem img');


// elem.addEventListener('mousemove', function(dets) {
//     elemImage.style.left=dets.x+"px";
//     elemImage.style.top=dets.y+"px";
// });

// elem.addEventListener('mouseenter', function(dets) {
//     elemImage.style.opacity = 1;
// });

// elem.addEventListener('mouseleave', function(dets) {
//     elemImage.style.opacity = 0;
// });