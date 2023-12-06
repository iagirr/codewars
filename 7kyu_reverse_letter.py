# Given a string str, reverse it and omit all non-alphabetic characters.
# Example
# For str = "krishan", the output should be "nahsirk".
# For str = "ultr53o?n", the output should be "nortlu".


def reverse_letter(string):
    return "".join([i for i in string if i.isalpha()][::-1])


print(reverse_letter("kris5-han"))
