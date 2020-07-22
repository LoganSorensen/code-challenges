# Balanced Brackets

Write a function that takes a string as input. The string can contain four types of brackets: "[]", "()", "{}", and "||". Your function should return a boolean indicating whether or not the string is balanced. Note that pipes brackets use the same character to indicate both opening and closing. A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets
of that same type. No bracket can be left unmatched if the string is to be considered balanced. A closing bracket also cannot match a corresponding opening bracket that comes after it. Brackets also cannot overlap each other, i.e., "[(])".

    Examples:
    "[(])" should return false  
    "foo(bar)baz" should return true    
    "{{||[]||}}" should return true     
    "I am happy to take your donation; any amount will be greatly appreciated." should return true  
    "I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me." should return true     
    "This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]" should return false