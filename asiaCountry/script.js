let request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () => { 
    let data = JSON.parse(request.response);
    //console.log(data)
     let a = data.filter((element)=>{
                // console.log(element.name)
                 return element.region == 'Asia';
                }); 

                let arrayLength = a.length;
                for (let i = 0; i < arrayLength; i++) {
                   const div1 = document.createElement("div");
                   const countryName = document.createTextNode(a[i].name);
                   div1.appendChild(countryName);
                   document.querySelector("body").appendChild(div1);
                }

             //   console.log(a[i].name)
}