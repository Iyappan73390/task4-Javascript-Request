let request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () => { 
    let data = JSON.parse(request.response);
    //console.log(data)
     let a = data.filter((element)=>{
                // console.log(element.name)
                 return element.population <200000;
                }) ;
                console.log(a)
                //population: 27657145
   
}