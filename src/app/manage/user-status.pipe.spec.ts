import { UserStatusPipe } from './user-status.pipe';

describe('UserStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new UserStatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform user given using active and deactive',()=>{
    const pipe = new UserStatusPipe();
    let user1 = { isDeleted: false };
    let user2 = { isDeleted: true };
    let pipeTransformResultActive = pipe.transform(user1);
    let pipeTransformResultDeactive = pipe.transform(user2);
    expect(pipeTransformResultActive).toBe('Active');
    expect(pipeTransformResultDeactive).toBe('Deactive');
  });

});


 