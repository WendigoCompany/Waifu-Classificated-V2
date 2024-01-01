
let asks = [];
let answs = [];


const clear_data = (data) => {
    data = data.trim();
    data = data.toLowerCase();
    const invalid_data = "!#$%&/()=?¡'¿{}[]+¨*-,.-;:_".split("");
    invalid_data.map(symbold => {
        data = replaceAll(data, symbold, "")
    })
    return data
}

const process_input = (data) => {
    let response = [];

    brain.options.map((cell, i) => {
        cell.ask.map(askl => {
            if (!askl.includes("&&")) {
                if (data.includes(askl)) {
                    if (response.indexOf(i) === -1) {
                        response.push(i)
                    }
                }
            } else {
                askl = askl.split("&&");
                let validator = true;
                askl.map(miniask => {
                    if (!data.includes(miniask)) {
                        validator &= false
                    }
                })
                if (validator && response.indexOf(i) === -1) {
                    response.push(i)

                }
            }

        })
    })
    return response
    // for (let i = 0; i < brain.length; i++) {
    //     const cell = brain[i];
    //     for (let j = 0; j < cell.ask.length; j++) {
    //         if (cell.ask[j].includes(data)) { 
    //             return cell.answ
    //         }

    //     }

    // }
    // if (asks.length === 0) {
    //     brain.map(cell => {


    //         cell.ask.map(ak => {
    //             if(ak.includes(data)){

    //             }
    //         })
    //         // let local = [[], []];
    //         // cell.ask.map(ak => local[0].push(ak))
    //         // cell.answ.map(ans => local[1].push(ans))
    //         // asks.push(local[0])
    //         // answs.push(local[1])
    //     })
    // }
}




const get_random_options = ({ min = 0, max }) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let interval_text
const show_text = (text, panel) => {

    const button1 = document.getElementById("chat-btn-int-1");
    const button2 = document.getElementById("chat-btn-int-2");
    button1.disabled = true;
    button2.disabled = true;

    let ind = 0;
    const max = text.length;
    interval_text = setInterval(() => {
        ind++
        panel.innerText = text.substring(0, ind);
        if (max === ind) {
            clearInterval(interval_text)
            button1.disabled = false;
            button2.disabled = false;
        }
    }, 50);;
}

const process_output = (response) => {
    let output = "";

    if (response.length === 0) {
        output = brain.default
    } else {
        response.map(ind => {
            output += "\n" + brain.options[ind].answ[get_random_options({ max: brain.options[ind].answ.length })]

        })
    }
    return output
}


const show_output = (output) => {
    const panel = document.getElementById("chat-panel");

    show_text(output, panel)
};

const get_user_input = (input) => {
    const input_ele = document.getElementById("modal-chat-inp");

    let data = clear_data(input);
    const output = process_output(process_input(data))
    input_ele.value = "";
    show_output(output);


}


// const text = "asdasd21 a 11 111 11 1asd ";
// let interval_text;
// const show_text =(text)=>{
//     const text_cont = document.getElementById("text");
//     let ind = 0;
//     const max = text.length;
//     interval_text = setInterval(() => {
//         ind ++
//         text_cont.textContent = text.substring(0, ind);
//         if(max === ind){
//             clearInterval(interval_text)
//         }
//     }, 50);;
// }


// show_text(text)