import React, { Component } from 'react'

export default class movieItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, poster_src, title, overview} = this.props.movie
        return (
            <div className="itemMovie" key={ id.toString() }>
                <div className="itemImg">
                    <img src={ poster_src } className="imgMovie"/>
                </div>
                <div className="itemDescript">
                    <h2 className="titleMovie">{ title }</h2>
                    <p>{ overview }</p>
                </div>
            </div>
        )
    }
}
