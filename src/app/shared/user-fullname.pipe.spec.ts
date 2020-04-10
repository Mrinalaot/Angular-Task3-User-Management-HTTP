import { UserFullnamePipe } from './user-fullname.pipe';

describe('UserFullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserFullnamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform user First Name and Last Name to FullName',()=>{
    const pipe = new UserFullnamePipe();
    let user = {
      firstName: "Mrinal",
      lastName: "Ghosh"
    }
    let pipeTransformResult = pipe.transform(user);
    expect(pipeTransformResult).toBe('Mrinal Ghosh');
  });
});
