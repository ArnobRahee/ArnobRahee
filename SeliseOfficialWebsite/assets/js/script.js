function myFunction() {
    var x = document.getElementById("myDIV");
    var y = parseInt(window.innerWidth);
    if(y>=768){
      if (x.style.display === "none" ) {
      
        x.style.display="block";
        document.getElementById("scope").style.paddingLeft = "66px";
        document.getElementById("table").style.paddingLeft = "66px";
        document.getElementById("table2").style.paddingLeft = "66px";
        document.getElementById("search").style.marginLeft="66px";
      } else {
        
        x.style.display = "none";
       document.getElementById("scope").style.paddingLeft = "20px";
       document.getElementById("table").style.paddingLeft = "20px";
       document.getElementById("table2").style.paddingLeft = "20px";
       document.getElementById("search").style.marginLeft="20px";
        
    }
    }else{
      if (x.style.display === "block" ){
        x.style.display = "none";
      }else{
        x.style.display="block";
      }
    }
    
  }
  function hideslide(){
    var x = document.getElementById("myDIV");
    x.style.display="none";
  }
  function notification(){
    var x = document.getElementById("showInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function showmodal() {
  var x = document.getElementById("modal");
  console.log(x.style.display);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else{
    x.style.display = "block";
  }
  var y = document.getElementById("overlay");
    
  if (y.style.display === "none") {
      y.style.display = "block";
  }
  else{
    y.style.display = "block";
  }
}
function hidemodal(){
  var x = document.getElementById("modal");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else{
    x.style.display = "block";
  }
  var y = document.getElementById("overlay");
    
  if (y.style.display === "block") {
      y.style.display = "none";
  }
  else{
    y.style.display = "block";
  }
}
function showinfo() {
  var x = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else{
    x.style.display = "block";
  }
  
}
function hideinfo(){
  var x = document.getElementById("info");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else{
    x.style.display = "block";
  }
  
}
