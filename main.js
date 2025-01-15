$(document).ready(function () {
    $('#task-form').on('submit', function (e) {
        e.preventDefault();

        const taskText = $('#task-input').val().trim();
        if (taskText === '') return;

        const taskItem = $(`
            <li>
                <i class="bi bi-check-circle"></i>
                <span>${taskText}</span>
                <button class="delete-btn">
                    <i class="bi bi-trash"></i>
                </button>
            </li>
        `);

        taskItem.on('click', function () {
            $(this).toggleClass('completed');
        });

        taskItem.find('.delete-btn').on('click', function (e) {
            e.stopPropagation();
            $(this).parent().fadeOut(300, function () {
                $(this).remove();
            });
        });

        $('#task-list').append(taskItem);
        $('#task-input').val('');
    });
});
