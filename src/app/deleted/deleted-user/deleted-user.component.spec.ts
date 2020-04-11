import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletedUserComponent } from './deleted-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeletedUserComponent', () => {
  let component: DeletedUserComponent;
  let fixture: ComponentFixture<DeletedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedUserComponent ],
      imports:[SharedModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
