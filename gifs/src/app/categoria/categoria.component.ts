import { Component, Input } from '@angular/core';


@Component ({
    moduleId: module.id,
    selector: 'categoria',
    templateUrl:'./categoria.component.html'
})

export class CategoriaComponent {
    @Input() titulo : string;
    @Input() foto : string;
}