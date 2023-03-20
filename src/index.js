document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e)=> {
    e.preventDefault();
    buildListItem(form.querySelector("#new-task-description").value);
    form.reset();
  });
});

function buildListItem(item){
  let listItem = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',deleteItem);
  btn.textContent = 'X';
  listItem.textContent = `${item} `;
  listItem.appendChild(btn);
  document.querySelector('#tasks').appendChild(listItem);
}

function deleteItem(e){
  e.target.parentNode.remove();
}

function clearAll(){
  let list = document.querySelector('ul');
  list.removeChild(list.firstElementChild);
}