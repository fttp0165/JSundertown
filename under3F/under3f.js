
var block=document.querySelector("p");
var bodyclick=document.querySelectorAll(".number");
let showProcess=document.querySelector(".process");
let fun=document.querySelectorAll(".fun");
const acDe=document.querySelectorAll(".acDe");
let resultProcess=document.querySelector(".result");
let number="";
let lastLoaction=0;
for(i=0;i<bodyclick.length;i++){
      //偵測數字鍵並顯示至處理列
      
      bodyclick[i].addEventListener("click",function(){
                 
                  showValue(this.innerHTML);
      });
}


for(i=0;i<fun.length;i++){
      //偵測function鍵顯示至處理列
      fun[i].addEventListener("click",function(){
            str='';
            str=showProcess.innerHTML;
            //判斷前一個輸入是否為key
            str=checkFunKey(str);
            str=showValue(this.innerHTML);
            resultProcess.innerHTML=resultProcess.innerHTML+str;
            showProcess.innerHTML='';
            lastLoaction=str.length+1;
            console.log("number:"+(number));
          
      });
}



for(i=0;i<acDe.length;i++){
      acDe[i].addEventListener("click",function(){ 
            if(this.innerHTML=='AC'){
                  //讀取到‘ＡＣ’刪除處理列
                  showProcess.innerHTML='';
                  lastLoaction=0;
                  number=[];
            }else{
                  s=showProcess.innerHTML
                  // substr(0,s.length-1)擷取字串第０個到倒數第二個
                  showProcess.innerHTML=s.substr(0,s.length-1) ;
                  lastLoaction-=1;
                  number.pop
            }
      });
}

function showValue(keyIn){
      // 將輸入顯示到處理列
      showProcess.innerHTML=checkZero(showProcess.innerHTML);
      return showProcess.innerHTML=showProcess.innerHTML+keyIn;
}

function checkFunKey(currentProcess){
   var lastInput=currentProcess.substr(currentProcess.length-1,currentProcess.length);
   if (isNaN(lastInput)){
      return currentProcess.pop();
   }
   return currentProcess;
}
function checkZero(currentProcess){
   var lastInput=currentProcess.substr(currentProcess.length-1,currentProcess.length);
   console.log(lastInput);
   if (lastInput == 0){
      return currentProcess='';
   }
   return currentProcess;
}



