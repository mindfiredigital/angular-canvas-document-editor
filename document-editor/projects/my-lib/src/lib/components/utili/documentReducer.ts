import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface DocumentState {
  documentId: string;
  title: string;
  reloadRecentDoc: boolean;
  margins: number[];
}

const initialState: DocumentState = {
  documentId: '',
  title: '',
  reloadRecentDoc: false,
  margins: [],
};

export class DocumentService {
  private documentSubject = new BehaviorSubject<DocumentState>(initialState);

  constructor() {}

  getDocumentState() {
    return this.documentSubject.asObservable().pipe(
      distinctUntilChanged() // Ensure only distinct state changes are emitted
    );
  }

  setDocumentTitle(title: string) {
    this.documentSubject.next({ ...this.documentSubject.value, title });
  }

  reloadRecentDoc(reload: boolean) {
    this.documentSubject.next({
      ...this.documentSubject.value,
      reloadRecentDoc: reload,
    });
  }

  setDocumentMargins(margins: any) {
    this.documentSubject.next({ ...this.documentSubject.value, margins });
  }

  setDocumentId(documentId: string) {
    this.documentSubject.next({ ...this.documentSubject.value, documentId });
  }

  getMargins() {
    
  }
}
