# Washer Product Data

This project contains a dataset of washing machines defined using a TypeScript interface. The `washersData.ts` file includes detailed information about various washer models, such as name, capacity, features, energy class, price, and image.

## Project Description

The project defines a `Washer` interface which specifies the structure of each washer object. Each object includes the following properties:
- **id**: A unique identifier for the washer
- **name**: The name and model of the washer
- **capacity**: The washing capacity of the washer (e.g., '9kg', '10.5kg')
- **features**: A list of features of the washer (array of strings)
- **energyClass**: The energy class rating of the washer (e.g., 'A', 'B', 'F')
- **price**: The price of the washer
- **image**: The file path or URL to the washer’s image

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install dependencies 

3. Add gh-pages:

Add to the package.json

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

Add homepage: 

"homepage": "https://(name of your repo).github.io/(project name)/",

4. To push project live:
# npm run deploy