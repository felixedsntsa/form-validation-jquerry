$(document).ready(function () {
    $("input").on("input", function () {
        $(this).removeClass("input-error");
        $(this).next(".error").remove();
    });
    
    $(".registration").on("submit", function (e) {
        e.preventDefault();

        $(".error").remove();

        let isValid = true;

        const firstName = $("#firstname").val().trim();
        const lastName = $("#lastname").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        if (firstName === "") {
            $("#firstname").after('<div class="error">First name is required</div>');
            $("#firstname").addClass("input-error");
            isValid = false;
        }

        if (lastName === "") {
            $("#lastname").after('<div class="error">Last name is required</div>');
            $("#lastname").addClass("input-error");
            isValid = false;
        }

        if (email === "") {
            $("#email").after('<div class="error">Email is required</div>');
            $("#email").addClass("input-error");
            isValid = false;
        } else if (!isValidEmail(email)) {
            $("#email").after('<div class="error">Enter a valid email</div>');
            $("#email").addClass("input-error");
            isValid = false;
        }

        if (password === "") {
            $("#password").after('<div class="error">Password is required</div>');
            $("#password").addClass("input-error");
            isValid = false;
        } else if (password.length < 6) {
            $("#password").after('<div class="error">Password must be at least 6 characters</div>');
            $("#password").addClass("input-error");
            isValid = false;
        }

        if (isValid) {
            $("button").text("Registering...").prop("disabled", true);
            setTimeout(() => {
                alert("Form submitted successfully!");
                $("button").text("Register").prop("disabled", false);
            }, 1000);
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
