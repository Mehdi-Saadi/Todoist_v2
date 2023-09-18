// sets a cookie
// defalut time is one year
export function setCookie(name, value, untill = 31104000) {
    let time = Math.floor(new Date().getTime() / 1000) + (untill);
    document.cookie = `${name}=${value}; max-age=${time}; path=/`;
}

// gets value of cookie
export function getCookie(name) {
    let cookie = document.cookie.split(";");
    for(let i = 0; i < cookie.length; i++) {
        let cookiePair = cookie[i].split("=");
        if(name === cookiePair[0].trim())
            return cookiePair[1].trim();
    }
    return false;
}
