let minigame_00_params = {
    points: 0
}

const build_minigame_00 = () => {
    const container = $("#minigame-cont");
    const components = []

    // 1
    components.push($("<div/>"))

    components[0].attr({ "id": "minigame-0-order", "class": "" });

    components[0].appendTo(container);


}



const auto_add_minigame_00 = () => {
    minigame_00_params.points += .5
    update_bar()
}

const load_functionality_minigame_00 = (speed) => {
    const minigame_order = document.getElementById("minigame-0-order");

    const options = ["down","left","right","up"];

    interval_minigame = setInterval(() => {
        const index = get_random({max : options.length});
        minigame_00_params.order =options[index];
        let url = "../Media/icons/arrow_mini_" +  options[index] + ".png"
        minigame_order.style.backgroundImage =`url("${url}")`
    }, speed || 5000);

    interval_minigame2=  setInterval(() => {
        auto_add_minigame_00()
    }, 1000);

    // background-image: url("../../Media/icons/arrow_mini_right.png");
}

const update_bar =()=>{
    document.getElementById("stamina-progress").style.height = minigame_00_params.points + "%";
}

const user_input_minigame_00 = (key) => {
    if(key == minigame_00_params.order){
        if(minigame_00_params.points >= 0){
            minigame_00_params.points -= .3
        }
    }else{
        minigame_00_params.points += 2
    }

    update_bar()
}




