const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

let currentQuestion = 0;

const questionList = [
  {
    question: 'Day la cau 1',
    answers: [
      'Dap an cau 1-1',
      'Dap an cau 1-2',
      'Dap an cau 1-3',
      'Dap an cau 1-4',
    ],
    trueAnswer: 0,
  },
  {
    question: 'Day la cau 2',
    answers: [
      'Dap an cau 2-1',
      'Dap an cau 2-2',
      'Dap an cau 2-3',
      'Dap an cau 2-4',
    ],
    trueAnswer: 2,
  },
  {
    question: 'Day la cau 3',
    answers: [
      'Dap an cau 3-1',
      'Dap an cau 3-2',
      'Dap an cau 3-3',
      'Dap an cau 3-4',
    ],
    trueAnswer: 0,
  },
  {
    question: 'Day la cau 4',
    answers: [
      'Dap an cau 4-1',
      'Dap an cau 4-2',
      'Dap an cau 4-3',
      'Dap an cau 4-4',
    ],
    trueAnswer: 1,
  },
];

const handleCheckAnswer = () => {
  const itemSelected = [...$All('[name=answer]')]
    .map((item, index) => (item.checked ? index : undefined))
    .filter((item) => item !== undefined);

  if (itemSelected.length === 0) return alert('chon cau tra loi di ban oi');

  if (questionList[currentQuestion].trueAnswer === itemSelected[0]) {
    if (currentQuestion === questionList.length - 1) {
      alert('ban da thang!!!');
      return location.reload();
    }
    displayQuestion(currentQuestion + 1);
    currentQuestion++;
    return alert('ban da tra loi dung');
  }
  alert('ban da tra loi sai');
  return location.reload();
};

const displayQuestion = (id) => {
  if (id === questionList.length - 1) {
    $('#skip').style.display = 'none';
  }
  $All('[name=answer]').forEach((item) => {
    item.checked = false;
    item.disabled = false;
  });
  $('#question').innerText = questionList[id].question;
  $All('.answer').forEach((item, index) => {
    item.innerText = index + ') ' + questionList[id].answers[index];
  });
};

const handleSkipQuestion = () => {
  displayQuestion(currentQuestion + 1);
  currentQuestion++;
  $('#skip').style.display = 'none';
};

const handleRemove2Answer = () => {
  const willBeRemovedItems = [0, 1, 2, 3].filter(
    (item) => item !== questionList[currentQuestion].trueAnswer
  );
  willBeRemovedItems.splice(Math.round(Math.random()), 2).map((item) => {
    $All('[name=answer]')[item].disabled = true;
  });
  $('#remove2answer').style.display = 'none';
};

$('#check').onclick = handleCheckAnswer;
$('#skip').onclick = handleSkipQuestion;
$('#remove2answer').onclick = handleRemove2Answer;

displayQuestion(currentQuestion);
