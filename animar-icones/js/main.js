$("a.btn").on("click", (e) => {
    e.preventDefault();

    $("#modal").addClass("ativo");
});

$("#modal").on("click", function (modal) {
    if (modal.target === this) {
        $(this).removeClass("ativo");
    }
});

$("svg path").each(function() {
    const comprimento = $(this).get(0).getTotalLength();
    const comprimentoArredondado = Math.round(comprimento);

    $(this).attr("stroke-dasharray", comprimentoArredondado);
    $(this).attr("stroke-dashoffset", comprimentoArredondado);
});

function boxTop(box) {
    const boxOffset = $(box).offset();
    return boxOffset.top;
}

$(document).scroll(function() {
    const documentTop = $(this).scrollTop();

    if(documentTop > boxTop(".vantagens") - (documentTop * 0.6)) {
        $("svg").addClass("ativo");
    }
});