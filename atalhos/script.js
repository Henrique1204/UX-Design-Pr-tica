$("button").on("click", function() {
    let idSom = $(this).next().attr("id");
    let som = document.getElementById(idSom);

    som.play();
});

Mousetrap.bind("a", () => document.getElementById("A").play());
Mousetrap.bind("b", () => document.getElementById("B").play());
Mousetrap.bind("c", () => document.getElementById("C").play());
Mousetrap.bind("d", () => document.getElementById("D").play());
Mousetrap.bind("e", () => document.getElementById("E").play());
Mousetrap.bind("f", () => document.getElementById("F").play());
Mousetrap.bind("g", () => document.getElementById("G").play());
Mousetrap.bind("h", () => document.getElementById("H").play());
Mousetrap.bind("i", () => document.getElementById("I").play());
Mousetrap.bind("j", () => document.getElementById("J").play());
Mousetrap.bind("k", () => document.getElementById("K").play());
Mousetrap.bind("l", () => document.getElementById("L").play());
Mousetrap.bind("m", () => document.getElementById("M").play());
Mousetrap.bind("n", () => document.getElementById("N").play());
Mousetrap.bind("o", () => document.getElementById("O").play());
Mousetrap.bind("p", () => document.getElementById("P").play());
Mousetrap.bind("q", () => document.getElementById("Q").play());
Mousetrap.bind("r", () => document.getElementById("R").play());
Mousetrap.bind("s", () => document.getElementById("S").play());
Mousetrap.bind("t", () => document.getElementById("T").play());
Mousetrap.bind("u", () => document.getElementById("U").play());
Mousetrap.bind("v", () => document.getElementById("V").play());
Mousetrap.bind("w", () => document.getElementById("W").play());
Mousetrap.bind("x", () => document.getElementById("X").play());
Mousetrap.bind("y", () => document.getElementById("Y").play());
Mousetrap.bind("z", () => document.getElementById("Z").play());
