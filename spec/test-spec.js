
import { dateString } from './../src/backEnd.js';
import { newConvert } from './../src/backEnd.js';

describe('dateString', function() {

  it('should return a concatenated string', function() {

    let month = "january";
    let day = 31;
    let year = 1995;
    let newDate = dateString(month,day,year);
    expect(newDate).toEqual("january 31, 1995");
  });

  it('should return the day of the week', function() {
    let date = 6;
    let day = newConvert(date);
    expect(day).toEqual('Saturday');

  });



});
