
var block=document.querySelector("p");
var bodyclick=document.querySelectorAll(".number");
let showProcess=document.querySelector(".process");
const acDe=document.querySelectorAll(".acDe");
const number=[];
for(i=0;i<bodyclick.length;i++){
      //偵測數字鍵並顯示至處理列
      bodyclick[i].addEventListener("click",function(){
                  showValue(this.innerHTML);
      });
}
for(i=0;i<acDe.length;i++){
      acDe[i].addEventListener("click",function(){ 
            if(this.innerHTML=='AC'){
                  //讀取到‘ＡＣ’刪除處理列
                  showProcess.innerHTML='';
                  console.log('ac');
                  console.log(this);
            }else{
                  s=showProcess.innerHTML
                  // substr(0,s.length-1)擷取字串第０個到倒數第二個
                  showProcess.innerHTML=s.substr(0,s.length-1) ;
            }
      });
}

function showValue(keyIn){
      // 將輸入顯示到處理列
      showProcess.innerHTML=showProcess.innerHTML+keyIn;
}




