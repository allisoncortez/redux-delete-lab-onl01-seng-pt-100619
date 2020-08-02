//handles rendering of all band components
// from a list of bands provided as props
import React from 'react'
import Band from './Band'
// props: bands, deleteBand

const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} /> )

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;

