

const create_cards = () => {
    for (let i = 0; i < max_per_page; i++) {
        const fp = i + ((actual_page - 1) * max_per_page);
        const waifu = waifus[fp]
        if (waifu !== undefined) {
            waifu.create_structure()
        }
    }

}