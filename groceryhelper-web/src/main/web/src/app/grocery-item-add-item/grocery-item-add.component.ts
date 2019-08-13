import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryItemModel } from '../model/grocery-item-model';
import {NgForm} from '@angular/forms';
import { GroceryItemAddService } from './grocery-item-add.service';
import {Location} from '@angular/common';

@Component({
   selector: 'groceryitemadd',
   
   templateUrl: './grocery-item-add.component.html'
})
export class GroceryItemAddComponent implements OnInit {
   groceryItemModel:GroceryItemModel = new GroceryItemModel();
   validationMessage : string = "";
   constructor(private router: Router,
               private location :Location,
               private route: ActivatedRoute, private groceryItemAddService:GroceryItemAddService)  {
                  console.log('constructir');
   }

  public ngOnInit() {
     console.log('oninit');
  }

  public saveForm(){
   console.log(this.groceryItemModel.name);
   
   console.log(this.groceryItemModel.description);
  }

  onSubmit(f: NgForm) {
   console.log(f.value.name); 
   console.log(f.value.description);  // { first: '', last: '' }
   console.log(f.valid);  // false
   if(f.valid){
      this.validationMessage = "Submitting....";
  
   this.groceryItemModel.name=f.value.name;
   this.groceryItemModel.description=f.value.description;
   this.groceryItemModel.tag = f.value.tag

   this.groceryItemAddService.saveGroceryItem(this.groceryItemModel).subscribe( data =>{
      console.log(' returned data' + JSON.stringify(data));
      this.validationMessage = "Saved Item " + data.name;
      
   }); f.resetForm();
 }else{
      this.validationMessage = "Validation errors";
   }
   
 }
 public clearForm(){
   
 }
  public navigateRoot(){
   this.location.back();
  }
 
}
