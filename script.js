//Nodes related to the password field
const revealImgPass = document.querySelector('label[for="password"] ~ img[src$="show.png"]');
const hideImgPass = document.querySelector('label[for="password"] ~ img[src$="hide.png"]');
const password = document.querySelector('#password');

//Nodes related tot the confirm password field
const revealImgConfirm = document.querySelector('label[for="confirm-password"] ~ img[src$="show.png"]');
const hideImgConfirm = document.querySelector('label[for="confirm-password"] ~ img[src$="hide.png"]');
const confirmPass = document.querySelector('#confirm-password');

/**
 * Checks if password fields match
 * 
 * @returns if password fields are valid or not
 */
function validatePasswordConfirmation(){ 
    const errorMessage = document.querySelector('#confirm-password + p');

        if(confirmPass.value !== password.value){
            //Give confirm password border so user will see its invalid
            confirmPass.style.border = "2px solid var(--invalid-color)";
            //Displays message letting user know
            errorMessage.style.visibility = "visible";
            return false;
        } else {
            
           return true;
        }
}

/**
 * Changes input types of password fields when 
 * hide/reveal icon is clicked. Also alternates 
 * between the two buttons on click.
 */
function passwordVisibility(){
    
    //Adds listeners to img elements of both password fields
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

/**
 * Callback function
 * 
 * Changes input type of password field
 */
function changeInputTypePass(){

    if(password.type == 'password'){
        password.removeAttribute('type');
        password.type = 'text';

    } else{
        password.removeAttribute('type');
        password.type = 'password';

    }
}

/**
 * Callback function
 * 
 * Changes input type of confirm password field
 */
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
