const build_dialog = () => {
  const cont = $("#dialog-cont");

  const div = $("<div/>");
  $(div)
    .attr({
      id: "",
      class: "dialog-cont",
    })

    .appendTo(cont);

  const h3 = $("<h3/>");
  $(h3)
    .attr({
      id: "dialog-name",
      class: "dialog-name",
    })

    .appendTo(div);

  const br = $("<br/>");
  $(br).appendTo(div);

  const p = $("<p/>");

  $(p)
    .attr({
      id: "dialog-para",
      class: "dialog-para",
    })

    .appendTo(div);
};

const change_dialog = () => {};

const destroy_dialog = () => {
    document.getElementById("dialog-cont").textContent = "";
};


// build_dialog()