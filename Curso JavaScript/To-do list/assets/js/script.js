const task_form = document.getElementById('task-form');
const task_list = document.getElementById('task-list');

task_form.onsubmit = function(e) {
    e.preventDefault();
    const task_wrapper = document.getElementById('task-input');
    addTaskToList(task_wrapper.value);
}

function addTaskToList(task) {
    const task_container = document.createElement('div');
    const new_task = document.createElement('input');
    const task_label = document.createElement('label');
    const task_text_node = document.createTextNode(task);

    new_task.setAttribute('type', 'checkbox');
    new_task.setAttribute('name', task);
    new_task.setAttribute('id', task);

    task_label.setAttribute('for', task);
    task_label.appendChild(task_text_node);

    task_container.classList.add('task-item');
    task_container.appendChild(new_task);
    task_container.appendChild(task_label);

    task_list.appendChild(task_container);
}