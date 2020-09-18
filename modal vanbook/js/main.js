$("a.btn").on("click", (e) => {
    e.preventDefault();

    $("#modal").addClass("ativo");
});

$("#modal").on("click", function (modal) {
    if (modal.target === this) {
        $(this).removeClass("ativo");
    }
});