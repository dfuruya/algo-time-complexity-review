/////////// Prompt 1 ///////////
/////////// time complexity: O(n)
/** 
  *  ((1 + 1) * n) + 1 + 1 = 2n + 2 = O(n)
  */
function findMax(array){
  var max = -Infinity;  // 1
  for (var i = 0; i < array.length; i++){  // n
    if (array[i] > max){  // 1
      max = array[i];     // 1
    }
  }
  return max;  // 1
}


/////////// Prompt 2 ///////////
/////////// time complexity: O(n)
/** 
  *  Since indexOf is a native function, the actual code 
  *  requires iterating through each item in the array.
  */
function contains(array, target){
  return array.indexOf(target) > -1;  // n
}


/////////// Prompt 3 ///////////
/////////// time complexity: O(n)
/** 
  *  Since the slice function requires iteration, 
  *  and is chained with indexOf, which also requires iteration,
  *  it is an n + n = 2n = O(n) complexity.
  */
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;  // n + n
}


/////////// Prompt 4 ///////////
/////////// time complexity: O(1)
/** 
  * 3 + 1 + 1 = 5 = O(1)
  */
function square(array){
  for (var i = 0; i < 3; i++){   // 3
    array[i] = array[i] * array[i];  // 1
  }
  return array;  // 1
}

/////////// Prompt 5 ///////////
/////////// time complexity: O(n)
/** 
  *  ((n*1 + 1) * 10) + 1 = 10n + 11 = O(n)
  */
function repeat(array){
  var repeat = [];  // 1
  for (var j = 0; j < 10; j++){  // 10
    repeat[j] = [];   // 1
    for (var i = 0; i < array.length; i++){  // n
      repeat[j].push(array[i]);  // 1
    }
  }
  return repeat;   // 1
}
//what if we replace 10 with a parameter? 
/** 
  *  If the parameter is the array.length, 
  *  then it would become a quadratic O(n^2) complexity.
  */

/////////// Prompt 6 ///////////
/////////// time complexity: O(n)
/** 
  *  1(1 + 1 + 1) + n(2 * 1) + 1 = 2n + 4 = O(n)
  */
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number  - 1
    var temp = num1;   // 1
    num1 = num2;  // 1
    num2 = temp;  // 1
  }
  for (var i = num1; i > 1; i--){   // n
    if (num1 % i === 0 && num2 % i === 0){   // 2
      return i;  // 1
    }
  }
  return 1;  // 1
}


/////////// Prompt 7 ///////////
/////////// time complexity: O(n^2)
/** 
  *  1 + 2 + n(1 + 1 + n + 1) = 3n^2 + 3 = O(n^2)
  */
function countChar(string){
  var counts = {};   // 1
  var currChar, currCharCount;  // 2
  for (var i = 0; i < string.length; i++){  // n
    currChar = string[i];  // 1
    currCharCount = 1;    // 1
    for (var j = i+1; j < string.length; j++){  // n
      if (currChar === string[j]){   // 1
        currCharCount++;  // 1
      }
    }
    if (!counts.hasOwnProperty(currChar)){  // 1
      counts[currChar] = currCharCount;  // 1
    }
  }
  return counts;  // 1
}


/////////// Prompt 8 ///////////
/////////// time complexity: O(n)
/**  
  *  This is a decision tree, but is linear.
  *  
  */ 
var factorial = function(num){
  if (num < 0){   // 1
    return;  // 1
  }
  if (num === 0 || num === 1){  // 2
    return 1;  // 1
  } else {
    return num * factorial(num-1);  // ????
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: O(log n)
/**  
  *  The hotPotato() function divides by 3 each time,
  *  
  */ 
function tournament(players){
  var results;   // 1
  if (players.length < 3){
    return players[0];  // 
  } else {
    results = hotPotato(players);  // 1
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);  // log n
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: O(c^n)
/**  
  *  Time complexity is O(c^n), where:
  *    c = number of characters in alphabet 
  *    n = max number of characters in password
  */ 
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 11 ///////////
/////////// time complexity: O(log n)
/**  
  *  Since each time you search (findQuadrant), you divide 
  *  the possible areas to search by 4, and thus you have 
  *  a logarithmic time complexity.
  */ 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: 
//this will require some math to determine 
/**  
  *  
  *  
  */ 
function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







