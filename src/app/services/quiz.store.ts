import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Answer, Question } from './questions/question-factory.interface';
import { Breed } from '../model/breed.interface';
import { DogDataService } from './dog-data.service';
import { QuizFactoryService } from './quiz-factory.service';
interface QuizState {
    questions: Question[];
    remainingBreeds: Breed[];
}

export const QuizStore = signalStore(
    withState<QuizState>({
        questions: [],
        remainingBreeds: []
    }),
    withMethods((store, data = inject(DogDataService), quizFactory = inject(QuizFactoryService)) => ({
        loadBreeds: rxMethod<void>(pipe(
            switchMap(() => data.getBreeds()),
            tap(breeds => patchState(store, { remainingBreeds: breeds}))
        )),
        getQuestions: () => patchState(store, { questions: quizFactory.createQuiz()}),
        handleAnswer: (answer: Answer) => patchState(store, { remainingBreeds: answer.filter(store.remainingBreeds())})
    })),
    withHooks((store) => ({
        onInit: () => {
            store.loadBreeds();
            store.getQuestions();
        }
    }))
)