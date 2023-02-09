function copyServerIP() {
  navigator.clipboard.writeText('boxsteal22.minehut.gg')
    .then(() => {
      const alertContainer = document.querySelector('.alert-container');
      const content = document.querySelector('.content');
      alertContainer.style.display = 'block';
      alertContainer.style.top = '50%';
      alertContainer.style.left = '50%';
      alertContainer.style.transform = 'translate(-50%, -50%)';
      content.classList.add('backdrop-blur');
      alertContainer.classList.add('fadeIn');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

function okButton() {
  const alertContainer = document.querySelector('.alert-container');
  const content = document.querySelector('.content');
  alertContainer.style.display = 'none';
  content.classList.remove('backdrop-blur)
}
