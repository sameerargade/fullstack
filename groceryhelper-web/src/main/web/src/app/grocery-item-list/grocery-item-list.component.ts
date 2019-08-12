import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GroceryItemListService } from "./grocery-item-list.service";
import { GroceryItemModel } from "../model/grocery-item-model";
import { NgForm, FormArray } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SearchItemModel } from "../model/search-item-model";
@Component({
  selector: "groceryitemlist",
  templateUrl: "./grocery-item-list.component.html",
  styleUrls: ["./grocery-item-list.component.css"]
})
export class GroceryItemListComponent implements OnInit {
  groceryItems: GroceryItemModel[];
  searchItemModel: SearchItemModel = new SearchItemModel();
  errorMessage: string;
  itemId: number;
  GroceryDetailsForm: FormGroup;
  groceryDetails: FormArray;

  constructor(
    private router: Router,

    private route: ActivatedRoute,
    private groceryItemListService: GroceryItemListService,
    private fb: FormBuilder
  ) {
    this.GroceryDetailsForm = this.fb.group({
      groceryDetails: this.fb.array([])
    });
  }

  ngOnInit() {
    console.log("init worked");
    this.loadData();
  }
  public loadData() {
    this.groceryItemListService.listGroceryItems().subscribe(
      data => {
        this.groceryItems = data as GroceryItemModel[];
        if (this.groceryItems != undefined) {
          this.createform();
        } else {
          console.log("griceyr items null");
          let arr = [];
          for (let i = 0; i < this.groceryItems.length; i++) {
            arr.push(this.BuildFormDynamic(this.groceryItems[i]));
          }

          this.GroceryDetailsForm = this.fb.group({
            groceryDetails: this.fb.array(arr)
          });
        }
      },
      error => {
        this.errorMessage = "Error Occured while retriving data";
      }
    );
  }
  public search() {
    this.groceryItemListService
      .listGroceryItemsByTag(this.searchItemModel)
      .subscribe(
        data => {
          this.groceryItems = data as GroceryItemModel[];
        },
        error => {
          this.errorMessage = "Error Occured while retriving data";
        }
      );
  }

  public deleteGroceryItem(event: any) {
    this.itemId = event.target.id;
    this.groceryItemListService.deleteGroceryItem(this.itemId).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.errorMessage = "Delete Successful";
      },
      error => {
        this.errorMessage = "Error Occured while deleting item";
      }
    );
    return false;
  }
  public saveTag(tagEvent: any) {
    console.log(tagEvent.target.id);
    console.log(this.GroceryDetailsForm.value);
  }
  BuildFormDynamic(groceryItem: GroceryItemModel): FormGroup {
    return this.fb.group({
      name: [groceryItem.name],
      id: [groceryItem.id],
      description: [groceryItem.description],
      tag: ["", { updateOn: "blur" }]
    });
  }
  createform() {
    let arr = [];
    for (let i = 0; i < this.groceryItems.length; i++) {
      arr.push(this.BuildFormDynamic(this.groceryItems[i]));
    }
    this.GroceryDetailsForm = this.fb.group({
      groceryDetails: this.fb.array(arr)
    });
  }
}
