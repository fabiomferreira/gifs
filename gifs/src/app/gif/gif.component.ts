import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gif',
    templateUrl: './gif.component.html'
})

export class GifComponent {
    @Input() url : string = '';
}