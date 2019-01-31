import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  product: any;
  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.product={name:"", quantity:"", price:""};
    this._route.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.getProductInfo(this.id);
    });
  }
  getProductInfo(id: string){
    let observable = this._httpService.getProductByID(id);
    observable.subscribe(data => {
      console.log("Product retrieved successfully", data);
      this.product = data['product'];
    })
  }
  goHome() {
    this._router.navigate(['/products']);
  }
  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Deleted task", data);
      this.goHome();
    });
  }
}

