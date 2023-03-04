export const extractUniqueLetters = <T>(strings: string[]): T[] =>
    [...new Set(
        strings.map(str => str.charAt(0).toUpperCase() as T)
            .sort(
                (a: T, b: T) =>
                    a < b
                        ? -1
                        : a > b
                            ? 1
                            : 0
            )
    )
    ]
