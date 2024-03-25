const links = document.getElementsByClassName('link');
const bd = document.querySelector('body');
const titles = document.getElementsByClassName('title');
const lista = document.getElementById('list-area');
const tasks = document.getElementsByClassName('task-txt-wrap');
const subtexts = document.getElementsByClassName('subtext');
const form = document.getElementById('form-area');

function showForm() {
    if (form.style.display === "none") {
        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        form.style.textAlign = "center";
        form.style.position = "absolute";
        form.style.top = "14%";
        form.style.bottom = "0";
        form.style.left = "0";
        form.style.right = "0";
        form.style.margin = "auto";
    } else {
        form.style.display = "none";
    }
}

function post() {
    const titleInput = document.querySelector('.textbox[alt="title"]');
    const subtextInput = document.querySelector('.textbox[alt="subtext"]');
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    const taskTextWrap = document.createElement('div');
    taskTextWrap.classList.add('task-txt-wrap');
    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = titleInput.value;
    const subtextElement = document.createElement('p');
    subtextElement.classList.add('subtext');
    subtextElement.textContent = subtextInput.value;
    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
    taskTextWrap.appendChild(titleElement);
    taskTextWrap.appendChild(subtextElement);
    taskTextWrap.appendChild(dateElement);
    const actionCont = document.createElement('div');
    actionCont.classList.add('action-cont');
    const checkImg = document.createElement('img');
    checkImg.classList.add('action');
    checkImg.id = 'Check';
    checkImg.src = 'Check.png';
    const xImg = document.createElement('img');
    xImg.classList.add('action');
    xImg.id = 'X';
    xImg.src = 'X.png';
    actionCont.appendChild(checkImg);
    actionCont.appendChild(xImg);
    newTask.appendChild(taskTextWrap);
    newTask.appendChild(actionCont);
    checkImg.addEventListener('click', function() {
        const taskElement = this.closest('.task');
        const taskTextWrap = taskElement.querySelector('.task-txt-wrap');
        taskTextWrap.style.backgroundColor = '#B1D2A1';
        taskElement.style.transition = 'opacity 0.5s ease';
        taskElement.style.opacity = '0';
        setTimeout(() => {
            taskElement.remove();
        }, 500); 
    });
    xImg.addEventListener('click', function() {
        const taskElement = this.closest('.task');
        const taskTextWrap = taskElement.querySelector('.task-txt-wrap');
        taskTextWrap.style.backgroundColor = '#D2A1A1';
        taskElement.style.transition = 'opacity 0.5s ease';
        taskElement.style.opacity = '0';
        setTimeout(() => {
            taskElement.remove();
        }, 500);
    });
    const listArea = document.getElementById('list-area');
    listArea.appendChild(newTask);
    titleInput.value = '';
    subtextInput.value = '';
    form.style.display = 'none';
}