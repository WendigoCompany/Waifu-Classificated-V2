const id_page = "index.html";

let user;
if (IS_DEV) {
    user = "wendigo"
    ssave("user", user)
    const user_data = sload("user");
} else {

}






$(document).ready(function () {
    build_waifus();
    aux_creation = null;
    build_user_ui();
    create_cards()
    create_paginator();
});