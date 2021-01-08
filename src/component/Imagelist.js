import React from 'react';

const Imagelist = (props) => {
    const images=props.img.map((image) => {
        return <img src={image.album.cover} style={{width:'300px', height:'300px' , padding:'30px'}} />
    });

        

    return(

        <div className="container-fluid">
                <div className="row">
                    <div className="col">{images}</div>
                </div>
        </div>

    );
}

export default Imagelist;