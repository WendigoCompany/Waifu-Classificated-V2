const id_page = "room.html";
let actual_container = "choise";


ssave("waifu_id", 0)
ssave("page_cont", "build")

const destroy_page =()=>{
    $("#" + actual_container + "-cont").remove(); 
}

const build_page =()=>{
    change_page()
}
// build_actions()

const change_page = () => {
    switch (actual_container) {
        case "choise":
            build_basics_action()
            break;
        case "room":
    
            break;

        default:
            break;
    }
}

// hide_page("choise-cont")



// change_page()
// setTimeout(() => {
    
//     destroy_page()
//     actual_container= "room";
//     build_page();
// }, 3000);
change_page()




{/* <div id="" class="">
<button id="" class=""><<<</button>
<div class="" id="">

</div>
<div class="offerts-pagin" id="">

</div>
<div>

</div>
</div> */}
