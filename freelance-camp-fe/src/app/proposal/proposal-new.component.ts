import { Component } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
    selector: 'proposal-new',
    templateUrl: 'proposal-new.component.html'
})

export class ProposalNewComponent {
    proposal = new Proposal()
}