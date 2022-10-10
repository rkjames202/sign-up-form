const revealImgPass = document.querySelector('label[for="password"] ~ img[src$="show.png"]');
const hideImgPass = document.querySelector('label[for="password"] ~ img[src$="hide.png"]');
const password = document.querySelector('#password');

const revealImgConfirm = document.querySelector('label[for="confirm-password"] ~ img[src$="show.png"]');
const hideImgConfirm = document.querySelector('label[for="confirm-password"] ~ img[src$="hide.png"]');
const confirmPass = document.querySelector('#confirm-password');

function validatePasswordConfirmation(){ 
    const errorMessage = document.querySelector('#confirm-password + p');
        if(confirmPass.value !== password.value){
            confirmPass.style.border = "2px solid var(--invalid-color)";
            errorMessage.style.visibility = "visible";
            alert('here');
            return false;
        } else {
            
           return true;
        }
}

function passwordVisibility(){
    
    revealImgPass.addEventListener('click', changeInputTypePass);
    hideImgPass.addEventListener('click', changeInputTypePass);

    revealImgConfirm.addEventListener('click', changeInputTypeConfirm);
    hideImgConfirm.addEventListener('click', changeInputTypeConfirm);
    

    //Show reveal buttons when password fields are initially populated
    confirmPass.addEventListener('input', () => {
        if(confirmPass.value.length == 1){
            revealImgConfirm.style.visibility = 'visible';
        } else if(!confirmPass.value){
            revealImgConfirm.style.visibility = 'hidden';
            hideImgConfirm.style.visibility = 'hidden';
        }
      });

      password.addEventListener('input', () => {
        if(password.value.length == 1){
            revealImgPass.style.visibility = 'visible';
          } else if(!password.value){
            revealImgPass.style.visibility = 'hidden';
            hideImgPass.style.visibility = 'hidden';
          }
      }); 

      //Toggle between reveal pass image, and hide pass image
      revealImgPass.addEventListener('click', () => {
            revealImgPass.style.visibility = 'hidden';
            hideImgPass.style.visibility = 'visible';
      });

      hideImgPass.addEventListener('click', () => {
            hideImgPass.style.visibility = 'hidden';
            revealImgPass.style.visibility = 'visible';
      });

      revealImgConfirm.addEventListener('click', () => { 
            revealImgConfirm.style.visibility = 'hidden';
            hideImgConfirm.style.visibility = 'visible';
      });

      hideImgConfirm.addEventListener('click', () => {
            hideImgConfirm.style.visibility = 'hidden';
            revealImgConfirm.style.visibility = 'visible';
      });

      
}

function changeInputTypePass(){

    if(password.type == 'password'){
        password.removeAttribute('type');
        password.type = 'text';

    } else{
        password.removeAttribute('type');
        password.type = 'password';

    }
}

function changeInputTypeConfirm(){
    if(confirmPass.type == 'password'){
        confirmPass.removeAttribute('type');
        confirmPass.type = 'text';
    } else{
        confirmPass.removeAttribute('type');
        confirmPass.type = 'password';
    }   
}


passwordVisibility();
