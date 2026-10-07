function mostrarPlato(plato){

    document.querySelector("header").style.display="none";
    document.querySelector("#platos").style.display="none";

    document.querySelectorAll(".detalle").forEach(function(seccion){
        seccion.style.display="none";
    });

    document.getElementById(plato).style.display="block";

    window.scrollTo(0,0);

    history.pushState({plato: plato}, "", "#" + plato);
}



window.addEventListener("popstate", function(event){

    if(event.state && event.state.plato){

        document.querySelector("header").style.display="none";
        document.querySelector("#platos").style.display="none";

        document.querySelectorAll(".detalle").forEach(function(seccion){
            seccion.style.display="none";
        });

        document.getElementById(event.state.plato).style.display="block";

        window.scrollTo(0,0);

    }else if(event.state && event.state.pagina === "platos"){

        document.querySelector("header").style.display="none";
        document.querySelector("#platos").style.display="block";

        document.querySelectorAll(".detalle").forEach(function(seccion){
            seccion.style.display="none";
        });

        window.scrollTo(0,0);

    }else{

        document.querySelector("header").style.display="flex";
        document.querySelector("#platos").style.display="none";

        document.querySelectorAll(".detalle").forEach(function(seccion){
            seccion.style.display="none";
        });

        window.scrollTo(0,0);
    }

});


function volver(){

    document.querySelector("header").style.display="none";
    document.querySelector("#platos").style.display="block";

    document.querySelectorAll(".detalle").forEach(function(seccion){
        seccion.style.display="none";
    });

    window.scrollTo(0,0);

    history.pushState({pagina:"platos"}, "", "#platos");
}


function compartirWhatsApp(){

    let mensaje = "Mira esta página sobre los platos típicos de Bolivia 🇧🇴🍽️";
    let enlace = window.location.href;

    window.open(
        "https://wa.me/?text=" + encodeURIComponent(mensaje + "\n" + enlace),
        "_blank"
    );
}


function compartirFacebook(){

    let enlace = window.location.href;

    window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(enlace),
        "_blank"
    );
}


function copiarEnlace(){

    navigator.clipboard.writeText(window.location.href);

    document.getElementById("mensaje-copiado").textContent =
        "✅ ¡Enlace copiado! Ahora puedes compartirlo donde quieras.";

    setTimeout(function(){

        document.getElementById("mensaje-copiado").textContent = "";

    },3000);
}