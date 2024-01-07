const get_background = async () => {
    const uri = base_proyect + "\\Media\\room_backgrounds";
    return await readdir(uri)

}

