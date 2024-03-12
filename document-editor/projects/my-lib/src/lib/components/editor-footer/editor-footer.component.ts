import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'lib-editor-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './editor-footer.component.html',
  styleUrl: './editor-footer.component.css',
})
export class EditorFooterComponent {}
