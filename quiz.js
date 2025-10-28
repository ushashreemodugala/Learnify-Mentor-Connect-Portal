function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    let score = 0;
    let totalQuestions = 0;

    for (let value of formData.values()) {
        score += parseInt(value);
        totalQuestions++;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h2>Result</h2>
        <div>Score: ${score} / ${totalQuestions}</div>
        <div class="chart-bar" style="width: ${ (score / totalQuestions) * 100 }%;"></div>
        `;
}
