const searchPhone=()=>{
    const searchField= document.getElementById("search-field");
    const searchText= searchField.value;
    // if(searchText== ""){
    //   const divErrorContainer= document.getElementById("error-result");
    //   const divE=document.createElement("div");
    //   divE.innerHTML=`<h4>Result Not Found</h4>`
    //   divErrorContainer.appendChild(divE);
    //  }
    searchField.value="";
    
   fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
   .then(res=>res.json())
   .then(data=>displaySearchResult(data.data))
}
    const displaySearchResult=data=>{
      console.log(data.length)
      const searchResult=document.getElementById("search-result");
      searchResult.textContent=""
      if(data.length== 0){
        const divErrorContainer= document.getElementById("error-result");
        const divE=document.createElement("div");
        divE.innerHTML=`<h4>No Result Found</h4>`
        divErrorContainer.appendChild(divE);
       }
       else{
        data.forEach(data=>{
          //console.log(data);
          document.getElementById("error-result").textContent=''
           const div=document.createElement("div");
           div.classList.add('col');
           div.innerHTML=`<div class="card h-100 p-2 ">
           <img class="w-50 mx-auto" src="${data.image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h3 class="card-title">${data.phone_name}</h3>
             <p class="card-text">Brand: ${ data.phone_name}</p>
             <button onclick="loadPhoneDetail('${data.slug}')" class="bg-success border-0 px-5 py-3 text-white fw-bolder rounded-pill" >Details</button>
             </div>
           </div>
         </div>`
          searchResult.appendChild(div);
      });
     
  };
       }
       
 const loadPhoneDetail=phoneNameId=>{
   //console.log(phoneNameId)
   fetch(`https://openapi.programming-hero.com/api/phone/${phoneNameId}`)
   .then(res=>res.json())
   .then(data=>displayPhoneDetail(data.data))
 }
const displayPhoneDetail=phone=>{
  console.log(phone.others.USB)
  const phoneDetails= document.getElementById("phone-details");
  phoneDetails.textContent=""
  const div=document.createElement("div");
  div.classList.add("card");
  div.classList.add("w-50");
  div.classList.add("mx-auto");
  div.innerHTML=` <img class="w-50 p-3 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${phone.name}</h3>
    <p>${phone.releaseDate ? phone.releaseDate:'No releasedate found'}</p>
  </div>
  <div class="card-body bg-light">
  <p><span class="fw-bolder">Storage:</span> ${phone.mainFeatures.storage}</p>
  <p><span class="fw-bolder">DisplaySize:</span> ${phone.mainFeatures.displaySize}</p>
  <p><span class="fw-bolder">ChipSet:</span> ${phone.mainFeatures.chipSet}</p>
  <p><span class="fw-bolder">Memory:</span> ${phone.mainFeatures.memory}</p>
  <br>
   <p><span class="fw-bolder">Sensors:</span> ${phone.mainFeatures.sensors}</p>
   <br>
   <p><span class="fw-bolder">WLAN:</span> ${phone.others.WLAN}</p>
   <p><span class="fw-bolder">Bluetooth:</span> ${phone.others.Bluetooth}</p>
   <p><span class="fw-bolder">GPS:</span> ${phone.others.GPS}</p>
   <p><span class="fw-bolder">NFC:</span> ${phone.others.NFC}</p>
   <p><span class="fw-bolder">Radio:</span> ${phone.others.Radio}</p>
   <p><span class="fw-bolder">USB:</span> ${phone.others.USB}</p>
  </div>
  <div class="card-body">
    
  </div>`
  phoneDetails.appendChild(div);
}
