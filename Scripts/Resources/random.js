const get_random = ({ min = 0, max }) => {
    return Math.floor(Math.random() * (max - min) + min);
}