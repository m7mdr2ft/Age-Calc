
function calcAge()
{
    var year = Number( document.getElementById('ageInp').value); //2000
    //var age = 2020-year;
    var d = new Date(); // youm shahr sana time --> year =2020  
    var age = d.getFullYear()-year; //2020 -2000 =20 
    document.getElementById('ageId').innerHTML="your age is <span id='age'>"+(age)+"</span>"; // concatination


    if (year <= 17)
    {
        document.getElementById('ageText').innerHTML="you are underAge";
    }
    else
    {
        document.getElementById('ageText').innerHTML="you are overAge";
    }


    var temp="";
    for( var i=0; i<20 ; i++)
    {
        temp+="*"; 
    }
    document.getElementById('star').innerHTML=temp;

}





















