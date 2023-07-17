/* a function that returns the sum of two numbers
START
  # Given two numbers called "number1" and "number2"
  PRINT number1 + number2
END
*/

/*a function that takes an array of strings, and returns a string that is all those strings concatenated together
START
  # Given an array of strings called "array"
  PRINT array.join('')
END
*/

/*a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. 
START
  # Given an array of integers called "array"
  SET iterator = 0
  SET newArray = []

  WHILE iterator % 2 === 0
    newArray.push(number at space "iterator")
    iterator += 2
  PRINT newArray
END
*/

/*a function that determines the index of the 3rd occurrence of a given character in a string.
  If the given character does not occur at least 3 times, return null.
START
  # Given a string called 'string'
  # Given a character to search called 'char'
  SET count = 0
  SET position = the index of the 1st occurrence of 'char'
  WHILE position exists and count <= 3
    position = next position of 'char'
    count = count + 1
  PRINT position
  END
  */

  /*a function that takes two arrays of numbers and returns the result of merging the arrays. 
    The elements of the first array should become the elements at the even indexes of the returned array, 
    while the elements of the second array should become the elements at the odd indexes. 
  START
    # Given two arrays of integers called 'array1' and 'array2'
    SET mergedArray = []
    SET iterator = 0

    WHILE iterator < length of any array
      push the number at location  of iterator from array1 to mergedArray
      then push the number at location of iterator from array2 to mergedArray
      iterator = iterator + 1
    PRINT mergedArray
    END
  */
 