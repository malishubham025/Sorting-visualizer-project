function partition(t, left, right) {
    // var pivot   = t[Math.floor((right + left) / 2)], //middle element
        var pivotindex,
        i       = left, //left pointer
        j       = right,count=0; //right pointer
    for(var i=1;i<t.length;i++){
        if(t[0].innerHTML>=t[i].innerHTML){
            count++;
        }
    }
      pivotindex=s+count;
      var x=t[0].innerHTML;
      t[0].innerHTML=t[pivotindex].innerHTML;
      t[0].style.height=Number(t[0].innerHTML)*15+"px"
      t[pivotindex].innerHTML=x;
      t[pivotindex].style.height=Number(t[pivotindex].innerHTML)*15+"px"
    
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
            // swap(t, i, j); //sawpping two elements
            var f=t[i].innerHTML;
            t[i].innerHTML=t[j].innerHTML;
            t[j].style.height=Number(t[j].innerHTML)*15+"px";
            t[j].innerHTML=f;
            t[j].style.height=Number(t[j].innerHTML)*15+"px";
          
            i++;
            j--;
        }
    // await sleep(10);

    }
    return i;
}

function quickSort(t, left, right) {
    var index;
    if (left>=right) {
         return ;
    }
    else{
        index = partition(t, left, right); //index returned from partition
        // t[index].style.backgroundColor="green";
        // await sleep (3200);
        // t[index].style.backgroundColor="aqua";
        // if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(t, left, index - 1);
            // await sleep (1200);
        //}
        //if (index < right) { //more elements on the right side of the pivot
            quickSort(t, index+1, right);
            // await sleep (3200);
        //}
        
    }
    

    
   

}
