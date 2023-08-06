//text to sppech
var utterance;
const synth = window.speechSynthesis;
function texttospeech(a){
  
    utterance = new SpeechSynthesisUtterance(a);
    
    utterance.rate = document.querySelector(".form-range").value;
    
   
    speechSynthesis.speak(utterance);
}
//for height
var t=[];

for(var i=0;i<20;i++){
    if(document.querySelectorAll(".a")[i].innerHTML==0){
        t.push(Number(document.querySelectorAll(".a")[i].innerHTML))
        document.querySelectorAll(".a")[i].style.height="5px";
    }
    else{
    t.push(Number(document.querySelectorAll(".a")[i].innerHTML));
    document.querySelectorAll(".a")[i].style.height=(document.querySelectorAll(".a")[i].innerHTML)*25+"px";
    }
}

var q=0;
var o=0;
function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

//bubble started
async function Bubble(){
    for(var  i = 0 ; i<20;i++){
        for(var j = 0 ;j<20-i-1;j++){
            if( Number(document.querySelectorAll(".a")[j].innerHTML) > Number(document.querySelectorAll(".a")[j+1].innerHTML)){
                // var c=0;
                for(var x=0;x<20;x++){
                    if(x!==j && x!==j+1 ){
                        document.querySelectorAll(".a")[x].style.backgroundColor="aqua";
                        
                    }
                }
               
        
                    
                    var c=document.querySelectorAll(".a")[j].innerHTML;
                    document.querySelectorAll(".a")[j].innerHTML=document.querySelectorAll(".a")[j+1].innerHTML;
                    document.querySelectorAll(".a")[j].style.height= Number(document.querySelectorAll(".a")[j].innerHTML)*25+"px";
                    document.querySelectorAll(".a")[j].style.backgroundColor="black";
                    document.querySelectorAll(".a")[j+1].innerHTML=c;
                    document.querySelectorAll(".a")[j+1].style.height= Number(document.querySelectorAll(".a")[j+1].innerHTML)*25+"px";
                    document.querySelectorAll(".a")[j+1].style.backgroundColor="black";
                    await sleep(150);
                
             
            }
          
        }
        await sleep(150);
}
// q=1;
// //console.log(alert("done"));

// if(q==1){
//     document.querySelector(".bubble").disabled=false;
    
//     document.querySelector(".bubble").addEventListener('click',function(){
//         alert('already sorted');
//         return;
     
          
            
        
    
    
//     });
    
    
    
    
// }
}
// console.log(q);
//bubble terminated=======================================================================



//insertion started========================================================================
async function insertion(){
    var j;
    for(var i=1;i<20;i++){
        var temp=Number(document.querySelectorAll(".a")[i].innerHTML);
        j=i-1;
       while(j>=0 &&Number(document.querySelectorAll(".a")[j].innerHTML)>temp)
       {   
          for(var x=0;x<20;x++){
                    if(x!==j && x!==j+1 ){
                        document.querySelectorAll(".a")[x].style.backgroundColor="aqua";
                        
                    }
                }
        document.querySelectorAll(".a")[j+1].innerHTML=document.querySelectorAll(".a")[j].innerHTML;
        document.querySelectorAll(".a")[j+1].style.height= Number(document.querySelectorAll(".a")[j+1].innerHTML)*25+"px";
        document.querySelectorAll(".a")[j+1].style.backgroundColor="black";
        document.querySelectorAll(".a")[j].style.height= Number(document.querySelectorAll(".a")[j].innerHTML)*25+"px";
        document.querySelectorAll(".a")[j].style.backgroundColor="black";
        //    b[j+1]=b[j];
           j=j-1;
           await sleep(150);
       }
       document.querySelectorAll(".a")[j+1].innerHTML=temp;
       document.querySelectorAll(".a")[j+1].style.height= Number(document.querySelectorAll(".a")[j+1].innerHTML)*25+"px";
       await sleep(150);
   }
//    o=1;
//    if(o==1){
    
//     document.querySelector(".insertion").disabled=false;
//     document.querySelector(".insertion").addEventListener('click',function(){
//         alert('already sorted');
         
    
     
          
            
        
    
    
//     });
    
    
    
    
// }
   
}
//insertion terminated====================================================================


//quick sort==============================================================================
// function swap(t, leftIndex, rightIndex){
//     // var temp = items[leftIndex];
//     // items[leftIndex] = items[rightIndex];
//     // items[rightIndex] = temp;
//     var temp=Number(t[leftIndex].innerHTML);
//     t[leftIndex].innerHTML =t[rightIndex].innerHTML;
//     t[leftIndex].style.height= Number(t[leftIndex].innerHTML)*25+"px";
    
//     t[rightIndex].innerHTML = temp;
//     t[rightIndex].style.height= Number(t[rightIndex].innerHTML)*25+"px";
// }
// function partition(t, left, right) {
//     var pivot   = t[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <Number(pivot.innerHTML) && j>Number(pivot.innerHTML)) {
//         while (Number(t[i].innerHTML) < Number(pivot.innerHTML)) {
//             i++;
//         }
//         while (Number(t[j].innerHTML) > Number(pivot.innerHTML)) {
//             j--;
//         }
//         if (i <Number(pivot.innerHTML) && j>Number(pivot.innerHTML)) {
//             swap(t, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(t, left, right) {
//     var index;
//     if(left>=right){
//         return;
//     }
    
