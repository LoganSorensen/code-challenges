# Three Number Sum

Write a function that takes in a non-empty array of distinct integers and a target integer. Your function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. Each inner array containing a single triplet should have all three of its elements ordered in
ascending order. The triplets themselves should be ordered in ascending order by the first triplet element. If two triplet elements have the same first element, then they should be ordered such that the smaller second element comes first. If two triplet elements have the same first and second elements, then they should be
ordered such that the smaller third element comes first. If no such triplets can be found in the array, your function should return an empty array.

    Example 1:
    Input: [12, 3, 1, 2, -6, 5, -8, 6], 0   
    Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

    Example 2:
    Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30  
    Expected Output: [[6, 9, 15], [7, 8, 15]]
