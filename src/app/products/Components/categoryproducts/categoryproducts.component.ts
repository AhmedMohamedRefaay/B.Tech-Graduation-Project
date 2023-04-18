import { Component , OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import {Location} from '@angular/common';
import { ProductServicesService } from '../../Services/product-services.service';
import { Iproduct } from '../../Models/iproduct';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { IproductDto } from '../../Models/iproduct-dto';
@Component({
  selector: 'app-categoryproducts',
  templateUrl: './categoryproducts.component.html',
  styleUrls: ['./categoryproducts.component.css']
})
export class CategoryproductsComponent  implements OnInit {
  currentCatID:number=0;
  currentCulture: string;
  [x: string]: any;

  constructor(private activatedRoute:ActivatedRoute,private translate: TranslateService,private productservice:ProductServicesService,private location:Location,private route:Router,){
    this.currentCulture = 'en';
  }
  // selectedBrands: string[] = [];
  categoryId: number | undefined;
  // brands: string[] = ['Apple', 'Samsung', 'Redmi'];
  //prod:any|undefined=undefined;
  prod:any[]=[];
  minPrice: number =0;
  maxPrice: number = 999999;

   selectedCatID : number = 0;
  // selectedCatID==resivedCatID
   receivedCateogryID:number = 0 ;
    prdListOfCat:Iproduct[]=[];
    ngOnInit(): void {
      //let productID=this.activatedRoute.snapshot.paramMap.get('prdID');
  this.currentCatID= (this.activatedRoute.snapshot.paramMap.get('categoryId'))?Number(this.activatedRoute.snapshot.paramMap.get('categoryId')):0;
  //let ReturnedProd=this.productservice.GetProductByCatId(this.currentCatID);
  this.productservice.GetProductByCatId(this.currentCatID).subscribe(data=>{
    this.prod=data
  })
  this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.currentCulture = event.lang;
  });
    }

    filterProducts() {
      this.prod = this.prod.filter(product => {
        return product.price >= this.minPrice && product.price <= this.maxPrice;

      });
      console.log("wooow");

    }
    productsToShow() {
      // return this.showDiscountedProducts ? this.discountedProducts : this.products;
      this.prod =this.prod.filter(product => {
        return product.discount != null && product.discount != 0;

      });
    }




  OpenPrdDetails(id:number){
    this.route.navigate(['ProductDetails',id])
  }



}

