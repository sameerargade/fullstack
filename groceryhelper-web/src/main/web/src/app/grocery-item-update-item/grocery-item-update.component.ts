import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryItemModel } from '../model/grocery-item-model';
import {NgForm} from '@angular/forms';
import { GroceryItemUpdateService } from './grocery-item-update.service';
import {Location} from '@angular/common';


@Component({
   selector: 'groceryitemupdate',
   
   templateUrl: './grocery-item-update.component.html'
})
export class GroceryItemUpdateComponent implements OnInit {
   groceryItemModel:GroceryItemModel = new GroceryItemModel();
   validationMessage : string = "";
   idStr : string;
   id:number;
   //form:NgForm = new NgForm(null,null);
   @ViewChild('updateForm',{static:false}) 
   updateForm : any;
   constructor(private router: Router, private location:Location,
                    private route: ActivatedRoute, private groceryItemUpdateService:GroceryItemUpdateService)  {
                  console.log('constructir');
   }

  public ngOnInit() {
     console.log('oninit');
     this.idStr = this.route.snapshot.paramMap.get('id');
     this.id = parseInt(this.idStr);
     this.groceryItemUpdateService.getGroceryItem(this.id).subscribe(data => {
      this.groceryItemModel = data as GroceryItemModel;
      this.updateForm.value.name= this.groceryItemModel.name;
      this.updateForm.value.description= this.groceryItemModel.description;
      this.updateForm.value.tag= this.groceryItemModel.tag;
   });
  }

  public saveForm(){
   console.log(this.groceryItemModel.name);
   
   console.log(this.groceryItemModel.description);
  }

  onSubmit() {
   // console.log(f.value.name); 
   // console.log(f.value.description);  // { first: '', last: '' }
   // console.log(f.valid);  // false
   // if(f.valid){
      this.validationMessage = "Submitting....";
  
   // this.groceryItemModel.name=f.value.name;
   // this.groceryItemModel.description=f.value.description;
   // this.groceryItemModel.tag = f.value.tag

   this.groceryItemUpdateService.saveGroceryItem(this.groceryItemModel).subscribe( data =>{
      console.log(' returned data' + JSON.stringify(data));
      this.validationMessage = "Saved Item " + data.name;
      
    });
    this.groceryItemModel = new GroceryItemModel();
    // f.resetForm();
//  }else{
      // this.validationMessage = "Validation errors";
   //}
   
 }
 public clearForm(){
   
 }
  public navigateRoot(){
   this.location.back();
  }
 
}
