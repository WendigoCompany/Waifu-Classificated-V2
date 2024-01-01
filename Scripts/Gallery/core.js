const id_page = "gallery.html";

const user_data = sload("user");
// build_user_ui();

// proyect_dir  + 
let worker_selected




$(document).ready(function () {
    const selected_id = sload("waifu_id");
    build_only_waifu(selected_id);
    build_user_ui();
    aux_creation = null;
    try {

        // const worker_selected = waifus.filter(wid => wid.id == selected_id)[0];
        worker_selected = waifus[0];

        if (worker_selected === undefined) {
            sdel("waifu_id");
            move_to("main", id_page);
        }
        show_gallery(worker_selected)

    } catch (error) {
        console.log(error);
        // move_to("main", id_page);
    }


});

