import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-square',
  imports: [CommonModule],
  template: `
  <button  *ngIf="!value">{{ value }}</button>
  <button *ngIf="value == 'X'">{{ value }}</button>
  <button  *ngIf="value == 'O'">{{ value }}</button>
`,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
