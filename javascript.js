function changeColor(){

    var backColor = document.getElementById("headerContent");
    var textColor = document.getElementById("headerContent");

    backColor.style.backgroundColor = "rgba(148, 101, 136, 0.404)";
    textColor.style.color = "purple";
    
}

function changeText(){

    document.getElementById("title").innerHTML = "Convivencia en la playa";
    document.getElementById("subtitle").innerHTML = "Divercion";
    document.getElementById("parrafo1").innerHTML = "Un viaje con amigos puede ser una experiencia muy gratificante de las que recordar toda la vida. Planes divertidos, numerosas anécdotas, risas y más risas";
    document.getElementById("parrafo2").innerHTML = "a convivencia hace referencia a la acción de convivir, esto no es más que el compartir constante con otra persona diferente a ti todos los días, es decir, es el hecho de vivir en compañía con otros individuos, un ejemplo de esto sería una casa familiar, en la cual interactúan constantemente una familia, otro ejemplo sería los esposos que a pesar de que no posean niños, aún se considera que siguen practicando la convivencia, esta coexistencia tiene que tener un carácter pacífico, armonioso y sereno, alejándose totalmente de las discusiones entre las personas que conviven para evitar una mala convivencia.";

}

function changeImg(){
    
    document.getElementById("image1").src="./assest/im3.jpg"
    document.getElementById("image2").src="./assest/im4.jpg";

}