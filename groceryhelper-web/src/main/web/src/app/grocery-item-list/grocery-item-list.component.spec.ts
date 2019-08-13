import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryItemListComponent } from './grocery-item-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';  
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GroceryItemListService } from './grocery-item-list.service';
import { of } from 'rxjs';

describe('GroceryItemListComponent', () => {
  let component: GroceryItemListComponent;
  let fixture: ComponentFixture<GroceryItemListComponent>;
  let groceryItemListService:GroceryItemListService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ GroceryItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryItemListComponent);
    component = fixture.componentInstance;
    groceryItemListService = fixture.debugElement.injector.get(GroceryItemListService);

    fixture.detectChanges();
  });

  // it('should add grocery Item', () => {
  //   //const { fixture, component, userService } = setup();
  //   const mockGroceryItemModel = [{id: 2, name: 'Colgate' , desciption:'ToothPaste',tag:'tag'},{id: 1, name: 'Milo' , desciption:'some descritpion',tag:'tag'}];
  //   spyOn(groceryItemListService, 'listGroceryItems').and.returnValue(of(mockGroceryItemModel));

  //   fixture.detectChanges();
  //   const compile = fixture.debugElement.nativeElement;
  //   const savedMessage = compile.querySelector('td');
  //   expect(savedMessage.textContent).toBe('Milo');
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
