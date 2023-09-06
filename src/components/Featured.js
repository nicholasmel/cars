import React from 'react';
import '../styles/Featured.css'

const featured = [
    {
        title: 'Porsche 911 GT3',
        bgLeft: "https://files.porsche.com/filestore/image/multimedia/none/model-series-911-gt3-int-higlights-01/normal/b24ec846-8d5e-11eb-80d4-005056bbdc38;sN;tjpeg060;c1690;gc/porsche-normal.jpg",
        bgTop: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-touring-intro/normal/21ff161f-9ecb-11eb-80d4-005056bbdc38;sN;tjpeg060;c1690;gc/porsche-normal.jpg",
        bgBottom: "https://files.porsche.com/filestore/image/multimedia/none/model-series-911-gt3-int-higlights-02/normal/2cb99a5d-8d5f-11eb-80d4-005056bbdc38;sN;tjpeg060;c1690;gc/porsche-normal.jpg",
        bgRight: "https://files.porsche.com/filestore/video/multimedia/none/model-series-911-gt3-ext-higlights-04/zoom/c54db44b-5cb8-11eb-80d2-005056bbdc38;sG;tjpeg060/porsche-image.jpg",
    },
    {
        title: 'Nissan GT-R',
        bgLeft: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/gallery/exterior-mosaic/2024-nissan-gtr-nismo-fender-vents-o.jpg",
        bgTop: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/gallery/exterior-mosaic/2024-nissan-gt-r-high-performance-luxury-sports-car-light-green-o.jpg",
        bgBottom: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/gallery/interior-mosaic/2024-nissan-gt-r-interior-view-leather-wrapped-steering-wheel-seats-o.jpg",
        bgRight: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/gallery/exterior-mosaic/2024-nissan-gt-r-rays-forged-wheels-o.jpg",
    },
    {
        title: 'Audi R8',
        bgLeft: "https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Coupe/MY22/1920x1920/1920X1920-MY20-R8-Coupe-Ext_Rear-Angle_Ascari-blue.jpg?imwidth=1344",
        bgTop: "https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Spyder/MY22/1920x1080/1920X1080-2018-Audi-R8-Coupe-Gallery-interior-1-monoposto.jpg?imwidth=1920&imdensity=1",
        bgBottom: "https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Spyder/MY22/1920x1080/1920x1080-v2MY20-R8-Coupe-Ext_Front-Angle_Ascari-blue_rigg.jpg?imwidth=1920&imdensity=1",
        bgRight: "https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Coupe/MY22/1920x1920/1920x1920-2019_Audi_R8_Coupe_Design_Ext_Gallery_LED_taillights.jpg?imwidth=1344",
    },
];

function Featured() {
    return (
        <div className='featured'>
            <div className="featured--title">
                <h1>FEATURED MODELS</h1>
            </div>
            {featured.map((car) => (
                <div key={car.title} className="featured-limited" >
                    <h2>{car.title}</h2>
                    <div className="featured--format">
                        <div className="item-one" style={{ backgroundImage: `url(${car.bgLeft})` }}>
                        </div>
                        <div className="item-two">
                            <div className="item-top" style={{ backgroundImage: `url(${car.bgTop})` }}>
                            </div>
                            <div className="item-bottom" style={{ backgroundImage: `url(${car.bgBottom})` }}>
                            </div>
                        </div>
                        <div className="item-three" style={{ backgroundImage: `url(${car.bgRight})` }}>
                        </div>
                    </div>
                </div >
            ))}
            <div className="featured--bottom" />
            <hr className='hr-line' />
        </div >
    );
}

export default Featured;
