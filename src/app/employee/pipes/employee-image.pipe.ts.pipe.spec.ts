import { EmployeeImagePipeTsPipe } from './employee-image.pipe.ts.pipe';

describe('EmployeeImagePipeTsPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeImagePipeTsPipe();
    expect(pipe).toBeTruthy();
  });
});
