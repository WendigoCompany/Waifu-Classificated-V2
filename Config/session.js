const ssave = (key, data) => {
    sessionStorage.setItem(key, data)
}

const sload = (key) => {
    try {
        return JSON.parse(sessionStorage.getItem(key))
    } catch (error) {
        return sessionStorage.getItem(key)
    }
}

const sdel = (key) => {
    return JSON.parse(sessionStorage.removeItem(key))
 }
 