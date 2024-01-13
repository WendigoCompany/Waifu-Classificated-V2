const build_sex_ui = () => {};

const load_spray = (spray_url) => {
  const spray = document.getElementById("sex-spray");
  spray.style.backgroundImage = `url("${spray_url}")`;
};
const start_animation = (url) => {
  const spray = document.getElementById("sex-spray");
  // const url = "../Media/kurumi_tokisaki/room/0/handjob/1_2.png";
  document.getElementById("preload-sex-spray").src = url;
  document.getElementById("preload-sex-spray").onload = () => {
    spray.style.backgroundImage = `url("${url}")`;
    // if (!cont1.src.includes("Media")) {
    //     cont1.style.opacity = 0;
    //     cont1.src = url;
    //     cont1.style.opacity = 1;

    //     setTimeout(() => {
    //         cont2.style.transition = "opacity 1s";
    //         cont2.style.opacity = 0;
    //     }, 800);
    // } else if (!cont2.src.includes("Media")) {
    //     cont2.style.opacity = 0;
    //     cont2.src = url;
    //     cont2.style.opacity = 1;

    //     setTimeout(() => {

    //         cont1.style.opacity = 0;
    //     }, 800);
    // }
  };
};

// MAX 100 Y 200
// load_spray()

let counter = 0;
let cycle = "add";

// setTimeout(() => {

//     setInterval(() => {

//         const pose = "handjob";
//         const animation_data = animation_params[pose];
//         let url;

//         if (animation_data[counter] == undefined) {
//             if (counter < 0) {
//                 url = animation_data[0].url
//                 counter = 1;
//             } else if (counter == animation_data.length) {
//                 url = animation_data[animation_params[pose].length - 1].url
//                 counter = animation_params[pose].length - 2;
//             }
//                         if(cycle == "add"){
//                 cycle = "sub"
//             }else{
//                 cycle = "add"
//             }
//             // if (counter < 0) {
//             //     url = animation_data[1].url
//             //     counter = 1
//             // } else {
//             //     url = animation_data[animation_params[pose].length - 2].url
//             //     counter = animation_params[pose].length - 2;
//             // }

//             // if(cycle == "add"){
//             //     cycle = "sub"
//             // }else{
//             //     cycle = "add"
//             // }
//         } else {
//             url = animation_data[counter].url
//             if (cycle == "add") {
//                 counter++
//             } else {
//                 counter--
//             }
//         }
//         // const pose = "handjob";
//         // const animation_data = animation_params[pose];
//         // let url;
//         // if (animation_data[counter] == undefined) {
//         //     console.log(counter);
//         //     if (counter < 0) {
//         //         url = animation_data[1]
//         //         counter = 1
//         //     } else {
//         //         url = animation_data[animation_params[pose].length - 2]
//         //         counter = animation_params[pose].length - 2;
//         //     }

//         //     if(cycle == "add"){
//         //         cycle = "sub"
//         //     }else{
//         //         cycle = "add"
//         //     }
//         // } else {
//         //     url = animation_data[counter]
//         //     if(cycle == "add"){
//         //         counter ++
//         //     }else{
//         //         counter --
//         //     }
//         // }
//         start_animation(url)
//     }, 200);
//     // start_animation()
// }, 2000);

// const animation_params = {
//     "handjob": [
//         {
//             id: 1,
//             pos: 1,
//             url: "../Media/kurumi_tokisaki/room/0/handjob/1_1.png"
//         }, {
//             id: 2,
//             pos: 1,
//             url: "../Media/kurumi_tokisaki/room/0/handjob/1_2.png"
//         },
//         {
//             id: 3,
//             pos: 1,
//             url: "../Media/kurumi_tokisaki/room/0/handjob/1_3.png"
//         }
//     ]
// };



const sex_scene_manager = () => {
  const pose = sessionStorage.getItem("sex-pose");
  const sex_scene_data = sex_params[pose];
  sessionStorage.setItem("stade", 1);
  load_spray(sex_scene_data[0].url);
  // console.log(sex_params);
  // console.log(sex_scene_data);
};
