const get_background = async () => {
    const uri = base_proyect + "\\Media\\room_backgrounds";
    return await readdir(uri)

}


const get_clothes = async () => {
    const uri = base_proyect + "\\Media\\" + worker_selected.name + "\\room";
    return await readdir(uri)

}

