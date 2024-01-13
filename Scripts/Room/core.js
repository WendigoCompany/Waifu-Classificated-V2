const id_page = "room.html";
let actual_container = "choise";




let room_txt_interval;

const get_random_txt = ({ min = 0, max }) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const show_text = (txt_arr, disapear) => {
    const dialog_cont = document.getElementById("dialog-cont");
    const dialog_txt = document.getElementById("dialog-txt");
    dialog_cont.style.display = "block";
    const txt = txt_arr[get_random_txt({ max: txt_arr.length })];
    const max = txt.length;
    // dialog_txt.innerText = txt_arr[get_random_txt({max: txt_arr.length})];
    let ind = 0;

    setTimeout(() => {
        dialog_cont.style.opacity = 1;
        setTimeout(() => {
            room_txt_interval = setInterval(() => {
                ind++
                dialog_txt.innerText = txt.substring(0, ind);
                if (max === ind) {
                    clearInterval(room_txt_interval)
                }
            }, 25);;
        }, 100);
    }, 500);


    setTimeout(() => {
        hide_text()
    }, disapear);

};
const hide_text = () => {
    const dialog_cont = document.getElementById("dialog-cont");
    const dialog_txt = document.getElementById("dialog-txt");
    dialog_cont.style.opacity = 0,
        setTimeout(() => {
            dialog_txt.innerText = "";
            dialog_cont.style.display = "none";
        }, 500);
    //     dialog-cont
    // dialog-txt
};



const build_main_ui = () => {
    build_basics_action()


    // Loading the spray preselected
    if (sessionStorage.getItem("spray") == null) {
        sessionStorage.setItem("spray", "prev_0.png")
        document.getElementById("spray-img").src = `${base_proyect}/Media/${worker_selected.name}/room/prev_0.png`;
    } else {
        document.getElementById("spray-img").src = `${base_proyect}/Media/${worker_selected.name}/room/${sessionStorage.getItem("spray")}`;

    }
    setTimeout(() => {
        document.getElementById("spray-img").style.opacity = 1;
    }, 1000);


    setTimeout(() => {
        document.getElementById("room-cont").style.opacity = 0;
        document.getElementById("room-loby-cont").style.opacity = 1;
    }, 3000);
}






const load_ui = (ui) => {
    switch (ui) {
        case "sex":
            build_sex_params()
                .then(() => {
                    sex_scene_manager()
                    setTimeout(() => {
                        load_minigame()
                    }, 2000);
                    document.getElementById("room-cont").style.opacity = 1;
                    document.getElementById("room-loby-cont").style.opacity = 0;
                })
                .catch();

            break;
        case "loby":
        default:
            build_main_ui()
            break;
    }
}

const load_sex_scene = () => {
    document.getElementById("room-loby-cont").remove()
}

$(document).ready(function () {
    const selected_id = sload("waifu_id");
    build_only_waifu(selected_id);


    aux_creation = null;
    try {
        worker_selected = waifus[0];
        load_ui("loby")
        // const worker_selected = waifus.filter(wid => wid.id == selected_id)[0];
        // worker_selected = waifus[0];

        // if (worker_selected === undefined) {
        //     sdel("waifu_id");
        //     move_to("main", id_page);
        // }
        // show_gallery(worker_selected)

    } catch (error) {
        console.log(error);
        // move_to("main", id_page);
    }

    // let count = 0;

    // setInterval(() => {
    //     document.getElementById("spray-img").src = "../Media/kurumi_tokisaki/room/prev_"+ count+ ".png";
    //     count++ 
    // }, 2000);}



    // Loading the background preselected


    // document.getElementById("room-loby-cont").style.opacity = 1;
    // document.getElementById("back-btn").style.opacity = 1;




    // Showing welcome txt:
    // show_text(worker_selected.room_dialogs.default, 5000)

    if (sessionStorage.getItem("bg") == null) {
        document.getElementById("background-img").src = `${base_proyect}/Media/room_backgrounds/default.png`;
    } else {
        document.getElementById("background-img").src = `${base_proyect}/Media/room_backgrounds/${sessionStorage.getItem("bg")}`;

    }
    setTimeout(() => {
        document.getElementById("user-interactions").style.opacity = 1;
    }, 3000);

    window.addEventListener("keydown", (e) => {
        switch (e.key.toLowerCase()) {
            case "w":
            case "arrowup":
                load_key_minigame("up")
                break;

            case "a":
            case "arrowleft":
                load_key_minigame("left")
                break;

            case "d":
            case "arrowright":
                load_key_minigame("right")
                break;

            case "s":
            case "arrowdown":
                load_key_minigame("down")
                break;
        }
    })

});


// arrowup
// core.js:164 arrowleft
// core.js:164 arrowright
// core.js:164 arrowdown

const destroy_main_ui = () => {
    document.getElementById("choise-cont").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("choise-cont").textContent = "";
    }, 1500);

    setTimeout(() => {
        document.getElementById("spray-img").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("spray-img").src = "";
        }, 1700);
    }, 700);

    // RECALL MAINUI
    // setTimeout(() => {
    //     load_ui("loby")
    //     document.getElementById("choise-cont").style.opacity =1;        
    // }, 10000);






}











