
const max_per_page = 4;
let actual_page = 0;




//AGREGAR BR A LAS OFFERTAS
// [].slice.call(document.getElementsByClassName("boton-act"));
const update_actions = (list_offerts) => {
    try {
        // const btns = [].slice.call(document.getElementsByClassName("offert-btn"));
        // for (let i = 0; i < btns.length; i++) {
        //     btns.remove()
            
        // }
        document.getElementById("offerts-cont").textContent = "";

        // $(".offert-btn").remove()
        document.getElementById("offerts-pagin").textContent = "";
        // $(".offert-btn").remove()
        // document.getElementById("offerts-pagin").textContent = "";
    } catch (error) {
    }
    for (let i = 0; i < list_offerts.length; i++) {
        if (Math.floor(i / max_per_page) === actual_page) {


            const div = $("<div/>").attr({
                id: "",
                class: "offert-btn"
            });
            const btn = $("<button/>");
            btn.text(list_offerts[i].name)
                .attr({
                    id: "",
                    class: "offert-btn-ele"
                })
                .on("click",()=>{
                    sessionStorage.setItem("sex-pose",list_offerts[i].name.toLowerCase() )
                    sessionStorage.setItem("minigame-id", list_offerts[i].minigame)
                    destroy_main_ui()
                    setTimeout(() => {
                        load_ui("sex")
                    }, 3000);
                })

            div.appendTo("#offerts-cont")
            btn.appendTo(div)
            if (list_offerts.length - 1 === i) {
                $("<br/>").appendTo("#offerts-cont")
            }
            // .appendTo("#offerts-cont")
        }


    }
    $("<button/>").text("<").attr({
        id: "",
        class: "offert-pagbtn"
    }).appendTo("#offerts-pagin").on("click", () => {
        // if(){

        // }else{

        // }
        actual_page--
        if (actual_page < 0) {
            actual_page = Math.floor(list_offerts.length / max_per_page)        }
        update_actions(list_offerts)
    })
    $("<button/>").text(">").attr({
        id: "",
        class: "offert-pagbtn"
    }).appendTo("#offerts-pagin").on("click", () => {
        actual_page++
        if (Math.floor(list_offerts.length / max_per_page) < actual_page) {
            actual_page = 0
        }
        update_actions(list_offerts)
    })

}


const show_actions = (list_offerts) => {
    $("#menu_btn").text(">>>")
    $("#action-cont").removeClass("hide_cont").addClass("show_cont");


    update_actions(list_offerts);

    // document.getElementById("action-cont").textContent = "";
}

const hide_actions = () => {
    $("#menu_btn").text("<<<")
    $("#action-cont").removeClass("show_cont").addClass("hide_cont");
    // const btns = [].slice.call(document.getElementsByClassName("offert-btn"));
    // // console.log(btns.length);
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].remove()
    // }
    document.getElementById("offerts-cont").textContent = "";

    // $(".offert-btn").remove()
    document.getElementById("offerts-pagin").textContent = "";
}

const build_actions = () => {
    const container = $("#action-cont")
    let waifu_selected = waifus.filter(w => w.id === sload("waifu_id"))[0];
    if (waifu_selected == undefined) {
        move_to("main", id_page)
    }

    $("#menu_btn").on("click", () => {
        if (document.getElementById("action-cont").className.includes("hide_cont")) {
            show_actions(waifu_selected.offerts)
        } else {
            hide_actions()
        }
    })
}



const build_basics_action =()=>{
    const div_cont = $("#choise-cont");

    const div_action = $("<div/>").attr({id: "action-cont", class : "action-cont hide_cont"});
    div_action.appendTo(div_cont);

    const btn_menu = $("<btn/>").attr({id: "menu_btn", class : "menu_btn"}).text("<<<");
    $(btn_menu).appendTo(div_action)

    const div_offer = $("<div/>").attr({id: "offerts-cont", class : "offerts-cont"});
    $(div_offer).appendTo(div_action)

    const div_pag = $("<div/>").attr({id: "offerts-pagin", class : "offerts-pagin"});
    div_pag.appendTo(div_cont);

    build_actions();

}



const build_action_ui = () => {
    build_basics_action();
}

