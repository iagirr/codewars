# An isogram is a word that has no repeating letters, consecutive or non-consecutive.
# Implement a function that determines whether a string that contains only letters is an isogram.
# Assume the empty string is an isogram. Ignore letter case.

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false


def is_isogram(string):
    return len(string) == len(set(string.lower()))


print(is_isogram("Ab"))
