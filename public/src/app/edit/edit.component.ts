import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  product: any;
  nameError: string;
  priceError: string;
  quantityError: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.product = {name:"", imgUrl:"", price:""};
    this._route.params.subscribe((params: Params)=>{
      console.log("params is:",params);
      console.log("id is:",params.id);
      this.id = params.id;
    });
    this.getProductInfo(this.id);
  }
  getProductInfo(id: string){
    let observable = this._httpService.getProductByID(id);
    observable.subscribe(data => {
      console.log("Product retrieved successfully", data);
      this.product = data['product'];
    })
  }
  updateProduct(id: string){
    let observable = this._httpService.updateProduct(id, this.product);
    observable.subscribe(data => {
      if(data['errors']){
        if(data['errors']['name']){
          this.nameError=data['errors']['name']['message'];
        }
        if(data['errors']['price']){
          this.priceError=data['errors']['price']['message'];
        }
        if(data['errors']['quantity']){
          this.quantityError=data['errors']['quantity']['message'];
        }
      }
      else{
        console.log("Updated task", data);
        this._router.navigate(['/list']);
      }
    });
  }
  reset(){
    this.getProductInfo(this.id);
  }
}
