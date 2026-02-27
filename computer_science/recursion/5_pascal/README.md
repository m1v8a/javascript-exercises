# Exercise 5 - pascal

The pascal's triangle is modelled as follows:
- The first row is `1`.
- Each row can be considered to have a hidden `0` to either sides of it. So the first row could also be said to be `0, 1, 0`
- To obtain the next row, we take each number and add it with its rightmost neighbor.

First row: `[1]`
Second row: `[0+1, 1+0]` or simply `[1, 1]`
Third row: `[0+1, 1+1, 1+0]` or simply `[1, 2, 1]`
Fourth row: `[0+1, 1+2, 2+1, 1+0]` or simply `[1, 3, 3, 1]`
... 

The pattern continues forever.

Your task is to create a *recursive* function, `pascal` - that will take an input `n` and output the `n`th pascal's row as an array of numbers.

For example, `pascal(3)` should return `[1, 2, 1]`.
    
1       0
1+0     0+1 = 11
1       1     0
1+0    1+1    0+1 =  121
1       2      1     0 
1+0    2+1    1+2   0+1 =  1331




get the rowNumber from the input
create 2 varables; currentRowNumber and  previousPascalTriangle
check if the rowNumber is equal to 1
    then return [1]
else check if the rowNumber is equal to currentRowNumber
    then create a temporary array; currentPascalTriangle
    create a copy of the currentRowNumber and arbitrary push a 0 to the array
    start a loop through previousPascalTriangle
        add current item to the item on the leftside
            if there's on item on the side then add 0 instead


    

    
