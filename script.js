let btn1 = document.querySelector('.btn1');
let email = document.querySelector('input');

btn1.onclick = function () {
  if (email.value !== '') {
    email.value = '';
  } else {
    alert('Please enter a valid email address');
  }
};
