import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
})
export class ProposalNewComponent {
  proposal = new Proposal();
  submitted: boolean = false;

  constructor(private proposalService: ProposalService) {}

  createProposal(proposal: Proposal) {
    this.submitted = true;
    
    this.proposalService
      .createProposal(proposal)
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error(error),
      });
  }
}
