import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'document-editor';
}
