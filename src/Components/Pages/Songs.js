import React from 'react';

export const Songs = () => {
    return (
        <div data-testid='songs-id' className='songs-container' aria-hidden='true'>
            <h3 className='songs-section'>Songs</h3> 
            <p className='genres-title'>genres</p>
            <div className='order' aria-hidden='true'>
                <div aria-hidden='true'>
                    <p>pop</p>
                    <iframe src="https://www.youtube.com/embed/9HDEHj2yzew" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>Dua Lipa - Physical</h4>
                </div>
                <div aria-hidden='true'>
                    <p>rock</p>
                    <iframe src="https://www.youtube.com/embed/ovFSEHH_yJw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>Led Zeppelin - Stairway to heaven</h4>
                </div>
                <div aria-hidden='true'>
                    <p>indie</p>
                    <iframe src="https://www.youtube.com/embed/gnhXHvRoUd0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>Kings Of Leon - Use Somebody</h4>
                </div>
                <div aria-hidden='true'>
                    <p>reggaeton</p>
                    <iframe src="https://www.youtube.com/embed/zisuhZqTeH4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>J. Balvin, Maria Becerra - Qué Más Pues?</h4>
                </div>
                <div aria-hidden='true'>
                    <p>electronic</p>
                    <iframe src="https://www.youtube.com/embed/IcrbM1l_BoI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>Avicii - Wake Me Up</h4>
                </div>
                <div aria-hidden='true'>
                    <p>rap</p>
                    <iframe src="https://www.youtube.com/embed/j5-yKhDd64s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h4>Eminem - Not Afraid</h4>
                </div>
            </div>
        </div>
    );
};
