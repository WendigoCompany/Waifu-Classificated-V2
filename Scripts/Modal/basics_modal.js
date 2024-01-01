const modal_container = $("#modal")



const destroy_modal = () => {
    document.getElementById("modal").textContent = "";
    modal_container.css({
        "display": "none"
    })
}
