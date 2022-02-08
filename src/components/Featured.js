import React from 'react';
import '../styles/Featured.css'

const featured = [
    {
        title: 'Toyota Supra',
        bgLeft: "https://toyota.scene7.com/is/image/toyota/SUP_MY20_0015_V001-1?wid=2000&fmt=jpg&fit=crop",
        bgTop: "https://toyota.scene7.com/is/image/toyota/SUP_MY21_0015_V001-1?wid=2000&fmt=jpg&fit=crop",
        bgBottom: "https://www.toyota.com/content/dam/toyota/vehicles/2022/gr-supra/gallery/SUP_MY22_0009_V001.png?wid=2000&fmt=jpg&fit=crop",
        bgRight: "https://toyota.scene7.com/is/image/toyota/SUP_MY20_0128_V001?wid=2000&fmt=jpg&fit=crop",
    },
    {
        title: 'Nissan GT-R',
        bgLeft: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/gallery/new-mosaics/exterior/2021-nissan-gt-r-t-spec-badge-l.jpg",
        bgTop: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/gallery/new-mosaics/exterior/2021-nissan-gt-r-front-fascia-l.jpg",
        bgBottom: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/gallery/new-mosaics/exterior/2021-nissan-gt-r-rear-bumper-l.jpg",
        bgRight: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/gallery/new-mosaics/interior/2021-nissan-gt-r-steering-wheel-mounted-controls-l.jpg",
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
                        <div className="item--two">
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
