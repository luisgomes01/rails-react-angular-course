import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

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

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id]
    this.router.navigate(link)
  }
}
