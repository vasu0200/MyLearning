document.addEventListener('DOMContentLoaded', function () {
    const questionContainers = document.querySelectorAll('.question-container');

    questionContainers.forEach(container => {
        const question = container.querySelector('.question');
        const answer = container.querySelector('.answer');

        question.addEventListener('click', function () {
            container.classList.toggle('active');
        });
    });
});
