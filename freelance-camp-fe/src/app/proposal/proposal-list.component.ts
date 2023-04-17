import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { timer } from 'rxjs';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[] = [];
  errorMessage: string;

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    const interval = timer(0, 5000);
    interval.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals().subscribe({
      next: (proposals) => (this.proposals = proposals),
      error: (error) => (this.errorMessage = <any>error),
    });
  }
}
