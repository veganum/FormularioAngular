import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EjemploRoutingModule } from './ejemplo-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [BasicosComponent, CustomMinDirective],
  imports: [CommonModule, FormsModule, EjemploRoutingModule],
})
export class EjemploModule {}
