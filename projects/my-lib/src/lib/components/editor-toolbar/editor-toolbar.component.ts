import { Component, OnInit } from '@angular/core';
import {
  DOMEventHandlers,
  ListStyle,
  ListType,
  RowFlex,
} from '@mindfiredigital/canvas-editor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmphasisComponent } from '../emphasis/emphasis.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { FontTypeComponent } from '../font-type/font-type.component';
import { FONTS } from '../util/constant';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { Dropdown } from '../../interface/dropdown';
@Component({
  selector: 'lib-editor-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    EmphasisComponent,
    MatDividerModule,
    MatButtonToggleModule,
    MatListModule,
    FontTypeComponent,
    DropdownComponent,
  ],
  templateUrl: './editor-toolbar.component.html',
  styleUrl: './editor-toolbar.component.css',
})
export class EditorToolbarComponent implements OnInit {
  contentStyles: any;
  alignment: string = RowFlex.LEFT;
  listType: string = '';
  formats: string[] = [];
  fonts: Dropdown[] = FONTS;
  constructor() {}

  ngOnInit(): void {
    console.log(FONTS);

    // let interval: any;
    // const timeout = setTimeout(() => {
    //   interval = setInterval(() => {
    //     const data = DOMEventHandlers.getContentStyles();
    //     this.contentStyles = data;
    //   }, 100);
    // }, 1000);
  }

  addFormat(format: string): void {
    let selectedFormats;
    if (this.formats.indexOf(format) === -1) {
      selectedFormats = [...this.formats, format];
    } else {
      selectedFormats = this.formats.filter((item) => item !== format);
    }
    this.formats = selectedFormats;
  }

  undo() {
    DOMEventHandlers.handleUndo();
  }

  redo() {
    DOMEventHandlers.handleRedo();
  }

  subscript = () => {
    DOMEventHandlers.handleSubscript();
  };
  superscript = () => {
    DOMEventHandlers.handleSuperscript();
  };
  strikeout = () => {
    DOMEventHandlers.handleStrikeout();
  };

  leftAlign = () => {
    DOMEventHandlers.handleAlign(RowFlex.LEFT);
  };
  centerAlign = () => {
    DOMEventHandlers.handleAlign(RowFlex.CENTER);
  };
  rightAlign = () => {
    DOMEventHandlers.handleAlign(RowFlex.RIGHT);
  };
  justify = () => {
    DOMEventHandlers.handleAlign(RowFlex.ALIGNMENT);
  };
  list = (listType: string) => {
    if (listType === 'UL')
      DOMEventHandlers.handleList(ListType.UL, ListStyle.DECIMAL);
    else DOMEventHandlers.handleList(ListType.OL, ListStyle.DECIMAL);
  };
}
