import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { MatSliderModule } from '@angular/material/slider';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';

@NgModule({
  declarations: [MyLibComponent,
    
    ], // Import the standalone component
  exports: [MyLibComponent], // Export it for external use
  providers: [DocumentService],
  imports: [EditorFooterComponent,CanvasEditorComponent,EditorToolbarComponent]
})
export class MyCanvasLibModule {}
