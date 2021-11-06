const form = document.querySelector('.ad-form');
function setInactiveState(){
  const inputForm =form.querySelectorAll('input');
  for(let i = 0; i < inputForm.length; i++){
    inputForm[i].disabled = true;
  }
}

export {setInactiveState};

function setActiveState(){
  const inputForm =form.querySelectorAll('input');
  for(let i = 0; i < inputForm.length; i++){
    inputForm[i].disabled = false;
  }
}

export {setActiveState};
