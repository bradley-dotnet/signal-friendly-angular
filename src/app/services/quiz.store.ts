import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Answer, Question } from './questions/question-factory.interface';
import { DogDataService } from './dog-data.service';
import { QuizFactoryService } from './quiz-factory.service';
import { QuizUpdaterService } from './quiz-updater.service';
import { QuizState } from './quiz-state.interface';

export const QuizStore = signalStore(
    withState<QuizState>({
        questions: [],
        breeds: []
    }),
    withMethods((store, data = inject(DogDataService), quizFactory = inject(QuizFactoryService), updater = inject(QuizUpdaterService)) => ({
        loadBreeds: rxMethod<void>(pipe(
            switchMap(() => data.getBreeds()),
            tap(breeds => patchState(store, { breeds: breeds}))
        )),
        getQuestions: () => patchState(store, { questions: quizFactory.createQuiz()}),
        handleAnswer: (question: Question, answer: Answer) => patchState(store, state => updater.updateQuiz(state, question, answer))
    })),
    withHooks((store) => ({
        onInit: () => {
            store.loadBreeds();
            store.getQuestions();
        }
    }))
)
