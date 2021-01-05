
var block=document.querySelector("p");
var bodyclick=document.querySelectorAll(".number");
let showProcess=document.querySelector(".process");
const acDe=document.querySelectorAll(".acDe");
for(i=0;i<bodyclick.length;i++){
      bodyclick[i].addEventListener("click",function(){
                  showValue(this.innerHTML);
      });
}


for(i=0;i<acDe.length;i++){
      acDe[i].addEventListener("click",function(){ 
            if(this.innerHTML=='AC'){
                  showProcess.innerHTML='';
                  console.log('ac');
                  console.log(this);
            }else{
                  s=showProcess.innerHTML
                  showProcess.innerHTML=s.substr(0,s.length-1) ;
                  console.log(s);
            }
      });
}

function showValue(keyIn){
      
      showProcess.innerHTML=showProcess.innerHTML+keyIn;
}




