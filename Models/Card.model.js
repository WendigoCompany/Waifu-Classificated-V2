
//BASIC MODEL
class W_Card  {
    // const img_container =$("<div/>").attr({"class" : "", "id": ``});

    create_structure() {
        const main_container = $("#card-container");
  
        const card_container = $("<div/>").attr({
            class: "row card-body",
            id: `card-container-${this.id}`,
        }).on("click", ()=>{
            ssave('waifu_id', this.id)
            window.location.href = "../Pages/gallery.html";
            move_to("gallery", "index.html")
        });
        const img_container = $("<div/>").attr({
            class: "col",
            id: `img-container-${this.id}`,
        });
        // const img = $("<img/>").attr({
        //     class: "card-img-rigth card-img",
        //     src: `${this.img_uri}`,
        //     id: "img-${this.id}",
        // });
        const img = $("<h3/>").attr({
            class: "card-img-rigth card-img",
            src: `${this.img_uri}`,
            id: `img-${this.id}`,
        }).css({
            "background-image" : `url("${this.img_uri}")`
        });
        
        const txt_container = $("<div/>").attr({
            class: "col-8",
            id: `txt-container-${this.id}`,
        });
        const card_title = $("<h3/>").attr({
            class: "text-center card-title",
            id: `card-title-${this.id}`,
        }).text(this.title);

        const description = $("<p/>").attr({
            class: "card-description",
            id: `description-${this.id}`,

        }).text(this.pre_desc);

        $(card_container).appendTo(main_container);

        $(img_container).appendTo(card_container);
        $(img).appendTo(img_container);
        $(txt_container).appendTo(card_container);
        $(card_title).appendTo(txt_container);
        $(description).appendTo(txt_container);
        $("<br/>").appendTo(main_container);
    }
}

// {/* <div class="card-container">
// <div class="row card-body">
//     <div class="col">
//         <img class="card-img-rigth card-img" src="../Media/PH/download.jfif" alt="Card image cap" />
//     </div>
//     <div class="col-8"> */}
//         <h3 class="text-center">ESTO ES UN CONTENDIO</h3>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//             amet necessitatibus alias? Saepe amet optio minima eaque nam,
//             natus commodi facere, quas adipisci iusto, odit ut voluptatem!
//             Mollitia, cum quod?
//         </p>
//     </div>
// </div>
