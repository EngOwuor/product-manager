import { flatten } from '@angular/compiler';
import {Component, OnInit} from '@angular/core'
import { SafeResourceUrl } from '@angular/platform-browser';
import { from } from 'rxjs';
import{IProduct} from './product';
import{ProductService} from './product.service'

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle  = 'Product List'
  imageWidth:number = 50;
  imageMargine:number=2;
  showImage:boolean = false;
  _listFilter:string;
  errorMessage:string;
  
  constructor(private productService:ProductService){}
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this._listFilter? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts:IProduct[];
  products:IProduct[] ;
  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  };
  ngOnInit():void{
    this.productService.getProducts().subscribe({
      next:data =>{
        this.products=data;
        this.filteredProducts=this.products;
      },
      error:err=>this.errorMessage=err
    });

  }
  
  
  onNotified(measage:string):void{
    this.pageTitle='Product List ' +  measage;
  }
    
}