import { Component } from '@angular/core';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
// import { MyLibComponent } from '../../projects/my-lib/src/lib/my-lib.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-lib-app',
  standalone: true,
  imports: [    EditorFooterComponent,
    CanvasEditorComponent,
    EditorToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'document-editor';
}
