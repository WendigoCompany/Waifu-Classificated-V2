
const show_gallery = (worker_selected) => {
    // 
    $("#img-thumb").attr({
        "src": worker_selected.img_uri
    })

    const cont = $("#gallery-cont")


    // $("<img/>").attr({
    //     "class": "img-gallery",
    //     "src": worker_selected.img_uri,
    // })
    //     .on("click", () => {
    //         $(".big-img-cont").addClass("show-cont").removeClass("hide-cont")
    //         $("#big-img").attr({"src": worker_selected.img_uri})
    //     })
    //     .appendTo(cont);




    for (let i = 0; i < worker_selected.gallery; i++) {
        const url = proyect_dir + params.media + worker_selected.name.toLowerCase() + "/" + params.gallery + (i + 1) + ".png";
        $("<h3/>").attr({
            "class": "img-gallery",
            // "src": proyect_dir + params.media + worker_selected.name.toLowerCase() + "/" + params.gallery + (i + 1) + ".png",
        })
            .css({
                "background-image": `url("${url}")`
            })
            .on("click", () => {
                $(".big-img-cont").addClass("show-cont").removeClass("hide-cont")
                $("#big-img").attr({ "src": proyect_dir + params.media + worker_selected.name.toLowerCase() + "/" + params.gallery + (i + 1) + ".png" })
            })
            .appendTo(cont);

    }

    $(".big-img-cont").on("click", () => {
        if (!document.getElementsByClassName("big-img-cont")[0].className.includes("hide-cont")) {
            $(".big-img-cont").addClass("hide-cont").removeClass("show-cont");
        }
    })


    // $("#gallery-desc").text(worker_selected.description)

    document.getElementById("gallery-desc").innerHTML = worker_selected.description;


    $("#hire-service").on("click", () => {


        let name = (worker_selected.name.replace("_", " ")).split(" ");
        let aux = "";
        name.map(n => aux += (n.charAt(0)).toUpperCase() + n.substring(1, n.length) + " ")
        name = aux
        const confir = confirm("Are you sure you want to hire to " + name)

        if(confir){
            window.location.href ="./room.html";
        }
    })
}