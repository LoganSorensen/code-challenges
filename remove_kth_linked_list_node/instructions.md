Write a function that receives as input the head node of a linked list and an integer k. Your function should remove the kth node from the end of the linked list and return the head node of the updated list.

For example, if we have the following linked list:

    (20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) ->
    null

The head node would refer to the node (20) . Let k = 4 , so our function should remove the 4th node from the end of the linked list, the node (14) . 

So after the function executes, the state of the linked list should be:

    (20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null

If k is longer than the length of the linked list, the linked list should not be changed.

The optimal solution exhibits a runtime complexity of O(n) and a space complexity of O(1).
