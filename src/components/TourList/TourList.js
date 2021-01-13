import React, { Component } from 'react';
import Tour from './../Tour/Tour';
import './TourList.scss';
import { tourData } from './../tourData';

class TourList extends Component
{
    state={
        tours:tourData,
    }
    removeTour = (id) => {
        this.setState({tours: this.state.tours.filter(tour=>tour.id!==id)})
    }

    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => <Tour key={tour.id} tour={tour} onRemoveTour={this.removeTour}/>)}
            </section>
        );
    }
}

export default TourList;
