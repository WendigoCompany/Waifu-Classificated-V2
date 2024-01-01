const open_menu = (div_menu) => {
  $(div_menu).addClass("show-options");
  $(div_menu).removeClass("hidden-options");
  setTimeout(() => {
    $(div_menu).css({ opacity: 1 });
  }, 200);
};

const close_menu = (div_menu) => {
  $(div_menu).css({ opacity: 0 });

  setTimeout(() => {
    $(div_menu).removeClass("show-options");
    $(div_menu).addClass("hidden-options");
  }, 200);
};

const build_user_ui = () => {
  const ui_container = $("#user-options");

  const di_dropdown = $("<div/>");
  const button_dropdownMenuButton = $("<button/>");
  const div_menu = $("<div/>");
  const options = [
    { text: "Config", cb: () => {} },
    {
      text: "Change name",
      cb: (div_menu) => {
        build_modal_change_name();
        close_menu(div_menu);
      },
    },
  ];

  // $(di_dropdown).attr({
  //     "class": "",
  //     "id": "",
  // })

  $("<button/>").text("CHAT").appendTo(ui_container).attr({
    id: "chat-btn",
    class: "chat-btn basic-btn",
  })
  .on("click",()=>{
    build_modal_chat_modal()
  })
  ;

  $(di_dropdown).attr({
    class: "dropdown-cont",
    id: "user-dropdown",
  });

  $(button_dropdownMenuButton)
    .attr({
      class: "dropdown-btn basic-btn",
      id: "user-dropdown-btn",
    })
    .on("click", () => {
      if ($(div_menu).attr("class").includes("hidden-options")) {
        open_menu(div_menu);
      } else {
        close_menu(div_menu);
      }
    })
    .text("MENU");

  $(div_menu).attr({
    class: "hidden-options dropdowns-menu",
    id: "dropdown-menu",
  });

  options.map((opt, i) => {
    const option = $("<button/>");

    $(option)
      .text(opt.text)
      .appendTo(div_menu)
      .on("click",()=>{opt.cb(div_menu)})
      .attr({
        class: "dropdowns-option basic-btn",
        id: "dropdowns-" + i + "option",
      });
  });

  $(di_dropdown).appendTo(ui_container);
  $(button_dropdownMenuButton).appendTo(di_dropdown);
  $(div_menu).appendTo(di_dropdown);
};

{
  /* <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div> */
}
