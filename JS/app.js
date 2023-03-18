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


///Date Distance Start
const DateSubmitButton=document.getElementById('date_submit');
const DisplayDay=document.getElementById('displayday');
const First_Date=document.getElementById('first_date');
const Second_Date=document.getElementById('second_date');

DisplayDay.style.display='none'



DateSubmitButton.addEventListener('click',()=>{
    console.log('Button Clicked');

    const StartDate=First_Date.value;
    const EndDate=Second_Date.value;

    if(StartDate==='' || EndDate===''){
        alert('Submit Date')
    }else{
        let Date1=new Date(StartDate)
        let Date2=new Date(EndDate);
    
        console.log(StartDate,'Datatype: '+typeof StartDate)
        console.log(EndDate,' Datatype: ',typeof EndDate)

        console.log(Date1,'Datatype: '+typeof Date1)
        console.log(Date2,' Datatype: ',typeof Date2)

        console.log(Date1.getTime())
        if(Date1.getTime() && Date2.getTime()){
            let TimeDifferent=Date2.getTime()-Date1.getTime();
            console.log('Time Different: '+TimeDifferent)

            let DayDifferent=TimeDifferent/(1000*3600*24)
            console.log('Day Different: '+DayDifferent)

            if(DayDifferent>1){
                DisplayDay.style.display='block'
                DisplayDay.innerHTML=` ${DayDifferent} days Remaining`
            }else if(DayDifferent<0){
                DisplayDay.style.display='block'
                DisplayDay.innerHTML=` Different ${DayDifferent*-1} day`
            }
            else{
                DisplayDay.style.display='block'
                DisplayDay.innerHTML=` ${DayDifferent} day Remaining`
            }
        }
    }
})
///Date Distance End
