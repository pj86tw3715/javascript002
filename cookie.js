// 新增或更新 Cookie 中的物件資料
function setCookie(key, value, expiryDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = key + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

// 從 Cookie 中取得物件資料
function getCookie(key) {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return JSON.parse(cookie.substring(name.length, cookie.length));
        }
    }
    return new Array();
}

// 從 Cookie 中刪除物件資料
function deleteCookie(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}