let i = 0; let changeImage=0;

function change() {
  let color = ["NS1.jpg", "NS2.jpg","NS3.jpg","NS4.jpg","NS5.jpg"];
  
  console.log(color[i]);
  if(i===color.length){
    i = 0;
    }
    document.body.style.backgroundImage = "url('images/"+color[i]+"')";
    console.log(i);
   i++;
 }

 startSlide();
 function startSlide(){

   if(changeImage === 0){
     console.log("Invoking");
    changeImage = setInterval(() => change(), 2000);
   }
  }

function stopSlide(){
    clearInterval(changeImage);
    changeImage = 0;
}

function prevImage(){
    console.log("prev button");
    i = i - 2;
      change();
  }

function nextImage(){
  console.log("next button");
    change();
}


