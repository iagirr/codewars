# In this little assignment you are given a string of space separated numbers,
# and have to return the highest and lowest number.


def high_and_low(numbers):
    nn = [int(d) for d in numbers.split()]
    return f"{max(nn)} {min(nn)}"


print(high_and_low("1 2 3 4 5"))  # return "5 1"
print(high_and_low("1 2 -3 4 5"))  # return "5 -3"
