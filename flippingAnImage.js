var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse()
    }

    for (let i = 0; i < image.length; i++) {
        // Changing 1 to 0 and 0 to 1 within the row
        for (let j in image[i]) {
            image[i][j] = image[i][j] ^ 1
        }
    }

    return image
};