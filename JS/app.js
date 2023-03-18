console.log('Digital Clock')
const Clock=()=>{
    const Hour_1=document.getElementById('hour_');
    const Minutes_1=document.getElementById('min_');
    const Second_1=document.getElementById('sec_')

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    Hour_1.innerHTML=h;
    Minutes_1.innerHTML=m;
    Second_1.innerHTML=s;

}

setInterval(Clock,1000);
