const form = document.getElementById('form');
const input = form.querySelector('input');
const ul = document.getElementById('myUl');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'remove';

  if(text == '') {
    alert('Please enter a string');
  }

    else {
    ul.appendChild(li);
    li.textContent= text;
    li.appendChild(deleteButton);
    input.value = '';
    }

})

ul.addEventListener('click', (e) => {
  if(e.target.textContent === 'remove') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);

  }
})
