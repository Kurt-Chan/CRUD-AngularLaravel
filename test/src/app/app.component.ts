import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicesService } from './services/services.service';
// import 'rxjs/add/operator/toPromise'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  items: any = []


  constructor(private service: ServicesService){
    this.displayitems()
  }
  title = 'Laravel Angular App';

  



  testForm = new FormGroup({
    'name' : new FormControl(''),
    'price' : new FormControl(''),
  })


  displayitems(){
    this.service.readItem().subscribe( res=>{
      this.items = res
      console.log(this.items)
    })
  }

  onSubmit(value: any){
    this.service.addItem(JSON.stringify(value)).subscribe(res=>{
      console.log(res)
      this.testForm.reset()
    })
    this.displayitems()

    //  console.log(JSON.stringify(value))  
  }

  deleteItem(id:string){
    this.service.deleteItem(id).subscribe(res=>{
      console.log(res)
  })
    this.displayitems()
  }

  selectItem(id:string, name:string, price: string){
    // console.log(id)
    window.localStorage.setItem('itemId', id)
    this.testForm.setValue({
      name : name,
      price : price
    })
  }

  updateItem(value:any){

    let json={
      id: window.localStorage.getItem('itemId'),
      name: value.name,
      price: value.price
    }

    this.service.editItem(JSON.stringify(json)).subscribe(res=>{
      console.log(res)
      this.displayitems()
      this.testForm.reset()
    })
  }

}
