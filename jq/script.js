$(document).ready(function () {



    /************************************************************************************** */
    /************************************************************************************** */
    /************************************ PLUGIN SLIDER************************************ */
    /************************************************************************************** */
    /************************************************************************************** */

    $('.slider').bxSlider({
        auto: true,
        mode: 'fade',
        captions: true,
        slideWidth: 600
    }
    );

    $('.bx-wrapper').css({

        border: 'none',
        'box-shadow': 'none'

    });

    $('.bx-wrapper .bx-next').css({
        'margin-right': '1rem',
        'background': "none"
    });

    $('.bx-wrapper .bx-prev').css({
        'margin-left': '1rem',
        'background': "none"
    });

    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************HAMBURGUESA************************************** */
    /************************************************************************************** */
    /************************************************************************************** */
    $("#menu-hamburguesa").click(function () {
        if ($(".menu").css("top") < "0px") {
            $(".menu").stop();
            $("#menu-hamburguesa>span").stop();
            $(".menu").animate({ top: 0 }, 1000);
            $("#menu-hamburguesa>span:first-child").toggleClass("hamburguesa-animada1");
            $("#menu-hamburguesa>span:last-child").toggleClass("hamburguesa-animada2");
            $("#menu-hamburguesa>span").animate({ "background-color": "#D96998" }, 500);

        } else {
            $(".menu").stop();
            $("#menu-hamburguesa>span").stop();
            $(".menu").animate({ top: "-28rem" }, 1000);
            $("#menu-hamburguesa>span:first-child").toggleClass("hamburguesa-animada1");
            $("#menu-hamburguesa>span:last-child").toggleClass("hamburguesa-animada2");
            if ($("#cabecera>nav").hasClass("menu-verde")) {
                $("#menu-hamburguesa>span").animate({ "background-color": "#6D9B00" }, 500);
            } else {
                $("#menu-hamburguesa>span").animate({ "background-color": "white" }, 500);
            }

        }

    });

    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************SCROLL************************************** */
    /************************************************************************************** */
    /************************************************************************************** */



    $(document).scroll(function () {
        $(".menu").stop();
        $("#menu-hamburguesa>span").stop();
        $(".menu").animate({ top: "-28rem" }, 500);
        $("#menu-hamburguesa>span:first-child").removeClass("hamburguesa-animada1");
        $("#menu-hamburguesa>span:last-child").removeClass("hamburguesa-animada2");
        $("#menu-hamburguesa>span").animate({ "background-color": "white" }, 500);


    });


    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************CABECERA************************************** */
    /************************************************************************************** */
    /************************************************************************************** */

    $(document).scroll(function () {

        if ($(this).scrollTop() > 20) {
            if ($("#cabecera").css("display") != "none") {

                $("#cabecera").stop();
                $("#cabecera").fadeTo("slow", 0.8);
            }

            $("#menu-cabecera-escritorio").stop();
            $('#menu-cabecera-escritorio').css('position', "fixed");
            $("#menu-cabecera-escritorio").stop();
            $("#menu-cabecera-escritorio").fadeTo("slow", 0.8);

        } else {
            if ($("#cabecera").css("display") != "none") {

                $("#cabecera").stop();
                $("#cabecera").fadeTo("slow", 1);
            }

            $('#menu-cabecera-escritorio').css('position', "absolute");
            $("#menu-cabecera-escritorio").stop();
            $("#menu-cabecera-escritorio").fadeTo("slow", 1);
        }

    })

    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************BOTÓN LIKE********************************* */
    /************************************************************************************** */
    /************************************************************************************** */

    $(".contenedor-like").dblclick(function () {
        console.log($(this).children("img").attr("src"));

        if ($(this).children("img").attr("src") == "images/iconos/icono-no-like.svg") {
            $(this).children("img").animate({
                opacity: "0.25"
            }, 350);
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("no-like.svg", "like.svg"));
            $(this).children("img").animate({
                opacity: "100"
            }, 350);

        } else {
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("like.svg", "no-like.svg"));

        }


    });


    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************VER MÁS ENTRADAS********************************* */
    /************************************************************************************** */
    /************************************************************************************** */

    $(".btn-mas-menos").click(function () {

        if ($(".apartado-blogs-extra").css("display") == "none") {

            $(".apartado-blogs-extra").stop();
            $(".apartado-blogs-extra").slideDown("slow");
            $(".apartado-blogs-extra").css("display", "flex");

            $(this).hide();
            $("#btn-menos").show();
        } else {

            $(".apartado-blogs-extra").stop();
            $(".apartado-blogs-extra").slideUp("slow");

            $(this).hide();
            $("#btn-mas").show();
        }


    });


    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************BOTÓN VOLVER ARRIBA**************************** */
    /************************************************************************************** */
    /************************************************************************************** */

    $(document).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $("#volverarriba").stop();
            $("#volverarriba").fadeIn("fast");
        } else {
            $("#volverarriba").stop();
            $("#volverarriba").fadeOut();
        }

    })
    //-------------------------Click volver arriba--------------------------

    $("#volverarriba").click(function () {
        $("html").animate({ scrollTop: 0 });
    });


    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************FORMULARIOS*********************************** */
    /************************************************************************************** */
    /************************************************************************************** */
    $("#form-login-escritorio").validate({

        rules: {
            "nombre": { required: true, minlength: 1 },
            "clave": { required: true, minlength: 1 },
            "confirmar-clave": { required: true, equalTo: "#clave-form" },
            "correo": { required: true, minlength: 1, email: true },
            "mensaje": { required: true, minlength: 1 }

        },
        messages: {
            "nombre": "Campo obligatorio.",
            "clave": "Campo obligatorio.",
            "confirmar-clave": "Las contraseñas deben ser iguales",
            "correo": "Formato de e-mail no válido",
            "mensaje": "Por favor, escriba un mensaje"
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },

        highlight: function (element) {
            $(element).css("border", "3px solid #D96998");
        },
        unhighlight: function (element) {
            $(element).css("border", "none");
        }

    });

    $(".formulario-web").validate({

        rules: {
            "nombre": { required: true, minlength: 1 },
            "clave": { required: true, minlength: 1 },
            "confirmar-clave": { required: true, equalTo: "#clave-form" },
            "correo": { required: true, minlength: 1, email: true },
            "mensaje": { required: true, minlength: 1 }

        },
        messages: {
            "nombre": "Campo obligatorio.",
            "clave": "Campo obligatorio.",
            "confirmar-clave": "Las contraseñas deben ser iguales",
            "correo": "Formato de e-mail no válido",
            "mensaje": "Por favor, escriba un mensaje"
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },

        highlight: function (element) {
            $(element).css("border", "3px solid #D96998");
        },
        unhighlight: function (element) {
            $(element).css("border", "none");
        }

    });

    /************************************************************************************** */
    /************************************************************************************** */
    /****************************************REPRODUCTOR*********************************** */
    /************************************************************************************** */
    /************************************************************************************** */


    window.addEventListener('load', iniciar, false);



    function iniciar() {

        video = document.getElementById("reproduccion_video");

        ralentizar = document.getElementById("btn_menos_velocidad");
        stop = document.getElementById("btn_stop");
        retroceder = document.getElementById("btn_retroceder");
        playPause = document.getElementById("btn_play_pause");
        avanzar = document.getElementById("btn_avanzar");
        pantallaCompleta = document.getElementById("btn_pantalla_completa");
        acelerar = document.getElementById("btn_mas_velocidad");
        mute = document.getElementById("btn_volumen_mute");
        barra = document.getElementById("volumen");
        tiempoActual = document.getElementById("tiempo_actual");

        //
        ralentizar.addEventListener("click", accionRalentizar);
        stop.addEventListener("click", accionStop);
        retroceder.addEventListener("click", accionRetroceder);
        playPause.addEventListener("click", accionPlay);
        avanzar.addEventListener("click", accionAvanzar);
        pantallaCompleta.addEventListener("click", accionPantallaCompleta);
        acelerar.addEventListener("click", accionAcelerar);
        barra.addEventListener("change", accionVolumen);
        mute.addEventListener("click", accionMute);


        /*TIEMPO TRANSCURRIDO*/
        var intervaloTiempo = setInterval(tiempo, 10);

    }

    function tiempo() {

        var minutoActual = parseInt(video.currentTime / 60);
        var segundoActual = parseInt(video.currentTime - (minutoActual * 60));

        var minutos = (minutoActual <= 9) ? "0" + minutoActual : minutoActual;
        var segundos = (segundoActual <= 9) ? "0" + segundoActual : segundoActual;

        tiempoActual.innerHTML = minutos + ":" + segundos;


    }

    function accionRalentizar() {
        video.playbackRate -= 0.5;
    }

    function accionStop() {

        video.pause();
        playPause.setAttribute("src", "images/iconos/reproductor/btn_play.svg");
        video.currentTime = 0;
    }

    function accionRetroceder() {
        video.currentTime -= 20;
    }

    function accionPlay() {
        if (!video.paused && !video.ended) {

            video.pause();
            playPause.setAttribute("src", "images/iconos/reproductor/btn_play.svg");

        } else {
            video.play();
            video.playbackRate = 1;
            playPause.setAttribute("src", "images/iconos/reproductor/btn_pause.svg");

        }

    }

    function accionAvanzar() {
        video.currentTime += 20;
    }

    function accionPantallaCompleta() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }

    function accionAcelerar() {
        video.playbackRate += 0.5;
    }
    var valorBarra;
    function accionVolumen() {
        valorBarra = document.getElementById('volume').value;
        video.volume = valorBarra;
        mute.checked = false;
        if (mute.cheked == false || video.volume == 0) {
            console.log("mute");
            mute.setAttribute("src", "images/iconos/reproductor/mute.svg");
        }

        if (valorBarra <= 0.5) {
            mute.setAttribute("src", "images/iconos/reproductor/volumen_bajo.svg");
        } else {
            mute.setAttribute("src", "images/iconos/reproductor/volumen_alto.svg");
        }
    }

    var volumenAnterior;

    function accionMute() {

        if (video.volume > 0) {
            volumenAnterior = video.volume;
            video.volume = 0;
            valorBarra = 0;
            mute.setAttribute("src", "images/iconos/reproductor/mute.svg");
        } else {
            video.volume = volumenAnterior;
            valorBarra = volumenAnterior;
            if (volumenAnterior <= 0.5) {
                mute.setAttribute("src", "images/iconos/reproductor/volumen_bajo.svg");
            } else {
                mute.setAttribute("src", "images/iconos/reproductor/volumen_alto.svg");
            }
        }
    }

});