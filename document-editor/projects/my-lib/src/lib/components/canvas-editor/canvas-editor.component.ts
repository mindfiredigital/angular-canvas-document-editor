import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import {
  DOMEventHandlers,
  EditorMode,
  IElement,
  PageMode,
} from '@mindfiredigital/canvas-editor';
import { MarginRulerComponent } from '../margin-ruler/margin-ruler.component';
@Component({
  selector: 'lib-canvas-editor',
  standalone: true,
  imports: [MarginRulerComponent],
  templateUrl: './canvas-editor.component.html',
  styleUrl: './canvas-editor.component.css',
})
export class CanvasEditorComponent implements OnInit {
  props: any = {};
  documentId: string = '0';
  canvasEditorRef: any;
  constructor() {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    // this.documentId = params['documentId'];
    this.canvasEditorRef = document.getElementById('canvasEditorRef');
    // });

    const container = this.canvasEditorRef;

    const editorOptions = {
      height: 1056,
      width: 816,
      mode: EditorMode.EDIT,
      pageMode: PageMode.PAGING,
      pageNumber: {
        format: '{pageNo}/{pageCount}',
      },
      minSize: 1,
      maxSize: 72,
    };

    // container.addEventListener('mouseup', (e: Event) => {
    //   this.props.onSelect &&
    //     this.props.onSelect(DOMEventHandlers.getSelectedText());
    // });

    // container.addEventListener('keydown', (e: Event) => {
    //   const text = DOMEventHandlers.getContent()?.data?.main;
    //   this.props.onChange && this.props.onChange(text[0].value);
    // });

    DOMEventHandlers.register(this.canvasEditorRef, [], editorOptions);
  }
}
