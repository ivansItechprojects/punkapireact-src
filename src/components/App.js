import React from "react";
import Preloder from './Preloder';

class App extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentDidMount() {
        fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=30`)
            .then(result => result.json())
            .then(items => this.setState({ items }))
    }
    render() {
        return (
            <div className="appContent">
                <Preloder />
                <h1>Beer App Rreact</h1>
                <div className="beerList grid-x ">
                    {this.state.items.length ?
                        this.state.items.map(item =>
                            <div key={item.id} className="boxdiv cell small-10 small-6 large-4">
                                <h3 className="boxdiv__heading">{item.name}</h3>
                                <div className="boxdiv__content--content">
                                    <div className="boxdiv__content--leftcontent">
                                        <img src={item.image_url} />
                                        <p className="boxdiv__content--tagline" >{item.tagline}</p>
                                        <p><strong>First brewed</strong><br />{item.first_brewed}</p>
                                        <strong>Contributed by</strong><p>{item.contributed_by}</p>
                                    </div>
                                    <div className="boxdiv__content--rightcontent">
                                        <strong className="float-left">Description:</strong><p>{item.description}</p>
                                        <strong>Beer stats:</strong>
                                        <ul className="boxdiv__content--rightcontent__list">
                                            <li>{item.ibu} ibu </li>
                                            <li>Alcohol by volume {item.abv} abv % </li>
                                            <li>{item.ebc} ebc</li>
                                        </ul>
                                        <strong>Brewers tips:</strong><p>{item.brewers_tips}</p>
                                        <strong>Good width:</strong><p>{item.food_pairing}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        : <p>Loading...</p>
                    }
                </div>
            </div>
        );
    }

}

export default App;