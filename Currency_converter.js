import country from "./country.js";

// const URL="https://api.frankfurter.dev/v1/latest?base=IND&symbols=USD"

let CountryName=document.querySelectorAll("select");
let Final=document.querySelector("#result");
let inpu=document.querySelector("input");
let country1=document.querySelector("#India").name;
let country2=document.querySelector("#United_States").name;
let Click=document.querySelector("button");
let date=document.querySelector("#Date")






for(let code of  CountryName){
   
   for (const key in country) {

      let option=document.createElement("option");

      option.innerText=`${country[key].name}`;
      option.value=`${key}`

      code.append(option);

      if(code.value=="India"&&key=="IN")
         {

         option.selected=true
          
        }
      else if(code.id=="United_States"&&key=="US")
      {
         option.selected=true
      }
  

   

    code.addEventListener("change",(e)=>{SetFalgs(e.target)})
}
}


function SetFalgs(Select){

 
let MainSelect=Select.parentElement.querySelector("img");
MainSelect.src=`https://flagsapi.com/${Select.value}/flat/64.png`

 if(Select.id=="India"){
   country1=country[Select.value].currency;
      
 }
 else{ 
   country2=country[Select.value].currency;
 }
 
 
}

async function Api(){
  
let link=await fetch(`https://api.frankfurter.dev/v1/latest?base=${country1}&symbols=${country2}`);
let promise=await link.json();
let object=promise.rates[country2]

date.innerHTML=promise.date
Final.innerHTML=`${object*inpu.value} ${country2}`




}


Click.addEventListener("click",()=>{
   Api()
})

inpu.addEventListener("ke")








