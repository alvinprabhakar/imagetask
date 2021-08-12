let i = 0; let changeImage=0; let images = ["NS1.jpg", "NS2.jpg","NS3.jpg","NS4.jpg","NS5.jpg"];

function change() {
  
  
  console.log(images[i]);
  if(i===images.length){
    i = 0;
    }
    document.getElementById('image').src = "images/"+images[i]+"";
    console.log(i);
   i++;
 }

 changeImage = setInterval(() => change(), 2000);
 
 function startSlide(){

   //if(changeImage === 0){
     console.log("Invoking");
    changeImage = setInterval(() => change(), 2000);
   //}
  }

function stopSlide(){
    clearInterval(changeImage);
    
}

function prevImage(){
    console.log("prev button",i);
    clearInterval(changeImage);
  if(i !== 0){
    i = i - 1;
    document.getElementById('image').src = "images/"+images[i]+"";
  }
  else{
    i = images.length;
    document.getElementById('image').src = "images/"+images[i]+"";
  }
  changeImage = setInterval(() => change(), 2000);
  }

function nextImage(){
  console.log("next button",i);
  clearInterval(changeImage);
  if(i>= images.length){
    i = 0;
    document.getElementById('image').src = "images/"+images[i]+"";
  }
  else{
    i = i+1;
    document.getElementById('image').src = "images/"+images[i]+"";
  }
  changeImage = setInterval(() => change(), 2000);
  }
    



