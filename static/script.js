$(document).ready(function () {

    $("#pass").keydown(function () {

        $("#pass").prop("title", "BOjour")

        if ($("#pass").val().length < 4) {
            $(".progress-bar").css("width", "0%")
        }
        else if ($("#pass").val().length == 4) {
            $(".progress-bar").css("width", "25%")
            $(".progress-bar").css("background", "red")
        }
        else if ($("#pass").val().length == 6) {
            $(".progress-bar").css("width", "75%")
            $(".progress-bar").css("background", "orange")
        }
        else if ($("#pass").val().length == 9) {
            $(".progress-bar").css("width", "100%")
            $(".progress-bar").css("background", "green")
        }

    })


    // Nombre de caractere requis
    $("form").submit(function () {
        var nombreCaractere = false;
        for (let i = 0; i < $("input").length; i++)
            if ($("input:eq(" + i + ")").val().length < 5) {
                nombreCaractere = true;
                $("input:eq(" + i + ")").css("border-color", "red");
            }

            else if ($("input:eq(" + i + ")").val().length <= 10) {
                $("input:eq(" + i + ")").css("border-color", "green");
            }

        if (nombreCaractere == true) {
            alert("Pas assez de caractere");
            nombreCaractere = false;
        }
        // Fin nombre de caractere requis
        // Nombre maximum de caracteres
        if ($(".password > input, .login > #pseudo").val().length > 10) {
            alert("Le pseudo et/ou le mot de passe est trop long");
            $(".password > input, .login > #pseudo").css("border-color", "red");
        }
        //Fin nombre de caracetres maximum
        // Vérification Mot de passe

        if ($("#pass").val() != $("#passconf").val()) {
            alert("Mot de passe incorrect");
            $(".password > input").css("border-color", "red");

        }
        //Fin verification mot de passe 
        // Verification Email
        // if ($("#mail").val().match('@' +'fr')){
        //     $("#mail").css("border-color", "green");
        // }

        // else{
        //     $("#mail").css("border-color", "red");
        //     alert("Votre email est incorrect")
        // }
        // Fin verification email

        // Sécurité mot de passe 

        return false;
    })


})