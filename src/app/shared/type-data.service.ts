import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Type } from './type';

@Injectable()
export class TypeDataService {
  private typesUrl = 'api/types';

  constructor(private http: Http) { }

  getTypes(): Observable<Type[]> {
    return this.http.get(this.typesUrl).map((res: Response) => res.json().data);
  }
}
