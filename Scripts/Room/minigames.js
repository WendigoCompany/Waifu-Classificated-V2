

let functionality_cb;
let interval_minigame
let interval_minigame2
const load_minigame = () => {
    sessionStorage.removeItem("mini-stade");

    document.getElementById("minigame-statics").style.opacity = 1
    document.getElementById("help-btn").onclick = () => {

    }
    document.getElementById("auto-btn").onclick = () => {
        const stade = JSON.parse(sessionStorage.getItem("mini-stade"));
        if (stade == null || stade == false) {
            document.getElementById("auto-btn").style.backgroundColor = "#e4a5e3";
            sessionStorage.setItem("mini-stade", true)
        } else {
            document.getElementById("auto-btn").style.backgroundColor = "#824e81";
            sessionStorage.setItem("mini-stade", false)
        }
    }

    load_minigame_ui()
}

const load_minigame_ui = () => {
    const minigame_id = parseInt(sessionStorage.getItem("minigame-id"))
    sessionStorage.setItem("minigame-on", true)
    switch (minigame_id) {
        case 0:
            build_minigame_00()
            load_functionality_minigame_00(5000)

            functionality_cb = user_input_minigame_00
            break;

        case 1:
            build_minigame_01()
            load_functionality_minigame_01()
            functionality_cb = user_input_minigame_01
            break;
            
        default:
            build_minigame_default()
            load_functionality_minigame_default()
            functionality_cb =()=>{}
            break;
    }

    // if(){

    // }else{

    // }

}





const load_key_minigame = (key) => {
    const minigame = JSON.parse(sessionStorage.getItem("minigame-on"));

    if (minigame) {
        functionality_cb(key)
    }
}



const destroy_minigame = () => {
    document.getElementById("minigame-cont").textContent = "";
    sessionStorage.setItem("minigame-on", false)

}

load_minigame()