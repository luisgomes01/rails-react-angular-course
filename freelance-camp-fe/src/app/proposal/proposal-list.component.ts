import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15,
    'Proposal One',
    'http://portfolio.jordanhudgens.com',
    'Ruby on Rails',
    150,
    120,
    15,
    'luisgomes@dev.com'
  );

  proposalTwo: Proposal = new Proposal(
    10,
    'Proposal Two',
    'http://portfolio.jordanhudgens.com',
    'Ruby on Rails',
    100,
    122,
    18,
    'luisgomes@dev.com'
  );

  proposalThree: Proposal = new Proposal(
    22,
    'Proposal Three',
    'http://portfolio.jordanhudgens.com',
    'Ruby on Rails',
    130,
    111,
    9,
    'luisgomes@dev.com'
  );

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
  ];
}
