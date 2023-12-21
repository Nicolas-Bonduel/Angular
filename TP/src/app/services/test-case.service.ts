import { Injectable } from '@angular/core';

enum TEST_CASES {
  Old_School = "Old School",                                          // OK
  Subject = "Subject",                                                // OK
  Subject_As_Observable = "Subject As Observable",                    // OK - found no difference, what's the point?
  Behavior_Subject = "Behavior Subject",                              // OK - only difference found is in init, what's the point?
  Behavior_Subject_As_Observable = "Behavior Subject As Observable",  // OK - found no difference, what's the point?
  Observable = "Observable"                                           // KO - everything seems to be defined as an Observable but I
}                                                                     //      can't seem to get it to work, am I stupid??
                                                                      //      and ffs, what's an observer and how do I declare it?
@Injectable({                                                         //      I'm going crazy ><
  providedIn: 'root'
})
export class TestCaseService {

  public TEST_CASE: TEST_CASES;

  constructor() {
    this.TEST_CASE = TEST_CASES.Behavior_Subject;
  }
}
