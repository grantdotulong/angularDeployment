import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getProducts(){
    return this._http.get('/productsapi');
  }
  getProductByID(id){
    return this._http.get('/productsapi/'+id);
  }
  deleteProduct(id){
    return this._http.delete('/productsapi/delete/'+id);
  }
  updateProduct(id, updatedproduct){
    return this._http.put('/productsapi/update/'+ id, updatedproduct);
  }
  createProduct(newproduct){
    return this._http.post('/productsapi', newproduct);
  }
}
