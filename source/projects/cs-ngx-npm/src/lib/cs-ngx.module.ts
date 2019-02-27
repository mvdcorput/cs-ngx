import { NgModule } from '@angular/core';
import { CsRippleDirective } from './cs-ripple.directive';
import { CsRippleService } from './cs-ripple.service';

@NgModule({
  declarations: [CsRippleDirective],
  imports: [
  ],
  providers: [CsRippleService],
  exports: [CsRippleDirective]
})
export class CsNgxModule { }
