function copyServerIP() {
  navigator.clipboard.writeText('boxsteal22.minehut.gg')
    .then(() => {
      const alertContainer = document.querySelector('.alert-container');
      const content = document.querySelector('.content');
      alertContainer.style.display = 'block';
      content.classList.add('backdrop-blur');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

function okButton() {
  const alertContainer = document.querySelector('.alert-container');
  const content = document.querySelector('.content');
  alertContainer.style.display = 'none';
  content.classList.remove('backdrop-blur');
}
