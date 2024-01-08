const id_page = "room.html";
let actual_container = "choise";


// ssave("waifu_id", 0)
// ssave("page_cont", "build")

// const destroy_page =()=>{
//     $("#" + actual_container + "-cont").remove(); 
// }

// const build_page =()=>{
//     change_page()
// }
// build_actions()

// const change_page = () => {
//     switch (actual_container) {
//         case "choise":
//             build_basics_action()
//             break;
//         case "room":

//             break;

//         default:
//             break;
//     }
// }

// hide_page("choise-cont")



// change_page()
// setTimeout(() => {

//     destroy_page()
//     actual_container= "room";
//     build_page();
// }, 3000);




{/* <div id="" class="">
<button id="" class=""><<<</button>
<div class="" id="">

</div>
<div class="offerts-pagin" id="">

</div>
<div>

</div>
</div> */}

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
    dialog_cont.style.opacity =0,
    setTimeout(() => {
        dialog_txt.innerText = "";
        dialog_cont.style.display = "none";
    }, 500);
    //     dialog-cont
    // dialog-txt
};


// const get_random_options = ({ min = 0, max }) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }





// let interval_text
// const show_text = (text, panel) => {

//     const button1 = document.getElementById("chat-btn-int-1");
//     const button2 = document.getElementById("chat-btn-int-2");
//     button1.disabled = true;
//     button2.disabled = true;

//     let ind = 0;
//     const max = text.length;
//     interval_text = setInterval(() => {
//         ind++
//         panel.innerText = text.substring(0, ind);
//         if (max === ind) {
//             clearInterval(interval_text)
//             button1.disabled = false;
//             button2.disabled = false;
//         }
//     }, 50);;
// }




$(document).ready(function () {
    const selected_id = sload("waifu_id");
    build_only_waifu(selected_id);


    aux_creation = null;
    try {
        worker_selected = waifus[0];
        build_basics_action()
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
    if (sessionStorage.getItem("bg") == null) {
        document.getElementById("background-img").src = `${base_proyect}/Media/room_backgrounds/default.png`;
    } else {
        document.getElementById("background-img").src = `${base_proyect}/Media/room_backgrounds/${sessionStorage.getItem("bg")}`;

    }

    // Loading the spray preselected
    if (sessionStorage.getItem("spray") == null) {
        document.getElementById("spray-img").src = `${base_proyect}/Media/${worker_selected.name}/room/prev_0.png`;
    } else {
        document.getElementById("spray-img").src = `${base_proyect}/Media/${worker_selected.name}/room/${sessionStorage.getItem("spray")}`;

    }

    // Showing welcome txt:
    show_text(worker_selected.room_dialogs.default, 5000)


});

