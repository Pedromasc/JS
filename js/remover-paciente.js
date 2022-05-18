var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.addEventListener("dblclick", function(event) {
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    
    });
});