import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Proposal } from './proposal';

@Injectable({ providedIn: 'root' })
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals';

  constructor(private http: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.http
      .get<Proposal[]>(this.proposalsUrl)
      .pipe(catchError(this.handleError));
  }

  getProposal(id: number) {
    return this.http.get<Proposal>(`${this.proposalsUrl}/${id}`);
  }

  createProposal(proposal: Proposal) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(proposal)
    const options = {
      headers: headers,
    }

    return this.http.post(this.proposalsUrl, body, options);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
