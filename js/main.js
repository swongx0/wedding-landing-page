document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const assetsPath = '/assets/';
    const ckimFiles = [];

    const assetFiles = [
        'CKIM7507.jpg', 'CKIM7514.jpg', 'CKIM7519.jpg', 'CKIM7522.jpg',
        'CKIM7528.jpg', 'CKIM7532.jpg', 'CKIM7535.jpg', 'CKIM7536.jpg', 
        'CKIM7542.jpg', 'CKIM7545.jpg', 'CKIM7547.jpg', 'CKIM7548.jpg', 
        'CKIM7549.jpg', 'CKIM7550.jpg', 'CKIM7551.jpg', 'CKIM7552.jpg', 
        'CKIM7553.jpg', 'CKIM7554.jpg',
        'CKIM7555.jpg', 'CKIM7568.jpg', 'CKIM7569.jpg', 'CKIM7572.jpg',
        'CKIM7576.jpg', 'CKIM7583.jpg', 'CKIM7587.jpg', 'CKIM7592.jpg',
        'CKIM7594.jpg', 'CKIM7599.jpg', 'CKIM7604.jpg', 'CKIM7607.jpg',
        'CKIM7612.jpg', 'CKIM7621.jpg', 'CKIM7634.jpg', 'CKIM7635.jpg',
        'CKIM7641.jpg', 'CKIM7651.jpg', 'CKIM7660.jpg',
        'CKIM7686.jpg', 'CKIM7689.jpg', 'CKIM7692.jpg', 'CKIM7703.jpg',
        'CKIM7707.jpg', 'CKIM7710.jpg', 'CKIM7723.jpg', 'CKIM7726.jpg',
        'CKIM7736.jpg', 'CKIM7753.jpg', 'CKIM7763.jpg', 'CKIM7768.jpg',
        'CKIM7783.jpg', 'CKIM7792.jpg', 'CKIM7807.jpg', 'CKIM7820.jpg',
        'CKIM7829.jpg', 'CKIM7850.jpg', 'CKIM7852.jpg', 'CKIM7879.jpg',
        'CKIM7897.jpg', 'CKIM7905.jpg', 'CKIM7913.jpg', 'CKIM7928.jpg',
        'CKIM7936.jpg', 'CKIM7945.jpg', 'CKIM7954.jpg', 'CKIM7985.jpg',
        'CKIM7989.jpg', 'CKIM7997.jpg', 'CKIM8019.jpg', 'CKIM8035.jpg',
        'CKIM8055.jpg', 'CKIM8058.jpg', 'CKIM8073.jpg', 'CKIM8081.jpg',
        'CKIM8090.jpg', 'CKIM8112.jpg', 'CKIM8125.jpg', 'CKIM8140.jpg',
        'CKIM8145.jpg', 'CKIM8154.jpg', 'CKIM8164.jpg', 'CKIM8177.jpg',
        'CKIM8180.jpg', 'CKIM8185.jpg', 'CKIM8191.jpg', 'CKIM8194.jpg',
        'CKIM8195.jpg', 'CKIM8202.jpg', 'CKIM8210.jpg', 'CKIM8211.jpg',
        'CKIM8243.jpg',
        'CKIM8246.jpg', 'CKIM8274.jpg', 'CKIM8282.jpg',
        'CKIM8287.jpg', 'CKIM8298.jpg', 'CKIM8306.jpg', 'CKIM8312.jpg',
        'CKIM8313.jpg', 'CKIM8315.jpg', 'CKIM8323.jpg', 'CKIM8327.jpg',
        'CKIM8331.jpg', 'CKIM8351.jpg', 'CKIM8355.jpg'
    ];

    // Filter files containing "CKIM"
    assetFiles.forEach(function (file) {
        if (file.includes('CKIM')) {
            ckimFiles.push(file);
        }
    });

    ckimFiles.forEach(function (file) {
        // Create a div container for each image
        const divContainer = document.createElement('div');
        divContainer.classList.add('gallery-item')
        // Create an img element
        const img = document.createElement('img');
        img.src = assetsPath + file;
        img.alt = file;

        // Append the img element to the div container
        divContainer.appendChild(img);

        // Append the div container to the image container
        imageContainer.appendChild(divContainer);
    });
});
