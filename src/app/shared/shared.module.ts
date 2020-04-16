import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [CardComponent, TitleComponent],
  exports: [CardComponent, TitleComponent]
})
export class SharedModule {}
