def min_trucks(weights: list[int]) -> int:
    left = 0
    right = len(weights) - 1
    trucks = 0

    while left <= right:
        if weights[left] + weights[right] <= 10:
            left += 1  # pair lightest with heaviest
        right -= 1    # heaviest always gets used
        trucks += 1

    return trucks

# print(min_trucks([2,3,2,7]))
print(min_trucks([1, 5, 5, 8, 9]))