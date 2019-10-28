$(document).ready(function () {

    // Nombre de caractere requis
    $("form").submit(function () {
        var nombreCaractere = false;
        for (let i = 0; i < $("input").length; i++)
            if ($("input:eq(" + i + ")").val().length < 5) {
                nombreCaractere = true;
                $("input:eq(" + i + ")").css("border-color", "red");
            }

            else if ($("input:eq(" + i + ")").val().length <= 10){
                $("input:eq(" + i + ")").css("border-color", "green");
            }

        if (nombreCaractere == true) {
            alert("Pas assez de caractere");
            nombreCaractere = false;
        }
        // Fin nombre de caractere requis
        // Nombre maximum de caracteres
        if ($(".password > input, .login > #pseudo").val().length > 10){
            alert("Le pseudo et/ou le mot de passe est trop long");
            $(".password > input, .login > #pseudo").css("border-color", "red");
        }
        //Fin nombre de caracetres maximum
        // Vérification Mot de passe
        
        if ($("#pass").val() != $("#passconf").val()){
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