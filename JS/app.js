console.log('Digital Clock')
///First Clock Start
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

Clock();
setInterval(Clock,1000);

//First Clock End

///Second Clock Start
const UpdateClock=()=>{
    let Now=new Date();
    let dayName=Now.getDay();
    let monthName=Now.getMonth();
    let dateName=Now.getDate();
    let yearName=Now.getFullYear();
    let hourName=Now.getHours();
    let minName=Now.getMinutes();
    let secName=Now.getSeconds();
    let pe='AM';
    let All_Month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let Week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    document.getElementById('dayname').innerHTML=Week[dayName-1];
    document.getElementById('month').innerHTML=All_Month[monthName];
    document.getElementById('daynum').innerHTML=dateName;
    document.getElementById('year').innerHTML=yearName;
    document.getElementById('_hour').innerHTML=hourName;
    document.getElementById('_min').innerHTML=minName;
    document.getElementById('_sec').innerHTML=secName;
    console.log('Hour: '+hourName+' Datatype: '+typeof hourName)
   
    
    if(hourName>11){
        document.getElementById('_period').innerHTML='PM';
    }else{
        document.getElementById('_period').innerHTML='AM';
    }
    if(hourName>12){
        let newHourName=hourName-12;
        document.getElementById('_hour').innerHTML=newHourName;

        if(newHourName.toString().length===1){
            document.getElementById('_hour').innerHTML='0'+newHourName;
        }
        if(newHourName===12){
            document.getElementById('_hour').innerHTML='00';
        }
    }

    if(secName.toString().length==1){
        document.getElementById('_sec').innerHTML='0'+secName;
    }

    if(minName.toString().length==1){
        document.getElementById('_min').innerHTML='0'+minName;
    }

    if(hourName.toString().length==1){
        document.getElementById('_hour').innerHTML='0'+hourName;
    }
}

UpdateClock();
setInterval(UpdateClock,1000);
///Second Clock End
