import React from 'react';
import Button from './Button';


export default class Random extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color : [212, 140, 154]
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    }
    clickHandler() {
        this.setState({ color: this.chooseColor()})
        
    }

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
            <Button onClick =  {this.clickHandler} />
                </h1>
            </div>
        );
    }
}

