import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminhGuard } from './authentication/admin.guard'
import { AuthGuard } from './authentication/authentication.guard'

@NgModule({
  providers: [ AuthGuard, AdminhGuard ],
  imports: [
    CommonModule
  ]
})
export class GuardsModule { }
