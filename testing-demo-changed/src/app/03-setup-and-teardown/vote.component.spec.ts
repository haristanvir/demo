import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(()=>{
    // for initialization or setup
    component = new VoteComponent();
  });

  afterEach (() => {
    // for clean up or teardown
  });

  it ('should increment totalVotes when upvoted', () =>{
    component.upVote();
    expect (component.totalVotes).toBe(1);
});

  it( 'should decrement totalVotes when downvotes', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
});