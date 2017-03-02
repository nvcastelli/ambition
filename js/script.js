
/**
 * Created by Nick Castelli on 10/3/2016.
 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function Calculate() {
    var i1 = Number(document.getElementById("i1").value);
    var i2 = Number(document.getElementById("i2").value);
    var i3 = Number(document.getElementById("i3").value);
    var i4 = Number(document.getElementById("i4").value);
    var i5 = Number(document.getElementById("i5").value);
    var i6 = Number(document.getElementById("i6").value);
    var i7 = Number(document.getElementById("i7").value);
    var i8 = Number(document.getElementById("i8").value);



    console.log(i1);
    console.log(i2);
    console.log(i3);
    console.log(i4);
    console.log(i5);
    console.log(i6);
    console.log(i7);
    console.log(i8);



    var sum = (i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8);
    console.log(sum);
    var avg = sum/8;

    document.getElementById("answer").value = avg;

    console.log(avg)
    
}