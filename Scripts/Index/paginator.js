


const max_per_page = 4;
const max_pages = Math.floor(waifus.length / max_per_page) + 1;
let actual_page = parseInt(sessionStorage.getItem("actual_page"));



const move_paginator = (page) => {
    if (typeof page == "string") {
        if (page == "+") {
            if (actual_page < max_pages) {
                sessionStorage.setItem("actual_page", actual_page + 1)
            }
        } else {
            if (actual_page > 1) {
                sessionStorage.setItem("actual_page", actual_page - 1)
            }
        }
    } else {
        sessionStorage.setItem("actual_page", parseInt(page))
    }
    window.location.reload()
};

const paginator_move_btns = () => {
    return [
        $("<button/>")
            .text("<")
            .attr("class", "pag-btn basic-btn")
            .on("click", () => {
                move_paginator("-");
            }),
        $("<button/>")
            .text(">")
            .attr("class", "pag-btn basic-btn")
            .on("click", () => {
                move_paginator("+");
            }),
    ];
};
const paginator_btns = (i) => {
    return $("<button/>")
        .text(i)
        .attr("class", "pag-btn basic-btn")
        .on("click", () => {
            move_paginator(i);
        });
};
const paginator_elipsis = () => {
    return $("<h3/>").text("...").attr("class", "pag-elp");
};

const create_paginator = () => {
    const container = $("#paginator");

    // $("<button/>")
    //     .text("<")
    //     .attr("class", "pag-btn")
    //     .on("click", () => {
    //         alert("pepito");
    //     })

    //     .appendTo(container);

    // if (max_pages >= max_per_page + max_pages) {
    //     $("<button/>")
    //     .text("...")
    //     .attr("class", "pag-btn")
    //     .on("click", () => {
    //         alert("pepito");
    //     })

    //     .appendTo(container);
    // }

    // for (let i = actual; i <= max_per_page; i++) {
    //     $("<button/>")
    //         .text(i)
    //         .attr("class", "pag-btn")
    //         .on("click", () => {
    //             alert("pepito");
    //         })
    //         .appendTo(container);

    // }

    // if (max_pages < max_per_page + max_pages) {

    // }

    // $("<button/>")
    //     .text(">")
    //     .attr("class", "pag-btn")
    //     .on("click", () => {
    //         alert("pepito");
    //     })
    //     .appendTo(container);

    if (max_per_page >= max_pages) {
        for (let i = 1; i <= max_pages; i++) {
            paginator_btns(i).appendTo(container);
        }
    } else {
        const move_btns = paginator_move_btns();
        move_btns[0].appendTo(container);

        if (actual_page >= 1 && actual_page < max_per_page) {
            for (let i = 1; i <= max_per_page; i++) {
                paginator_btns(i).appendTo(container);
            }
            paginator_elipsis().appendTo(container);
            paginator_btns(max_pages).appendTo(container);

        } else if (actual_page >= max_per_page && actual_page <= max_pages - max_per_page) {
            paginator_elipsis().appendTo(container);
            for (let i = actual_page - 1; i <= actual_page + max_per_page - 1; i++) {
                paginator_btns(i).appendTo(container);
            }
            paginator_elipsis().appendTo(container);
            paginator_btns(max_pages).appendTo(container);
        } else {
            paginator_elipsis().appendTo(container);
            for (let i = max_pages - max_per_page; i <= max_pages; i++) {
                paginator_btns(i).appendTo(container);
            }
        }
        move_btns[1].appendTo(container);
    }
};

