import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
    
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  const user =
    {
      id: "1",
      firstName: 'Mrinal',
      lastName: 'Ghosh',
      age: 23,
      login: "id1",
      password: "p1",
      isDeleted: false
    };

  it('should call getUser(id) returned Observable should match the right data', () => {
    service.getUser('1')
      .subscribe(userData => {
        expect(userData.firstName).toEqual('Mrinal');
        expect(userData.lastName).toEqual('Ghosh');
      });
    const req = httpTestingController.expectOne('http://localhost:8080/users/1');
    expect(req.request.method).toEqual('GET');
    req.flush(user);
  });

  it('should call getUsers() returned Observable should match the right data', () => {
    const data = [
      { id: "1", firstName: 'Mrinal', lastName: 'Ghosh', age: 23, login: "id1", password: "p1", isDeleted: false },
      { id: "2", firstName: 'Arunima', lastName: 'Mondal', age: 22, login: "id2", password: "p2", isDeleted: true },
    ];
    service.getUsers()
      .subscribe(userData => {
        expect(userData[0].firstName).toEqual('Mrinal');
        expect(userData[0].lastName).toEqual('Ghosh');
        expect(userData[1].firstName).toEqual('Arunima');
        expect(userData[1].lastName).toEqual('Mondal');
      });
    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');
    req.flush(data);
  });

  it('should create new user calling api POST', () => {
    service.createUser(user)
      .subscribe(userData => {
        expect(userData.hasOwnProperty('firstName')).toBeTruthy();
      });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('POST');
    req.flush(user);
  });

  it('should call deleteUser(id) and call delete api', () => {
    service.delete('1').subscribe();
    const req = httpTestingController.expectOne('http://localhost:8080/users/1');
    expect(req.request.method).toEqual('DELETE');
    req.flush(user);
  });
  
  it('should call update user api', () => {
    service.updateUser(user).subscribe();
    const req = httpTestingController.expectOne('http://localhost:8080/users/1');
    expect(req.request.method).toEqual('PUT');
    req.flush(user);
  });


});



