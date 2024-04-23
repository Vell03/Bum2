window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("up").style.display = "block";
            setTimeout(function(){ document.getElementById("up").style.opacity = "1"; }, 300); /* Появление */
        } else {
            document.getElementById("up").style.opacity = "0"; /* Исчезновение */
            setTimeout(function(){ document.getElementById("up").style.display = "none"; }, 300); /* Установка display: none после завершения анимации */
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }