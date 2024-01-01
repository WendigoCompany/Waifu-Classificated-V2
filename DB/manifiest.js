const waifus = [];

let aux_creation;
let brain;

const profile_base = {
    title: "",
    description: "",
    id: 0,
    img_uri: proyect_dir + params.media + "",
    name: "",
    gallery: 0,
    offerts: [
        "",
    ],
    pre_desc: "",
    selected: 1,
}

//OPTION => {name : "", id : x}
const waifus_manifiest = ["kurumi_tokisaki", "tohka_yatogami"];

let auto_increment = 0;

const build_waifus = () => {
    const system_path = "../DB/***/profile.js"
    waifus_manifiest.map(waifu => {
        $("<script/>").attr({ "src": system_path.replace("***", waifu) }).appendTo("#scripts-db")
        auto_increment++
    })



};



const build_only_waifu = (selected) => {
    const system_path = "../DB/***/profile.js"
    const selected_data = waifus_manifiest[selected];
    auto_increment = 0;
     load_brain(selected_data).then().catch()
    $("<script/>").attr({ "src": system_path.replace("***", selected_data) }).appendTo("#scripts-db")

}

const load_brain = async (selected_data) => {
    const system_path = base_proyect + "/DB/***/brain.json"
    brain = await read(system_path.replace("***", selected_data)) ;
    brain = JSON.parse(brain);
}