# 7 kyu | Square Every Digit


def square_digits(num):
    num_string = str(num)
    result_square = ""
    for digit in num_string:
        result_square += str(int(digit) ** 2)
    return result_square


print(square_digits(8448))
