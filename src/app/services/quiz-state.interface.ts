import { Breed } from '../model/breed.interface';
import { Question } from './questions/question-factory.interface';

export interface QuizState {
    questions: Question[];
    breeds: Breed[];
}