function superbowlWin(record){
    const winner =record.find(game =>game.result ==="W");//if you check for the losing year and replace the "w" with "l" youll get the year they lost
       return winner?winner.year :undefined;
 }
 const record = [
     { year: "2016", result: "N/A"},
     { year: "2015", result: "W"},
     { year: "2013", result: "L"},
     
   ];
   console.log(superbowlWin(record));
   console.log(superbowlWin(record,));