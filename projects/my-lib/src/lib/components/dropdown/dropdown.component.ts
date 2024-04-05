import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Dropdown } from '../../interface/dropdown';
@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() name: string | undefined;
  @Input() items: Dropdown[] | undefined;
  @Output() selectedOption = new EventEmitter<string>();

  public onChange(event: any) {
    this.selectedOption.emit(event.target.value);
  }
}
