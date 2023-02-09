//defining
const alertContainer = document.querySelector('.alert-container');
const content = document.querySelector('.content');
const okButton = document.querySelector('.ok-button');

//Ok Button
okButton.addEventListener('click', () => {
  const alertContainer = document.querySelector('.alert-container');
  const content = document.querySelector('.content');
  alertContainer.style.display = 'none';
  content.classList.remove('backdrop-blur');
});

//Alert-Container stuffs
function copyServerIP() {
  navigator.clipboard.writeText('boxsteal22.minehut.gg')
    .then(() => {
      const alertContainer = document.querySelector('.alert-container');
      const content = document.querySelector('.content');
      const okButton = document.querySelector('.ok-button');
      
      alertContainer.style.display = 'block';
      alertContainer.style.top = '50%';
      alertContainer.style.left = '50%';
      alertContainer.style.transform = 'translate(-50%, -50%)';
      content.classList.add('backdrop-blur');
  
      okButton.addEventListener('click', function() {
        alertContainer.style.display = 'none';
        content.classList.remove('backdrop-blur');
      });
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}
