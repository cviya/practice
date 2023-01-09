function dataFormat(){
    const dt=new Date();
    const year=dt.getFullYear();
    const month=padZero(dt.getMonth()+1);
    const data=padZero(dt.getDate());

    const hour=padZero(dt.getHours());
    const minute=padZero(dt.getMinutes());
    const second=padZero(dt.getSeconds());

    return `${year}-${month}-${data} ${hour}-${minute}-${second}`;
}
// 定义补零函数
function padZero(n){
    return n>9?n:'0'+n;
}

module.exports={
    dataFormat
}
