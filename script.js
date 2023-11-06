// const listItem = $('<li></li>');
// listItem.html(`<span>${taskTest}</span`);


// item.on("click", function(){
//     $(this).remove();
// });

// taskInput.on('keyup', function(event){
//     if(event.which === 13){
        
//     }
// })

// taskInput.on('keyup', function(event){
//     if(event.key === 'Enter'){
        
//     }
// })

// let field = $('#field');
// let text = field.val();
// field.val(""); 


$(document).ready(function() {
    const taskInput = $("#task");
    const addButton = $('#add-button');
    const taskList = $('#todo-list');

    // Обработчик клика на кнопке добавления дела
    addButton.on("click", addTask);

    // Обработчик нажатия клавиши Enter в поле ввода
    taskInput.on('keyup', function(event){
        if(event.key === 'Enter'){
            addTask()
        }
    })

    function addTask(){
        const taskText = taskInput.val().trim();

        if(taskText === ''){
            return;
        }

        const listItem = $('<li></li>');
        listItem.html(`
        <span>${taskText}</span>
        <button class="remove-button">Удалить</button>
        `);
        

        listItem.find('.remove-button').on('click', function(){
            listItem.remove();
        });

        taskList.append(listItem);
        taskInput.val('');
    }

})