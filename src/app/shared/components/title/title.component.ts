import { Component, Input } from '@angular/core';

@Component({
  selector: 'cia-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input()
  title: { name: string; description?: string } = { name: 'Title' };
}
