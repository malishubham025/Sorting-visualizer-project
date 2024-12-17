function partition(t, left, right) {
    // var pivot   = t[Math.floor((right + left) / 2)], //middle element
    let pivotindex,count=0;
    for(var i=left+1;i<=right;i++){
        if(t[left].innerHTML>=t[i].innerHTML){
            count++;
        }
    }
      pivotindex=s+count;
      t[pivotindex].style.color="green";
      t[left].style.color="green";
      t[left].style.transform = "scale(1.1)";
      t[pivotindex].style.transform = "scale(1.1)";
      [t[left],t[pivotindex]]=[t[pivotindex],t[left]];
      t[left].style.height=Number(t[left].innerHTML)*15+"px";
      t[pivotindex].style.height=Number(t[pivotindex].innerHTML)*15+"px"
      t[left].style.transform = "scale(1)";
      t[pivotindex].style.transform = "scale(1)";
      let i=left,j=right;
    setTimeout(()=>{
        while (i<pivotindex && j>pivotindex) {
            while (Number(t[i].innerHTML) <= Number(t[pivotindex].innerHTML)) {
                // t[i].style.backgroundColor="black";
                i++;
            }
            while (Number(t[j].innerHTML) > Number(t[pivotindex].innerHTML)) {
                //t[j].style.backgroundColor="black";
                j--;
            }
            if (i <pivotindex && j>pivotindex) {
                
                [t[i],t[j]]=[t[j],t[i]];
                t[j].style.height=Number(t[j].innerHTML)*15+"px";
                t[i].style.height=Number(t[i].innerHTML)*15+"px";
                i++;
                j--;
            }
        // await sleep(10);
    
        }
    },2000);
 
    return pivotindex;
}

function quickSort(t, left, right) {
    var index;
    if (left>=right) {
         return ;
    }
    
        index = partition(t, left, right); //index returned from partition
        // t[index].style.backgroundColor="green";
        // await sleep (3200);
        // t[index].style.backgroundColor="aqua";
        // if (left < index - 1) { //more elements on the left side of the pivot
        setTimeout(()=>{
            quickSort(t, left, index - 1);
        },1000);
        setTimeout(()=>{
            quickSort(t, index+1, right);
        },1000);
            // await sleep (1200);
        //}
        //if (index < right) { //more elements on the right side of the pivot
           
            // await sleep (3200);
        //}
}
