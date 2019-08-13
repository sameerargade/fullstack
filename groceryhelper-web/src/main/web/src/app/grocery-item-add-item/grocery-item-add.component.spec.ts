import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GroceryItemAddComponent } from './grocery-item-add.component';
import { FormsModule } from '@angular/forms';  
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { GroceryItemAddService } from './grocery-item-add.service'
import { of, Observable, Observer } from 'rxjs';
import { GroceryItemModel } from '../model/grocery-item-model';
describe('GroceryItemAddComponent', () => {
  let component: GroceryItemAddComponent;
  let fixture: ComponentFixture<GroceryItemAddComponent>;
 // let groceryItemAddService: ComponentFixture<GroceryItemAddService>;
 let groceryItemAddService:GroceryItemAddService;
 let httpTestingController :HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ GroceryItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryItemAddComponent);
    component = fixture.componentInstance;
    groceryItemAddService = fixture.debugElement.injector.get(GroceryItemAddService);
    fixture.detectChanges();
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should add grocery Item', () => {
//     //const { fixture, component, userService } = setup();
//     const mockGroceryItemModel = {id: 1, name: 'Milo' , desciption:'some descritpion',tag:'tag' };
//     spyOn(groceryItemAddService, 'saveGroceryItem').and.returnValue(of(mockGroceryItemModel));

//     fixture.detectChanges();
//     const compile = fixture.debugElement.nativeElement;
//     const savedMessage = compile.querySelector('p');
//     expect(savedMessage.textContent).toBe('Saved Item Milo');
//   });
//   it('should display grocery item name', fakeAsync(() => {
//     //const { fixture, app, userAsyncService } = setup();
//     const mockGroceryItemModel = {id: 1, name: 'Milo' , desciption:'some descritpion',tag:'tag' };

//     spyOn(groceryItemAddService, 'saveGroceryItem').and.returnValue(
//       Observable.create((observer: Observer<{ name: string }>) => {
//         observer.next(mockGroceryItemModel);
//         return observer;
//       })
//     );
//     tick();

//     fixture.detectChanges();
//     const userAsyncElement = fixture.debugElement.nativeElement;
//     const loggedInUserName = userAsyncElement.querySelector('p');
//     expect(loggedInUserName.textContent).toBe('Saved Item Milo');
//   }));
//   it('should save data', () => {
    
//     const mockGroceryItemModel :GroceryItemModel = {id: 1, name: 'Milo' , description:'some descritpion',tag:'tag' };
//     groceryItemAddService.saveGroceryItem(mockGroceryItemModel).subscribe(data => {
//       expect(data.name).toEqual('Milo');
//     });

//     //const req = httpTestingController.expectOne('http://localhost');
//     //GROCERY_ITEM_ADD: URL+'saveGroceryItem',
//     const req = httpTestingController.expectOne('http://localhost:9080/saveGroceryItem/');

//     expect(req.request.method).toEqual('POST');
//     expect(req.request.body).toEqual(mockGroceryItemModel);

//     req.flush(mockGroceryItemModel);

//     //expect(req.request.method).toBe('POST');

//     // req.flush({
//     //   mapData: mockGoogleMapData
//     // });
//   });
});
