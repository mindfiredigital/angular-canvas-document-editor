import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [MyLibComponent,MatSliderModule], // Import the standalone component
  exports: [MyLibComponent], // Export it for external use
  providers: [DocumentService]
})
export class MyCanvasLibModule {}
