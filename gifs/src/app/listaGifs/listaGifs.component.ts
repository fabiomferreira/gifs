import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'

@Component ({
    moduleId: module.id,
    selector: 'lista-gifs',
    templateUrl: './listaGifs.component.html'
})

export class ListaGifsComponent {
    gifs : Object[] = [];
    urlBase = "http://api.giphy.com/v1/gifs/search?q=";
    termo: string;
    key = "O8RhkTXfiSPmSCHosPAnhO70pdnHUiWn";
    private sub: any;
    constructor(http: Http, private route: ActivatedRoute){
        this.sub = this.route.params.subscribe(params => {
            this.termo = params['termo'];
            console.log(this.termo);
        });
        http
        .get(this.urlBase + this.termo + 
            "&api_key=" + this.key + "&limit=10")
        .map(res => res.json())
        .subscribe(gifs => 
            this.gifs = gifs['data'],
            erro => console.log(erro)
        );
        
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}