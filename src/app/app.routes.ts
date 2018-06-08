import { Routes, RouterModule } from '@angular/router';
import { ListaCategoriaComponent } from './listaCategorias/listaCategorias.component';
import { ListaGifsComponent } from './listaGifs/listaGifs.component'

const appRoutes : Routes = [
    {path: '', component: ListaCategoriaComponent},
    {path: 'lista-gifs/:termo', component: ListaGifsComponent},
    {path:'**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);