import { Component } from '@angular/core';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  template: `
    <p>my-lib works!</p>
    <lib-editor-footer></lib-editor-footer>
  `,
  styles: ``,
  imports: [EditorFooterComponent],
})
export class MyLibComponent {}
