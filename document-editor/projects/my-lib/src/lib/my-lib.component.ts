import { Component } from '@angular/core';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { CanvasEditorComponent } from "./components/canvas-editor/canvas-editor.component";

@Component({
    selector: 'lib-my-lib',
    standalone: true,
    template: `
    <p>my-lib works!</p>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `,
    styles: ``,
    imports: [EditorFooterComponent, CanvasEditorComponent]
})
export class MyLibComponent {}
