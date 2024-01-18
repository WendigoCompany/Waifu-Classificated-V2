let minigame_01_params = {
    start: 2,
    max: 82,
    speed: 1.2,
    counter_action: 0,
    points: 0,
    medium: 74,
    perfect: 78,
    late: 88,
    lose: 92,
    actions_showed: [],


}



minigame_01_params.onepercent = (minigame_01_params.max * minigame_01_params.speed) / 100;
minigame_01_params.action_speed = 200 / minigame_01_params.speed 



const build_minigame_01 = () => {
    const container = $("#minigame-cont");
    const components = []

    // 1
    components.push($("<div/>"))
    // 2
    components.push($("<div/>"))

    components[0].attr({ "id": "minigame-1-bar", "class": "minigame-1-bar" });
    components[1].attr({ "id": "minigame-1-input", "class": "minigame-1-input" });

    components[0].appendTo(container);
    components[1].appendTo(components[0]);


}

const sub_poinst_minigame_01= (amm) => {
        if (minigame_01_params.points > 0) {
            minigame_01_params.points -= amm
        }
        update_bar(minigame_01_params.points)
    }


const auto_add_minigame_01 = (result, interval, id) => {
    clearInterval(interval)

    document.getElementById(id).style.opacity = 0;

    setTimeout(() => {
        document.getElementById(id).remove()
    }, 200);
    minigame_01_params.actions_showed = minigame_01_params.actions_showed.filter(arr => arr.id !== id);
    switch (result) {
        case "early":
            minigame_01_params.points += 4
            break;

        case "perfect":
            minigame_01_params.points += 10
            break;
        case "late":
            minigame_01_params.points += 3
            break;
        case "lose":
            minigame_01_params.points += 1
            break;

        default:
            break;
    }

    update_bar(minigame_01_params.points)
}




const start_game = () => {
    const action = $("<div/>");
    const container = $("#minigame-1-bar");

    $(action).appendTo(container);
    $(action).attr({
        "class": "minigame-1-action",
        "id": "action-" + minigame_01_params.counter_action,
    });

    const options = ["down","left","right","up"];
    const random_order = get_random({max : options.length});
    const url = "../Media/icons/arrow_mini_" +  options[random_order] + ".png"
    $(action).css({
        "backgroundImage" : `url("${url}")`
    })

    minigame_01_params.actions_showed.push({ start: minigame_01_params.start, action: options[random_order], id: $(action).attr('id') })
    let inside_counter = minigame_01_params.counter_action;

    
    minigame_01_params.actions_showed[minigame_01_params.actions_showed.length - 1].interval = setInterval(() => {

        const selected = minigame_01_params.actions_showed.filter(arr => arr.id == "action-" + inside_counter)[0];


        const index = minigame_01_params.actions_showed.indexOf(selected);

        minigame_01_params.actions_showed[index].start += minigame_01_params.onepercent;


        if (minigame_01_params.actions_showed[index].start < minigame_01_params.lose) {
            document.getElementById(minigame_01_params.actions_showed[index].id).style.top = `${minigame_01_params.actions_showed[index].start}%`;
        } else {
            auto_add_minigame_01('lose', minigame_01_params.actions_showed[index].interval, minigame_01_params.actions_showed[index].id)
        }
    }, minigame_01_params.action_speed );
    minigame_01_params.counter_action++
}



