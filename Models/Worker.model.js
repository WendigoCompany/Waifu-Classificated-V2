
//WORKERS MODELS
class Worker extends W_Card {
    constructor({ name, id, title, description, img_uri, offerts = [], gallery, pre_desc, selected, room_dialogs }) {
        super();
        this.name = name;
        this.id = id;
        this.title = title;
        this.description = description;
        this.img_uri = img_uri;
        this.offerts = offerts;
        this.gallery = gallery
        this.pre_desc = pre_desc;
        this.selected = selected;
        this.room_dialogs = room_dialogs;
    }

    init() {
        this.img_uri = base_proyect + "/" + params.media + this.name.toLowerCase() + "/" + params.gallery + `${this.selected}.png`;

        // img_uri: proyect_dir + params.media + "0/preview.png",
    }
}

const Create_Worker = (data = {}) => {
    const worker = new Worker(data);
    worker.init()
    return worker
}