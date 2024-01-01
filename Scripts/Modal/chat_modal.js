const build_modal_chat_modal = () => {
    const components = []

    modal_container.css({
        "display": "block"
    })


    // // 0
    components.push($("<div/>"))
    // // 1
    components.push($("<div/>"))
    // // 2
    components.push($("<button/>"))
    // // 3
    components.push($("<div/>"))
    // // 4
    components.push($("<img/>"))
    // // 5
    components.push($("<div/>"))
    // // 6
    components.push($("<h3/>"))
    // // 7
    components.push($("<input/>"))
    // // 8
    components.push($("<div/>"))
    // // 9
    components.push($("<button/>"))
    // // 10
    components.push($("<button/>"))



    components[0].attr({ "id": "modal-cont", "class": "modal-cont-chat basic-modal" });
    components[1].attr({ "id": "", "class": "modal-btn-cls-cont" });
    components[2].attr({ "id": "", "class": "close-modal modal-btn-cls-cont basic-btn" });
    components[3].attr({ "id": "", "class": "text-center" });
    components[4].attr({ "id": "", "class": "modal-img-chat", "src": worker_selected.img_uri});
    components[5].attr({ "id": "", "class": "" });
    components[6].attr({ "id": "chat-panel", "class": "modal-chat-hist" });
    components[7].attr({ "id": "modal-chat-inp", "class": "modal-chat-inp", "type": "text", "placeholder": "TEXT ME <3" });
    components[8].attr({ "id": "", "class": "modal-chat-btns-cont text-center" });
    components[9].attr({ "id": "chat-btn-int-1", "class": "modal-chat-btns btn-success-modal" });
    components[10].attr({ "id": "chat-btn-int-2", "class": "modal-chat-btns btn-danger-modal" });

 

    components[2].text("X")
    components[9].text("SEND")
    components[10].text("EXIT")

    components[0].appendTo(modal_container);
    components[1].appendTo(components[0])
    components[2].appendTo(components[1])

    components[3].appendTo(components[0])
    components[4].appendTo(components[3])

    components[5].appendTo(components[0])
    components[6].appendTo(components[5])
    components[7].appendTo(components[5])
    components[8].appendTo(components[5])

    components[9].appendTo(components[8])
    components[10].appendTo(components[8])



    components[9].on("click",()=>{
        get_user_input(components[7].val())
    })

    components[10].on("click",()=>{
        destroy_modal()
    })

    $(".close-modal").on("click", () => {
        destroy_modal()
    })
}



$(document).ready(function () {
    // const chat_btns = [].slice.call(document.getElementsByClassName("chat-btn"));
    // console.log(document.getElementsByClassName("chat-btn"));
    // console.log(chat_btns);
    // console.log(chat_btns.length);
    // for (let i = 0; i < chat_btns.length; i++) {
    //     console.log(chat_btns[i]);
    //     chat_btns[i].onclick=()=>{
    //         build_modal_chat_modal()
    //     }

    // }
    // build_modal_chat_modal()
    document.getElementById("chat-btn-1").onclick = () => {
        build_modal_chat_modal()
    }
});




//     <button class="modal-chat-btns btn-success-modal ">SEND</button>
//     <button class="modal-chat-btns btn-danger-modal">EXIT</button>
//   </div>
// </div>
// </div>















// <div>
//   <h3 class="modal-chat-hist">ahisdgyaugsy8ugda</h3>
//   <input type="text" name="" class="modal-chat-inp" placeholder="TEXT ME <3" id="">
//   <div class="modal-chat-btns-cont text-center">
//     <button class="modal-chat-btns btn-success-modal ">SEND</button>
//     <button class="modal-chat-btns btn-danger-modal">EXIT</button>
//   </div>
// </div>
// </div>