//         index = partition(t, left, right); //index returned from partition
        
//             quickSort(t, left, index - 1);
        
        
//             quickSort(t, index+1, right);
        
    
    
// }



//selection sort
async function selection(a,v){
for(var i=0;i<a-1;i++){
    var minindex=i;
    for(var j=i+1;j<a;j++){
        for(var x=0;x<20;x++){
            if(x!==j && x!==j+1 ){
                document.querySelectorAll(".a")[x].style.backgroundColor="aqua";
                
            }
        }
        if(Number(v[minindex].innerHTML)>Number(v[j].innerHTML)){
            minindex=j;
            document.querySelectorAll(".a")[j].style.backgroundColor="black";
            await sleep(150);
        }
        
    }
    
    var z=Number(v[i].innerHTML);
    v[i].innerHTML=v[minindex].innerHTML;
    v[i].style.backgroundColor="black";
    v[i].style.height=Number(v[i].innerHTML)*25+"px";
    document.querySelectorAll(".a")[minindex].innerHTML=z;
    document.querySelectorAll(".a")[minindex].style.height=Number(document.querySelectorAll(".a")[minindex].innerHTML)*25+"px";
    await sleep(150);
    
}
for(var i=0;i<20;i++){
    console.log(document.querySelectorAll(".a")[i].innerHTML)
}

}
//selection terminated========================================================================

var buttons_1=[];
//bubble button---------------------------------------------------
document.querySelector(".bubble").addEventListener('click',Bubble);
document.querySelector(".bubble").addEventListener('click',function(){
    
    buttons_1.push('b');
    console.log(buttons_1);
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".insertion").disabled=true;
    // document.querySelector(".quick").disabled=true;
    document.querySelector(".selection").disabled=true;
});
//bubble button---------------------------------------------

//insertion button------------------------------------------
document.querySelector(".insertion").addEventListener('click',insertion);
document.querySelector(".insertion").addEventListener('click',function(){
    buttons_1.push('i');
    console.log(buttons_1);
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".insertion").disabled=true;
    // document.querySelector(".quick").disabled=true;
    document.querySelector(".selection").disabled=true;
});
//insertion button------------------------------------------


//quick button---------------------------------------------
// var s=0;
// var e=20;
// document.querySelector(".quick").addEventListener('click',function(){
//     // quicksort(t,s,e-1);
//     buttons_1.push('q');
//     console.log(buttons_1);
//     quickSort(document.querySelectorAll(".a"), 0,19);
// });

//selection button------------------------------------------------------------------------
document.querySelector(".selection").addEventListener('click',function(){
    buttons_1.push('s');
    console.log(buttons_1);
    selection(20,document.querySelectorAll(".a"));
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".insertion").disabled=true;
    // document.querySelector(".quick").disabled=true;
    document.querySelector(".selection").disabled=true;
});

//generate button

// function gen_1(a){
//             texttospeech(a);
// }
// document.querySelector(".j").addEventListener("click",function(){
//     // if(buttons[0]=='g'){
//     //     buttons.length=0;
//     // }
//     // else{
    
//     gen_1("Welcome to my programm, lets first make the random array,   whose elements will lie between 1 and 20,   now we have got the elements ,  now make the operations on them according to the buttons!")
//     //}
// })

//range=================================================================================
// function rate(a){
//     utterance = new SpeechSynthesisUtterance(a);
//     utterance.rate = document.querySelector(".form-range").value;
//     speechSynthesis.speak(utterance);
// }
// document.querySelector(".form-range").addEventListener("click",function(){
//     // rate("Welcome to my programm, lets first make the random array,   whose elements will lie between 1 and 20,   now we have got the elements ,  now make the operations on them according to the buttons!");
//     // console.log(document.querySelector(".form-range").value);
//     // //const utterThis = new SpeechSynthesisUtterance("Welcome to my programm, lets first make the random array,   whose elements will lie between 1 and 20,   now we have got the elements ,  now make the operations on them according to the buttons!");
    
//     // synth.speak(utterance);
    
    
//     // utterance.rate = 2;
    
//     // console.log(utterance);
        
//     })
// document.querySelector(".form-range").addEventListener("click",rate);
document.querySelector(".cross").addEventListener("click",function(){
    synth.cancel();
})
document.querySelector(".vol").addEventListener("click",function(){
    var index=(buttons_1.length-1);
    if(buttons_1[index]=='b'){
        texttospeech("Bubble sort is a sorting algorithm that compares two adjacent elements,   and swaps them until they are in the intended order,     If the previous element is greater than further one then ,  swaping will happen , This algorithm has a worst case time complexity O of n square  , and  The bubble sort has a space complexity of O(1)");
    }
    else if(buttons_1[index]=='i'){
        texttospeech("Insertion sort is a sorting algorithm ,  that takes one pivote element ,  and for rest of the elements if the element is less than pivote than,   that perticular element will inserted to left,   else to the right of the pivote,   The best case time complexity of insertion sort algorithm is O of n and the wrost case complexity as O of n square");
    }
    else if(buttons_1[index]=='q'){
        texttospeech("welcome to quick");
    }
    else if(buttons_1[index]=='s'){
        texttospeech("selection sort is the sorting algorithm in which we will take pivote element as the zeroth index element,   and we will search of the  smallest element in the rest of the array ,  and we will swap those two , the time complexity for selection sort in all three cases is O of n square");
    }
})
