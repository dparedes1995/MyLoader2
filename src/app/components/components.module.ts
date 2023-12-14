import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [HeaderComponent,LoaderComponent],
  exports: [HeaderComponent,LoaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
