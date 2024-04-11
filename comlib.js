//可自訂範圍min到max之間的亂數產生函數
//min亂數最小範圍,max亂數最大範圍
//建立自訂函數庫
function rand(min, max) {
  //math.random(),JS產生0-1之間的隨機亂數,包含0不包含1之間的值
  //math.floor()函式會回傳無條件捨去的整數,如12.3則回傳12。
  //math.ceil()函式會回傳無條件進位整數,如1.03則回傳2。
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);  //回傳min到max之間的亂數
  /*
    例rand(5,10);程式執行情形
    return 最小返回5,Math.floor(0*(10-5+1)+5)
    return 最大返回10,Math.floor(0.9*(10-5+1)+5)
  */
} 
function addzero(number) {
  if (number < 10) {
    return ("0" + number);
  } else {
    return (number);
  }
}