class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  get form() {
    const form = document.createElement('form');
    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.disabled = 'true';

    const listItems = this.choices.map((choice, idx) => {
      const listItem = `
            <li>
                <input type="radio" name="answer" id="${idx}" value="${idx}" required>
                <label for="${idx}">${choice}</label>
            </li>`;
      return listItem;
    });

    form.innerHTML = `
        <h2>${this.question}</h2>
        <ul>${listItems.join('')}</ul>`;

    form.append(submitBtn);

    form.addEventListener('change', (e) => {
      if (e.currentTarget.elements['answer'] === '') {
        submitBtn.disabled = true;
      } else {
        submitBtn.disabled = false;
      }
    });

    return form;
  }

  checkAnswer(answer) {
    return parseInt(answer) === this.answer ? true : false;
  }
}

export default Question;