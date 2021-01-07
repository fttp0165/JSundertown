
var block=document.querySelector("p");
var equ=document.querySelector(".equ");
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

equ.addEventListener("click",function(){
      
      number=resultProcess.innerHTML+showProcess.innerHTML;
      resultProcess.innerHTML=resultProcess.innerHTML+showProcess.innerHTML;
      console.log(number);
      number=number.replaceAll('x','*');
      number=number.replaceAll('÷','/');
      showProcess.innerHTML=eval(number);
});


for(i=0;i<fun.length;i++){
      //偵測function鍵顯示至處理列
      fun[i].addEventListener("click",function(){
            str='';
            str=showProcess.innerHTML;
            //判斷前一個輸入是否為key
            str=checkFunKey(str);
            if(str==''){
               checkFunKey(resultProcess.innerHTML);
            }
            str=showValue(this.innerHTML);
            console.log('----');
            console.log(str);
            resultProcess.innerHTML=resultProcess.innerHTML+str;
            console.log(resultProcess.innerHTML);
            showProcess.innerHTML='';
            lastLoaction=str.length+1;
      });
}

for(i=0;i<acDe.length;i++){
      acDe[i].addEventListener("click",function(){ 
            if(this.innerHTML=='AC'){
                  //讀取到‘ＡＣ’刪除處理列
                  showProcess.innerHTML='';
                  resultProcess.innerHTML='';
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
      if(resultProcess.innerHTML ==''){
          showProcess.innerHTML=checkZero(showProcess.innerHTML);
      }
      console.log(showProcess.innerHTML);
      re = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g ;
      showProcess.innerHTML=showProcess.innerHTML+keyIn;
      showProcess.innerHTML=showProcess.innerHTML.replaceAll(',', "");
      showProcess.innerHTML=showProcess.innerHTML.replace(re, "$1,");
      return showProcess.innerHTML
}

function checkFunKey(currentProcess){
   var lastInput=currentProcess.substr(currentProcess.length-1,currentProcess.length);
   if (isNaN(lastInput)){
      return currentProcess.pop();
   }
   return currentProcess;
}
function checkZero(currentProcess){
   var lastInput=currentProcess;
   console.log(lastInput);
   if (lastInput == 0){
      console.log(lastInput);
      console.log('0 is ex');
      return currentProcess='';
   }
   return currentProcess;
}



