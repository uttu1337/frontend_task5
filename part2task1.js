var yrs = prompt('Сколько вам лет?', 100);
let result="";
years=yrs%100;
if (yrs<0) {
    alert('Вам не может быть столько лет!');
}
else {
    if (yrs>100) {
        alert('Вам не может быть столько лет!');
    }
    
    else {
        if (years>=10 && years <=20 ) {
            result = "лет"
        } else {
            years = yrs %10;
        }
        if (years===1) {
           result="год"
        } else if (years>=2 && years <=4)
        {
            result = "года"
        }
        else {
            result = "лет"
        }
     }
     alert("Вам "+yrs+" "+result+"!");
}