import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//importacion del navbar y footer
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    // los declaramos
        NavbarComponent,
        FooterComponent,
  ],
  imports: [
    // los importamos
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports:[
    // los exportamos
    FooterComponent,
    NavbarComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class SharedModule { }
