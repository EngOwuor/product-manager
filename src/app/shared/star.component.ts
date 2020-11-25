import { Component,OnChanges,EventEmitter,Input,Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth:number;
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating * 75/5
    }
    onClick():void{
        this.notify.emit(`The rating ${this.rating} was clicked`);
    }

}