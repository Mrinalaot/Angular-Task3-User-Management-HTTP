import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserFullnamePipe } from '../user-fullname.pipe';
import { UserService } from 'src/app/user.service';;
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, UserFullnamePipe          
      ],
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([]), ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('EditDetails should route to manage/edit/:id', inject([Router], (router: Router) => {
    let id : string = '1023';
    spyOn(router, "navigate").and.stub();
    component.handleEdit(id);
    expect(router.navigate).toHaveBeenCalledWith(["manage/edit/", '1023']);
  }));

  
  it('ViewDetails should route to manage/:id', inject([Router], (router: Router) => {
    let user = { id: 666 };
    spyOn(router, "navigate").and.stub();
    component.handleDetails(user);
    expect(router.navigate).toHaveBeenCalledWith(["manage", 666]);
  }));

  it('should return as false if user is Deleted', ()=>{
    let status: boolean = component.isDeleted();
    expect(status).toBeFalsy();
  })
});
