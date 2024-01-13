let sex_params = {}

const get_spray_id = () => {
    let spray = sessionStorage.getItem("spray");
    if (sessionStorage.getItem("spray") != null) {
        spray = spray.replace("prev_", "")
        spray = spray.replace(".png", "")
        return parseInt(spray)
    } else {
        return 0
    }
}

const build_sex_params = async () => {

    if (Object.keys(sex_params).length == 0) {
        const poses = worker_selected.offerts;
        const clothe_id = get_spray_id();
        const url = base_proyect + "/Media/" + worker_selected.name + "/room/" + clothe_id + "/";
        // poses.map(async pose => {
        //     try {
        //         pose = pose.toLowerCase() 
        //         sex_params[pose] = []
        //         const pose_images = await readdir(url + pose);
        //         pose_images.map(img => {
        //             sex_params[pose].push({
        //                 id: parseInt(img.replace(".png", "")),
        //                 url: url + img              
        //             })
        //         })
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })

        for (let i = 0; i < poses.length; i++) {
            let pose = poses[i];
            try {
                
                pose = pose.name.toLowerCase()
                sex_params[pose] = []
                const pose_images = await readdir(url + pose);
                pose_images.map(img => {
                    let data = img.replace(".png", "");
                    data = data.split("_");
                    sex_params[pose].push({
                        id: parseInt(data[1]),
                        stade: parseInt(data[0]), 
                        url: url+ pose + "/" + img
                    })
                })
            } catch (error) {
                console.error(error);
            }

        }
    }

}