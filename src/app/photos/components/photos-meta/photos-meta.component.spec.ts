import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosMetaComponent } from './photos-meta.component';

describe('PhotosMetaComponent', () => {
  let component: PhotosMetaComponent;
  let fixture: ComponentFixture<PhotosMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
