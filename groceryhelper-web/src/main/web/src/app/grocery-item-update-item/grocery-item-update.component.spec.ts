import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryItemUpdateComponent } from './grocery-item-update.component';
import {FormsModule} from '@angular/forms';  
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GroceryItemListComponent', () => {
  let component: GroceryItemUpdateComponent;
  let fixture: ComponentFixture<GroceryItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ GroceryItemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
