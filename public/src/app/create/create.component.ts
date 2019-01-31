import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any;
  nameError: string;
  priceError: string;
  quantityError: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}
  ngOnInit() {
    this.newProduct = { name: "", price: "" };
    this._route.params.subscribe((params: Params) => {
        console.log(params['id'])
    });
  }
  goHome() {
    this._router.navigate(['/products']);
  }
  createProduct(){
    let observable = this._httpService.createProduct(this.newProduct);
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
        console.log("Got data from post back", data);
        this.newProduct = {name:"", price: ""};
        this.goHome();
      }
    });
  }
}
