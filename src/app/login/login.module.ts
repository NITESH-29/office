import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormComponent } from '../form/form.component';
import { FormValidationsService } from '../service/form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
              LoginRoutingModule,
             FormsModule,ReactiveFormsModule ],
    declarations: [LoginComponent,FormComponent],
    providers:[FormValidationsService]
})
export class LoginModule {}
