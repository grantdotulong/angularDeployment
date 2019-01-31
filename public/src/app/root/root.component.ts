import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  allProducts: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got our products!", data)
      this.allProducts = data['products'];
    });
  }
  displayEdit(id){
    this._router.navigate(['/products/'+id+'/edit']);
  }
  displayDetails(id){
    this._router.navigate(['/products/'+id]);
  }
  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Deleted task", data);
      this.getProductsFromService();
    });
  }
}
