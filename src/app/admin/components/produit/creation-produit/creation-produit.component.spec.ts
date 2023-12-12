import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationProduitComponent } from './creation-produit.component';

describe('CreationProduitComponent', () => {
  let component: CreationProduitComponent;
  let fixture: ComponentFixture<CreationProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationProduitComponent]
    });
    fixture = TestBed.createComponent(CreationProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
