/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PgcomComponent } from './pgcom.component';

describe('PgcomComponent', () => {
  let component: PgcomComponent;
  let fixture: ComponentFixture<PgcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
