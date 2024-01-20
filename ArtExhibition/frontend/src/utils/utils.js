
// ArtExhibition/frontend/src/utils/utils.js

// This file can be used to store utility functions that can be used across the frontend application.

// For example, you might have a function to format the energy data for display:

export function formatEnergyDataForDisplay(energyData) {
    // This is a placeholder - replace with actual formatting logic
    return energyData.map(data => ({
        ...data,
        size: data.size * 10, // Scale the size for visual impact
        color: `rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})` // Convert color object to CSS string
    }));
}

// Or a function to handle user actions:

export function handleUserAction(action) {
    // This is a placeholder - replace with actual action handling logic
    switch (action.type) {
        case 'ZOOM_IN':
            // Do something
            break;
        case 'ZOOM_OUT':
            // Do something else
            break;
        // Add more cases as needed
        default:
            // Default case
            break;
    }
}