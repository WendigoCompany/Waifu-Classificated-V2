
const max_per_page_clothes = 6;

let clothes_containers = [];



const build_modal_change_clothes = () => {
  const components = []
  const paginator_params = {}

  modal_container.css({
    "display": "block"
  })

  // 0
  components.push($("<div/>"))
  // // 1
  components.push($("<div/>"))
  // // 2
  components.push($("<button/>"))
  // // 3
  components.push($("<div/>"))
  // // 4
  components.push($("<div/>"))
  // // 5
  components.push($("<h3/>"))
  // // 6
  components.push($("<h3/>"))
  // // 7
  components.push($("<h3/>"))
  // // 8
  components.push($("<br/>"))
  // // 9
  components.push($("<h3/>"))
  // // 10
  components.push($("<h3/>"))
  // // 11
  components.push($("<h3/>"))
  // // 12
  components.push($("<br/>"))
  // // 13
  components.push($("<div/>"))
  // // 14
  components.push($("<button/>"))
  // // 15
  components.push($("<button/>"))


  clothes_containers = [
    components[5],
    components[6],
    components[7],
    components[9],
    components[10],
    components[11],
  ];

  components[0].attr({ "id": "modal-cont", "class": "modal-cont-chnage-backg modal-cont-chnage-clothes basic-modal" });
  components[1].attr({ "id": "", "class": "" });
  components[2].attr({ "id": "", "class": "close-modal modal-btn-cls-cont basic-btn" });
  components[3].attr({ "id": "", "class": "modal-backg-con" });
  components[4].attr({ "id": "", "class": "" });
  components[5].attr({ "id": "bg-prv-1", "class": "modal-clothes-img" });
  components[6].attr({ "id": "bg-prv-2", "class": "modal-clothes-img" });
  components[7].attr({ "id": "bg-prv-3", "class": "modal-clothes-img" });
  components[9].attr({ "id": "bg-prv-4", "class": "modal-clothes-img" });
  components[10].attr({ "id": "bg-prv-5", "class": "modal-clothes-img" });
  components[11].attr({ "id": "bg-prv-6", "class": "modal-clothes-img" });
  components[13].attr({ "id": "modal-paginator", "class": "text-center" });

  components[14].attr({ "id": "modal-pag-btn-back", "class": "modal-pag-btn" });
  components[15].attr({ "id": "modal-pag-btn-next", "class": "modal-pag-btn" });



  // components[6].attr({ "id": "", "class": "modal-input-ctn" });
  // components[7].attr({ "id": "modal-input", "class": "modal-input-basic modal-input-chnage-name", "type": "text" });
  // components[8];
  // components[9].attr({ "id": "", "class": "modal-btn-chnage-name btn btn-success" });
  // components[10].attr({ "id": "", "class": "close-modal modal-btn-chnage-name btn btn-danger" });



  components[2].text("X")
  components[14].text("<")
  components[15].text(">")

  components[0].appendTo(modal_container);
  components[1].appendTo(components[0])
  components[2].appendTo(components[1])
  components[3].appendTo(components[0])
  components[4].appendTo(components[3])
  components[5].appendTo(components[4])
  components[6].appendTo(components[4])
  components[7].appendTo(components[4])
  components[8].appendTo(components[4])
  components[9].appendTo(components[4])
  components[10].appendTo(components[4])
  components[11].appendTo(components[4])
  components[12].appendTo(components[3])
  components[13].appendTo(components[3])
  components[14].appendTo(components[13])
  components[15].appendTo(components[13])

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


  get_clothes().then(res => {
    paginator_params.max = Math.floor(res.length / max_per_page_clothes);
    paginator_params.min = 0
    paginator_params.actual = 0
    add_paginator_events_clothes(paginator_params, res)
    show_previews_clothes(paginator_params, res);



  }
  ).catch(err => {
    console.log(err);
  })
}

const show_previews_clothes = (params, preview_arr) => {
  show_preview_img_clothes(clothes_containers[0], preview_arr[(params.actual * max_per_page_clothes) + 0])
  show_preview_img_clothes(clothes_containers[1], preview_arr[(params.actual * max_per_page_clothes) + 1])
  show_preview_img_clothes(clothes_containers[5], preview_arr[(params.actual * max_per_page_clothes) + 5])
  show_preview_img_clothes(clothes_containers[2], preview_arr[(params.actual * max_per_page_clothes) + 2])
  show_preview_img_clothes(clothes_containers[3], preview_arr[(params.actual * max_per_page_clothes) + 3])
  show_preview_img_clothes(clothes_containers[4], preview_arr[(params.actual * max_per_page_clothes) + 4])
}

const add_paginator_events_clothes = (params, preview_arr) => {

  $("#modal-pag-btn-back").on("click", () => {
    if (params.actual - 1 < 0) {
      params.actual = params.max
    } else {
      params.actual--;
    }
    show_previews_clothes(params, preview_arr)
  })
  $("#modal-pag-btn-next").on("click", () => {
    if (params.actual + 1 > params.max) {
      params.actual = params.min
    } else {
      params.actual++;
    }
    show_previews_clothes(params, preview_arr)
  })

}

const show_preview_img_clothes = (element, preview_img) => {

  if (preview_img === undefined) {
    element.on("click", () => {

    })

    $(element).css({
      "backgroundImage": `url("${base_proyect}/Media/icons/no img .png")`
    })
  } else {
    element.on("click", () => {
      if (sessionStorage.getItem("pose") == null) {
        sessionStorage.setItem("spray", preview_img)
        document.getElementById("spray-img").src = `${base_proyect}/Media/${worker_selected.name}/room/${preview_img}`;
      } else {

      }
    })
    $(element).css({
      "backgroundImage": `url("${base_proyect}/Media/${worker_selected.name}/room/${preview_img}")`
    })

  }
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

/*
   ** <div id="modal-cont" class="modal-cont-chnage-backg basic-modal">
**        <div class="">
 **         <button class="close-modal modal-btn-cls-cont basic-btn">X</button>
 **       </div>
 **       <br>


      **  <div class="modal-backg-cont">
        **  <div>
          **  <h3 class="modal-backg-img" id="bg-prv-1"></h3>
          **  <h3 class="modal-backg-img" id="bg-prv-2"></h3>
          **  <h3 class="modal-backg-img" id="bg-prv-3"></h3>
        **  </div>
        <br>
        <div>
          <h3 class="modal-backg-img" id="bg-prv-4"></h3>
          <h3 class="modal-backg-img" id="bg-prv-5"></h3>
          <h3 class="modal-backg-img" id="bg-prv-6"></h3>
        </div>
      </div>
      <br>
      <div id="modal-paginator" class="text-center">
        <button class="modal-pag-btn"><</button>
        <button class="modal-pag-btn">></button>
      </div>
    </div>


  */


$("#chg-clothes").on("click", () => {
  build_modal_change_clothes()
})