const validate_action_minigame_01 = (key) => {
    let selected;
    document.getElementById("minigame-1-input").style.background = "#e95555";
    selected = minigame_01_params.actions_showed.filter(coin => coin.start >= minigame_01_params.medium && coin.start <= minigame_01_params.lose)[0]
    if (selected !== undefined) {

        if (selected.start >= minigame_01_params.medium && selected.start < minigame_01_params.perfect) {
            //EARLY
            if (key == selected.action) {
                auto_add_minigame_01('early', selected.interval, selected.id)
            } else {
                auto_add_minigame_01('lose', selected.interval, selected.id)
            }
            clearInterval(selected.interval)


        } else if (selected.start >= minigame_01_params.perfect && selected.start < minigame_01_params.late) {
            //PERFECT
            if (key == selected.action) {
                auto_add_minigame_01('perfect', selected.interval, selected.id)
            } else {
                auto_add_minigame_01('lose', selected.interval, selected.id)
            }
            clearInterval(selected.interval)

        } else if (selected.start >= minigame_01_params.late && selected.start < minigame_01_params.lose) {
            //LATE
            if (key == selected.action) {
                auto_add_minigame_01('late', selected.interval, selected.id)
            } else {
                auto_add_minigame_01('lose', selected.interval, selected.id)
            }
            clearInterval(selected.interval)

        }
        else {
            //LOSE
            auto_add_minigame_01('lose', selected.interval, selected.id)

            clearInterval(selected.interval)

        }
    } else {
        sub_poinst_minigame_01(1)
    }

    setTimeout(() => {
        document.getElementById("minigame-1-input").style.background = "transparent";
    }, 100);
}



const increment_dificulty_minigame_01=()=>{
    
}

const load_functionality_minigame_01 = (key) => {

    // const random_movement = get_random({min: 2000 ,max : 10000 / minigame_01_params.speed});


    setTimeout(() => {
        setInterval(() => {
            start_game() 
        }, 5000);   
    }, 500);
}

const user_input_minigame_01 =(e)=>{
    const sleep_time = 50;
    let sleep = {
        w: false,
        a: false,
        d: false,
        s: false,
    }

    if (!sleep.d) {
        validate_action_minigame_01("right")
        sleep.d = true
        setTimeout(() => {
            sleep.d = false
        }, sleep_time);
    }

    // switch (e.key.toLowerCase()) {
    //     case "arrowup":
    //     case "w":
    //         if (!sleep.w) {
    //             validate_action_minigame_01("up")
    //             sleep.w = true
    //             setTimeout(() => {
    //                 sleep.w = false
    //             }, sleep_time);
    //         }
    //         break;

    //     case "arrowleft":
    //     case "a":
    //         if (!sleep.a) {
    //             validate_action_minigame_01("left")
    //             sleep.a = true
    //             setTimeout(() => {
    //                 sleep.a = false
    //             }, sleep_time);
    //         }
    //         break;

    //     case "arrowright":
    //     case "d":
    //         if (!sleep.d) {
    //             validate_action("right")
    //             sleep.d = true
    //             setTimeout(() => {
    //                 sleep.d = false
    //             }, sleep_time);
    //         }
    //         break;


    //     case "arrowdown":
    //     case "s":
    //         if (!sleep.s) {
    //             validate_action("down")
    //             sleep.s = true
    //             setTimeout(() => {
    //                 sleep.s = false
    //             }, sleep_time);
    //         }
    //         break;
    //     default:
    //         break;
    // }
}


// const load_functionality_minigame_00 = (speed) => {
//     const minigame_order = document.getElementById("minigame-0-order");

//     const options = ["down","left","right","up"];

//     interval_minigame = setInterval(() => {
//         const index = get_random({max : options.length});
//         minigame_00_params.order =options[index];
//         let url = "../Media/icons/arrow_mini_" +  options[index] + ".png"
//         minigame_order.style.backgroundImage =`url("${url}")`
//     }, speed || 5000);

//     interval_minigame2=  setInterval(() => {
//         auto_add_minigame_00()
//     }, 1000);

//     // background-image: url("../../Media/icons/arrow_mini_right.png");
// }

// const update_bar =()=>{
//     document.getElementById("stamina-progress").style.height = minigame_00_params.points + "%";
// }

// const user_input_minigame_00 = (key) => {
//     if(key == minigame_00_params.order){
//         if(minigame_00_params.points >= 0){
//             minigame_00_params.points -= .3
//         }
//     }else{
//         minigame_00_params.points += 2
//     }

//     update_bar()
// }




