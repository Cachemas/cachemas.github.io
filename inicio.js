let header_search_bar = document.getElementById("nav_search_bar");

header_search_bar.addEventListener("focus", function() {
    if (header_search_bar.placeholder === "Busca Criaturas, Items o Recetas") {
        header_search_bar.placeholder = "";
    }
});

header_search_bar.addEventListener("blur", function() {
    if (header_search_bar.placeholder === "") {
        header_search_bar.placeholder = "Busca Criaturas, Items o Recetas";
    }
});