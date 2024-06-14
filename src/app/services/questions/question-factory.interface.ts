import { Breed } from '../../model/breed.interface';

export interface Answer {
    label: string;
    filter: (breeds: Breed[]) => Breed[] 
}

export interface Question {
    question: string;
    answers: Answer[]
}

export abstract class QuestionFactory {
    abstract createQuestion(): Question;
}