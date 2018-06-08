import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'

@Component ({
    moduleId: module.id,
    selector: 'lista-gifs',
    templateUrl: './listaGifs.component.html'
})

export class ListaGifsComponent {
    gifs : Object[] = [];
    urlBase = "http://api.giphy.com/v1/gifs/random?tag=";
    termo: string;
    key = "O8RhkTXfiSPmSCHosPAnhO70pdnHUiWn";
    @ViewChild('filtro') filtro: ElementRef;
    input: string = '';
    private sub: any;
    constructor(http: Http, private route: ActivatedRoute){
        this.sub = this.route.params.subscribe(params => {
            this.termo = params['termo'];
        });
        for(var i = 0; i < 10; i++){
            http
            .get(this.urlBase + this.termo + 
                "&api_key=" + this.key)
            .map(res => res.json())
            .subscribe(gifs => 
                this.gifs.push(gifs['data']),
                erro => console.log(erro)
            );
        }    
        console.log(this.gifs);
        
    }
    

    submit(){
        this.input = this.filtro.nativeElement.value;
        console.log(this.input);
    }
}