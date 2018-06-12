import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

export interface Product {
  type: string;
  size: string;
  gender: string;
  color: string;
}
export interface ProductId extends Product{
  id: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productCollection: AngularFirestoreCollection<Product>;
  products: Observable<ProductId[]>;

  constructor(afs: AngularFirestore) {
    this.productCollection = afs.collection<Product>('products');
    this.products = this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  ngOnInit() {
  }

  saveProduct(product:ProductId){
    this.productCollection.doc(product.id).set(product);
  }

}
