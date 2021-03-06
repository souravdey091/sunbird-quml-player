import { Observable } from 'rxjs';
import { Question } from './quml-library-interface';


export abstract class QuestionCursor {

  abstract getQuestions(identifiers: string[]): Observable<Question>;
  abstract getQuestion(identifier: string): Observable<Question>;

}