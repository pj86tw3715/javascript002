function rand(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function count(age,nowMonth,cmonths) {
    let newyear= age+Math.floor(cmonths/12);
    let newMonth= (nowMonth+cmonths)%12;
    return age+newyear+"歲"+newMonth+"個月";
}
function addZero(number){
    if(number <= 9) {
        return ("0"+number)
    }else {
        return number
    }
}