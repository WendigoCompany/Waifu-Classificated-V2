
const max_per_page_background  =6;

const build_modal_change_background = () => {
    const components = []

    modal_container.css({
        "display": "block"
    })

    // 0
    // components.push($("<div/>"))
    // // 1
    // components.push($("<div/>"))
    // // 2
    // components.push($("<button/>"))
    // // 3
    // components.push($("<div/>"))
    // // 4
    // components.push($("<div/>"))
    // // 5
    // components.push($("<h3/>"))
    // // 6
    // components.push($("<div/>"))
    // // 7
    // components.push($("<input/>"))
    // // 8
    // components.push($("<br/>"))
    // // 9
    // components.push($("<button/>"))
    // // 10
    // components.push($("<button/>"))



    // components[0].attr({ "id": "modal-cont", "class": "modal-cont-chnage-backg basic-modal" });
    // components[1].attr({ "id": "", "class": "modal-btn-cls-cont" });
    // components[2].attr({ "id": "", "class": "close-modal modal-btn-cls-cont basic-btn" });
    // components[3].attr({ "id": "", "class": "modal-content-cont" });
    // components[4].attr({ "id": "", "class": "modal-title-ctn" });
    // components[5].attr({ "id": "", "class": "modal-text-basic modal-text-chnage-name" });
    // components[6].attr({ "id": "", "class": "modal-input-ctn" });
    // components[7].attr({ "id": "modal-input", "class": "modal-input-basic modal-input-chnage-name", "type": "text" });
    // components[8];
    // components[9].attr({ "id": "", "class": "modal-btn-chnage-name btn btn-success" });
    // components[10].attr({ "id": "", "class": "close-modal modal-btn-chnage-name btn btn-danger" });



    // components[2].text("X")
    // components[5].text("How do you like to be called?")
    // components[9].text("CHANGE")
    // components[10].text("CANCEL")

    components[0].appendTo(modal_container);
    // components[1].appendTo(components[0])
    // components[2].appendTo(components[1])
    // components[3].appendTo(components[0])
    // components[4].appendTo(components[3])
    // components[5].appendTo(components[4])
    // components[6].appendTo(components[3])
    // components[7].appendTo(components[6])
    // components[8].appendTo(components[6])
    // components[9].appendTo(components[6])
    // components[10].appendTo(components[6])


    // components[9].on("click",()=>{
    //     const username = (components[7].val()).trim();
    //     if(username !== ""){
    //         sessionStorage.setItem("user", username)
    //         destroy_modal()
    //     }
    // })

    $(".close-modal").on("click", () => {
        destroy_modal()
    })
}








// $("<button/>").text("<").attr({
//     id: "",
//     class: "offert-pagbtn"
// }).appendTo("#offerts-pagin").on("click", () => {
//     // if(){

//     // }else{

//     // }
//     actual_page--
//     if (actual_page < 0) {
//         actual_page = Math.floor(list_offerts.length / max_per_page)        }
//     update_actions(list_offerts)
// })


// $("<button/>").text(">").attr({
//     id: "",
//     class: "offert-pagbtn"
// }).appendTo("#offerts-pagin").on("click", () => {
//     actual_page++
//     if (Math.floor(list_offerts.length / max_per_page) < actual_page) {
//         actual_page = 0
//     }
//     update_actions(list_offerts)
// })