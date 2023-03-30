import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'document',
  templateUrl: 'documents.component.html',
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'First Document',
      description: 'First Doc description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com',
    },
    {
      title: 'Second Document',
      description: 'Second Doc description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com',
    },
    {
      title: 'Third Document',
      description: 'Third Doc description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com',
    },
  ];
}
