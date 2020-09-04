$("#contactForm").submit(function(e){
    e.preventDefault();
    var nombre = $("#name").val();
    var email = $("#email").val();
    var telefono = $("#phone").val();
    var mensaje = $("#message").val();
    if(nombre == "" || email == "" || telefono == "" || mensaje == ""){
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger')
            .append("<strong>Revisa que todos los campos estén llenos</strong>");
        return false;
    }
    else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger')
            .append("<strong>El correo no es válido</strong>");
        return false;
    }
    else{
        var datos = {"nombre":nombre,"email":email,"telefono":telefono,"mensaje":mensaje};
        $.ajax({
           // url:'http://www.uvseg.com.mx/mail/contact_me.php',
            url:'../mail/contact_me.php',
           // url:'http://localhost/uvseg/mail/contact_me.php',
            type:'POST',
            data:datos
        }).done(function(resp){
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#message").val("");
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success')
                .append("<strong>Su mensaje ha sido enviado</strong>");
        })
    }

});