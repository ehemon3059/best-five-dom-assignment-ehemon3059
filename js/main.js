const nameList = [];

const tottalNum = '';


function display(list){

  const nameUl=  document.getElementById('player-name-ul');
  nameUl.innerHTML = '';
    for(let i =0 ; i<list.length ; i++){
        const playerName = list[i];
       // console.log(playerName);


        // if(total-number == 5){
        //     alert("Stop to Add Plear");
        //     return;
        // }
      

        const li = document.createElement('li');

        li.innerHTML=`
       
        <li>${playerName}</li>
        `;
        nameUl.appendChild(li);

       // console.log(nameUl);
    }
}
  let totalNumber= 0;
  function addToName(element){
      element.setAttribute('disabled','');

      if (totalNumber < 5){

      
      const name = element.parentNode.children[0].innerText;
      const mylist = nameList.push(name);
       totalNumber =  document.getElementById('total-number').innerHTML = nameList.length;

        display(nameList);
        
       return totalNumber;

      } else {
        
        alert("can't add player more then 5");
        return;
      }

          
  }

  //working with Budget section 
  document.getElementById('btn-cal').addEventListener('click',function(){


    const perPlayerInputValue = document.getElementById('perPlayerAmount');
    const perPlayerInputValueString = perPlayerInputValue.value;
    const newPlayerInputValue = parseFloat(perPlayerInputValueString);
   
  
    perPlayerInputValue.value = '';
    
        if(isNaN(newPlayerInputValue)){
          alert("Please Provide a number");
          return;
        }
  
        const playerExpnsive = document.getElementById('showPlayerAmount');
        const playerExpnsiveString = playerExpnsive.innerText;
      
  
      
        const totalNN = document.getElementById('total-number').innerText;
        const totalNNString  = parseFloat(totalNN);
     
  
        const currentPlayerExpensive = totalNNString * newPlayerInputValue;
        playerExpnsive.innerText = currentPlayerExpensive;
  
       
  
    });