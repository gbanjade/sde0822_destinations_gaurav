//Should have thought about using div to hold buttons and paragraph, removing/styling would be easier ..try next time
//May be use card for image to make small and use breakpoints using css
document.querySelector("button").addEventListener("click", function (e){
    e.preventDefault(); 
    //Getting the url 
    let url =  document.getElementById("photo").value
    //creating the image
   const urlImage = document.createElement('img'); 
   urlImage.src = url; 
   //selecting the div and appending to it 
   document.querySelector(".yellow_box").appendChild(urlImage);   

   //Getting the location 
   const para = document.createElement("p");
   let location = document.getElementById("location").value;
   const node =document.createTextNode(location);
   para.appendChild(node);
   para.classList.add("h4");
   document.querySelector(".yellow_box").appendChild(para);    

   //Getting the description
   const para1 = document.createElement("p");
   let description = document.getElementById("description").value;
   const node1 =document.createTextNode(description);
   para1.appendChild(node1);
   para1.classList.add("h6");
   document.querySelector(".yellow_box").appendChild(para1);    
   
   //Creating buttons
   const firstBtn =  document.createElement("button");
   const secondBtn = document.createElement("button");
   const firstBtnNode = document.createTextNode("Edit");
   const secondBtnNode = document.createTextNode("Remove");
   firstBtn.appendChild(firstBtnNode);
   firstBtn.classList.add("btn", "btn-warning", "btn_list");
   secondBtn.appendChild(secondBtnNode);
   secondBtn.classList.add("btn", "btn-danger", "btn_list");
   document.querySelector(".yellow_box").appendChild(firstBtn);    
   document.querySelector(".yellow_box").appendChild(secondBtn);    

   //Selecting an Edit button and playing with it 
   firstBtn.addEventListener("click", function(){
    const newLocation = prompt("Enter a new location");
    const newURL = prompt ("Enter new photo url");
    const newDescription = prompt("Enter new description");
    urlImage.src = newURL; 
    para1.appendChild(newDescription);
    para1.classList.add("h6");
    para.appendChild(location);
    para.classList.add("h4");
    firstBtn; 
    secondBtn; 
   })


   //Selecting a remove button and playing with it 
   secondBtn.addEventListener("click", function(){
    urlImage.remove();
    firstBtn.remove(); 
    secondBtn.remove();
    para1.remove(); 
    para.remove(); 
   }); 

});
