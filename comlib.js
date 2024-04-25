
// 增加0字元函數，0-9補0合併為00-09
function addZero(x) {
    if (x < 10) {
        return x = '0' + x;
    } else {
        return x;
    }
}
//可自訂範圍min到max之間的亂數產生函數
//min亂數最小範圍，max亂數最大範圍
function rand(min, max) {
    //Math.random()，JS產生0-1之間的隨機亂數，包含0不包含1之間的值
    //Math.floor() 函式會回傳無條件捨去的整數，如12.3則回傳12。
    //Math.ceil() 函式會回傳無條件進位整數，如1.03則回傳2。
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);//回傳min到max之間的亂數
}