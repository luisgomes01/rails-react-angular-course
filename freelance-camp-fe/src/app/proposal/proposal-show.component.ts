import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable, Subject, mergeMap, takeUntil } from 'rxjs';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
})
export class ProposalShowComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: HttpClient
  ) {}

  @Input()
  proposal: Proposal;
  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    let proposalRequest = this.route.params.pipe(
      mergeMap((params: Params) => {
        return this.proposalService.getProposal(+params['id']);
      })
    );

    proposalRequest
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response) => (this.proposal = response));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
