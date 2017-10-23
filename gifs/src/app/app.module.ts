import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GradeModule } from './grade/grade.module';
import { CategoriaModule } from './categoria/categoria.module';
import { routing } from './app.routes';
import { ListaCategoriaComponent } from './listaCategorias/listaCategorias.component';
import { ListaGifsComponent } from './listaGifs/listaGifs.component';
import { GifModule } from './gif/gif.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriaComponent,
    ListaGifsComponent
  ],
  imports: [
    BrowserModule,
    GradeModule,
    CategoriaModule,
    GifModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
