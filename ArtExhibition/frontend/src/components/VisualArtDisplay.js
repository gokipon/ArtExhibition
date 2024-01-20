
// Import necessary libraries or modules
import React from 'react';
import p5 from 'p5';
import '../styles/styles.css';
import { processEnergyData } from '../../backend/api/energyManagement';

class VisualArtDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let energyData;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            energyData = processEnergyData(this.props.energyData, this.props.userActions);
        };

        p.draw = () => {
            p.background(0);
            // Use the processed energy data to create visual art
            // This is a placeholder - replace with actual drawing logic
            energyData.forEach((data, index) => {
                p.fill(data.color);
                p.ellipse(index * 50, p.height / 2, data.size);
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>
                {/* The canvas will be inserted here */}
            </div>
        );
    }
}

export default VisualArtDisplay;

