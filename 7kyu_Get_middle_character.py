# You are going to be given a word. Your job is to return the middle character of the word.
# If the word's length is odd, return the middle character. If the word's length is even,
# return the middle 2 characters.


def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1 : index + 1]


print(get_middle("test"))
print(get_middle("testing"))

# Examples:
# Kata.getMiddle("test") should return "es"
# Kata.getMiddle("testing") should return "t"
# Kata.getMiddle("middle") should return "dd"
# Kata.getMiddle("A") should return "A"
