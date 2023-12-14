(function($) {
    $(".contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "Your name type it right here!",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: " email, for support"
            },
            message: {
                required: "um...yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
                success: function() {
                    $(".contact-form").resetForm();
                    $(".success").slideDown("slow");
                },
                error: function() {
                    $(".error").slideDown("slow");
                }
            });
        }
    });    
})(jQuery);