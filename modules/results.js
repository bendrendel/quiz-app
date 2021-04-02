function results(numQuestions, rightAnswers) {
  const form = document.createElement('form');
  form.innerHTML = `
    <p>You answered ${rightAnswers}/${numQuestions} questions correctly</p>
    <input type="submit" value="Reload">`;
  return form;
}

export default results;