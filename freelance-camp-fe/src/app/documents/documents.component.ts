import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { timer } from 'rxjs';

@Component({
  selector: 'document',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
})

export class DocumentsComponent implements OnInit {
  pageTitle: string = 'Document Dashboard';
  documents: Document[] = [];
  errorMessage: string;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    const interval = timer(0, 5000);
    interval.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe({
      next: (documents) => (this.documents = documents),
      error: (error) => (this.errorMessage = <any>error),
    });
  }
}
