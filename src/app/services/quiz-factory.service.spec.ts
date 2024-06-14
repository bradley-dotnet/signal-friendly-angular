import { Question, QuestionFactory } from './questions/question-factory.interface';
import { QuizFactoryService } from './quiz-factory.service';

class TestFactory implements QuestionFactory {
  constructor(private question: string) {}

  createQuestion(): Question {
    return {
      question: this.question,
      answers: []
    }
  }

}

describe('QuizFactoryService', () => {
  let factories: QuestionFactory[] = [
    new TestFactory('Q1'),
    new TestFactory('Q2'),
    new TestFactory('Q3'),
    new TestFactory('Q4'),
  ]
  let service: QuizFactoryService;

  beforeEach(() => {
    service = new QuizFactoryService(factories);
  });

  it('should use all factories', () => {
    const quiz = service.createQuiz();
    const questions = quiz.map(q => q.question);

    expect(factories.every(f => questions.includes(f.createQuestion().question))).toBeTrue();
  });

  it('should not return two equivalent quizzes back-to-back', () => {
    const quiz = service.createQuiz();
    const secondQuiz = service.createQuiz();

    expect(!quiz.every((factory, index) => secondQuiz[index] === factory));
  });
});
