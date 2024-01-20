# ArtExhibition Documentation

## Project Structure

The project is divided into several directories, each with a specific purpose:

- `backend/`: Contains the backend code, including API endpoints and utility functions.
- `frontend/`: Contains the frontend code, including static files, source code, and tests.
- `docker/`: Contains Docker configuration files.
- `docs/`: Contains project documentation.

## Backend

The backend is responsible for processing energy data based on user actions. The main function for this is `processEnergyData` in `backend/api/energyManagement.js`. This function takes in energy data and user actions as arguments, and returns processed energy data.

```javascript
// backend/api/energyManagement.js
const utils = require('../utils/utils');

function processEnergyData(energyData, userActions) {
    let processedData = utils.processData(energyData, userActions);
    return processedData;
}
```

The actual processing logic is implemented in `backend/utils/utils.js`.

```javascript
// backend/utils/utils.js
function processData(energyData, userActions) {
    let processedData = energyData.map((data, index) => {
        let processedPoint = data * userActions[index];
        return processedPoint;
    });
    return processedData;
}
```

## Frontend

The frontend is responsible for displaying visual art based on the processed energy data. The main component for this is `VisualArtDisplay` in `frontend/src/components/VisualArtDisplay.js`. This component uses the p5.js library to create the visual art.

```javascript
// frontend/src/components/VisualArtDisplay.js
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
            energyData.forEach((data, index) => {
                p.fill(data.color);
                p.ellipse(index * 50, p.height / 2, data.size);
            });
        };
    }
}
```

Utility functions for the frontend are stored in `frontend/src/utils/utils.js`.

```javascript
// frontend/src/utils/utils.js
export function formatEnergyDataForDisplay(energyData) {
    return energyData.map(data => ({
        ...data,
        size: data.size * 10,
        color: `rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`
    }));
}

export function handleUserAction(action) {
    // Placeholder for action handling logic
}
```

The styles for the frontend are defined in `frontend/src/styles/styles.css`.

```css
/* frontend/src/styles/styles.css */
body {
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

div {
    // Additional styles
}
```

## Docker

Docker is used to containerize the application. The Docker configuration files are stored in the `docker/` directory.

## Usage

Users can access the website and browse through different sections. In the `/energyart` section, users can experience visual art based on energy data.

## Development Process

The development process includes setting up the environment, developing the frontend and backend, integrating data, testing and debugging, deploying using Docker, and maintaining the application.

