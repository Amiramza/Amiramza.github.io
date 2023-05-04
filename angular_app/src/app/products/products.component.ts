import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products=[
  {id:1, name:'product1', price:100,stock:90, description:'this is product1', image:'https://picsum.photos/200/300'},
  {id:2, name:'product2', price:200, stock:900,description:'this is product2', image:'https://picsum.photos/200/300'},
  {id:3, name:'product3', price:300,stock:90, description:'this is product3', image:'https://picsum.photos/200/300'},
  {id:4, name:'product4', price:400,stock:90, description:'this is product4', image:'https://picsum.photos/200/300'},
  {id:5, name:'product5', price:500,stock:40, description:'this is product5', image:'https://picsum.photos/200/300'},
  {id:6, name:'product6', price:600,stock:50, description:'this is product6', image:'https://picsum.photos/200/300'},
  {id:7, name:'product7', price:700,stock:0, description:'this is product7', image:'https://picsum.photos/200/300'},
  {id:8, name:'product8', price:800,stock:140, description:'this is product8', image:'https://picsum.photos/200/300'},
  {id:9, name:'product9', price:900,stock:44, description:'this is product9', image:'https://picsum.photos/200/300'},
  {id:10, name:'product10', price:1000,stock:120, description:'this is product10', image:'https://picsum.photos/200/300'}
]
//deleteProduct(id){}
//editProduct(id){}
}
