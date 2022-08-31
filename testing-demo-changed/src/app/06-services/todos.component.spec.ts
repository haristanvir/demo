import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from '.rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Set todo property with items returned from server', () => {
    let todosArray = [
      {id:1, value:1},
      {id:2, value:2},
      {id:3, value:3},
    ];
    // we use that to provide fake alternative for service
    spyOn(service, 'getTodos').and.callFake(()=>{
    //here we define the exact return value that is expected from server
    return Observable.from([todosArray])
  })
    component.ngOnInit();
    expect(component.todos.length).toBe(todosArray);
  })
});