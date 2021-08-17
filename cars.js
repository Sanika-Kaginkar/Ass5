let form=document.querySelector('#car-form');
let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/getcars.php';
    form.addEventListener('submit',(e)=>{   
    e.preventDefault();
        let name=document.querySelector('#Id').value;
        let name=document.querySelector('#Name').value;
        let Company=document.querySelector('#Company').value;
        let Status=document.querySelector('#Status').value;
      
        let data={
          "id":Id,
          "Name":Name,
          "Company":Company,
          "Status":status,
       };
       let params=JSON.stringify(data);
       let xhr=new XMLHttpRequest();
       xhr.open('POST',url,true);
       xhr.setRequestHeader('content-type','application/x-www-form-urlendcoded');
       xhr.onload=()=>{
       if(xhr.readystate==4||xhr.status==200)
    {
        console.log("car created");
    }
      else
    {
    console.log("error occured");  
    }
}
xhr.send(params);
   });