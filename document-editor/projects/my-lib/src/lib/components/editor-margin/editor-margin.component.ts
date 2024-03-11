import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { DocumentState } from '../util/documentReducer';
// import { RootState } from '../redux/store';
import { createSelector } from '@ngrx/store';
// import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'lib-editor-margin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './editor-margin.component.html',
  styleUrl: './editor-margin.component.css',
})
export class EditorMarginComponent {
  documentId: string | null = null;
  document: DocumentState | undefined;
  open: boolean = false;
  margins: number[] = [0, 0, 0, 0];

  constructor(private dialog: MatDialog) {
    // this.route.params.subscribe((params) => {
    //   this.documentId = params['documentId'];
    // });
    // this.document = createSelector(
    //   (state: RootState) => state.document,
    //   (document) => document
    // ) as unknown as DocumentState;
    // this.margins = this.document.margins;
  }

  handleClickOpen(): void {
    this.open = true;
  }

  handleClose(): void {
    this.open = false;
  }

  updateMargins(): void {
    let margin: number[] = [...this.margins].map((ob) => (ob ? ob : 0));
    // Add your logic to update margins
    this.handleClose();
  }
}
