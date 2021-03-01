let Arrayvalue=function(message1,nameofstudents){

    for(let i in nameofstudents)
    {
        console.log(message1,nameofstudents[i],message2,nameofstudents[i].length);
    }
}

let message1="Name";
let message2="Length";
let names=['vinnu','hello','i am jersey'];
Arrayvalue(message1,names);
