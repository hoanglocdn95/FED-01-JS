// Bài 2
// tạo ứng dụng game visual novel mini theo kịch bản sau, tùy vào câu trả lời thì sẽ đưa tới câu hỏi tiếp theo phù hợp

// Bạn là đàn ông phải không?
// Phải: Bạn có bạn gái rồi phải không?
//  Phải: 2 bạn đã hôn chưa?
//    Phải: bạn có định tiến xa hơn không?
// Không: bạn có bị yếu sinh lý không?
//  Không: Bạn không biết tán gái?
//  Phải: bạn có đang thích ai không?
// Không: bạn có giàu không?
// Không: Bạn có bạn trai rồi phải không?
// Phải: 2 bạn đã đẩy xe bò với nhau chưa?
// Phải: bạn định lấy chồng trong năm nay không?
// Không: bạn định chia tay không?
// Không: Có người đang tán bạn?
// Phải: bạn có thích người đó không?
// Không: bạn có đang thích ai không?

const novelScript = {
  0: 'Bạn là đàn ông phải không?',
  '0y': 'Bạn có bạn gái rồi phải không?',
  '0yy': '2 bạn đã hôn chưa?',
  '0yyy': 'bạn có định tiến xa hơn không?',
  '0yyn': 'bạn có bị yếu sinh lý không?',
  '0yn': 'Bạn không biết tán gái?',
  '0yny': 'bạn có đang thích ai không? ',
  '0ynn': 'bạn có giàu không?',
  '0n': 'Bạn có bạn trai rồi phải không?',
  '0ny': '2 bạn đã đẩy xe bò với nhau chưa?',
  '0nyy': 'bạn định lấy chồng trong năm nay không?',
  '0nyn': 'bạn định chia tay không?',
  '0nn': 'Có người đang tán bạn?',
  '0nny': 'bạn có thích người đó không?',
  '0nnn': 'bạn có đang thích ai không?',
};

const checkNextQuestion = (keyCurrentQuestion, isYes) => {
  return {
    content: novelScript[`${keyCurrentQuestion}${isYes ? 'y' : 'n'}`],
    key: `${keyCurrentQuestion}${isYes ? 'y' : 'n'}`,
  };
};

const startGame = () => {
  let isYes = confirm(novelScript[0]);

  let questionItem = checkNextQuestion('0', isYes);
  do {
    isYes = confirm(questionItem.content);
    questionItem = checkNextQuestion(questionItem.key, isYes);
  } while (questionItem?.content);
  return alert('This game is over!!!');
};

startGame();
