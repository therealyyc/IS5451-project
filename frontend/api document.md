# Plant Monitoring System API Documentation

This document provides detailed information on the APIs available in the Plant Monitoring System. Each endpoint is documented with its purpose, URL, method, request parameters, and response examples.

## API Endpoints

### 1. List of Plants

**Endpoint:** `/api/plants`
**Method:** `GET`
**Description:** Retrieves a list of plants with their IDs, names, and statuses.
**Response Example:**

```
[
  {
    "plantId": 1,
    "plantName": "Fern",
    "plantStatus": "NORMAL"
  },
  {
    "plantId": 2,
    "plantName": "Bamboo",
    "plantStatus": "MAINTAIN"
  },
  {
    "plantId": 3,
    "plantName": "Cactus",
    "plantStatus": "DANGEROUS"
  }
]
```

### 2. Plant Environmental Conditions

**Endpoint:** `/api/plants/{plantId}/conditions`
**Method:** `GET`
**Description:** Retrieves the environmental conditions of a specific plant.
**Parameters:**

- `plantId` (integer): The ID of the plant.

**Response Example:**

```
{
  "plantId": 1,
  "humidity": 50,
  "temperature": 22,
  "lightLevel": 300,
  "atmosphericPressure": 1013
}
```

### 3. Perform Action on Plant

**Endpoint:** `/api/plants/{plantId}/action`
**Method:** `POST`
**Description:** Performs a specific action on a plant such as drawing curtains, watering, or heating.
**Parameters:**

- `plantId` (integer): The ID of the plant.

**Request Body Example:**

```
{
  "action": "water"
}
```

**Response Example:**

```
{
  "message": "Action performed successfully."
}
```

### 4. Plant Environmental Line Chart

**Endpoint:** `/api/plants/{plantId}/environmental-data/line-chart`
**Method:** `GET`
**Description:** Retrieves historical data charts for the environmental conditions of a plant.
**Parameters:**

- `plantId` (integer): The ID of the plant.
- `dataType` (string): The type of data requested (e.g., 'humidity', 'temperature').

**Response Example:**

```
{
  "value": [
    {
      "name": "humidity",
      "data": [20, 31, 15, 31, 69, 22, 39, 61, 28]
    }
  ],
  "xaxis": {
    "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
  }
}
```

### 5. Plant Environmental pie Chart

**Endpoint:** `/api/plants/{plantId}/environmental-data/pie-chart`
**Method:** `GET`
**Description:** Retrieves historical data charts for the environmental conditions of a plant.
**Parameters:**

- `plantId` (integer): The ID of the plant.


**Response Example:**

```
[
  {
    "type": "humidity",
    "standardData": 27,
    "currentData": 50,
  },
  {
    "type": "light",
    "standardData": 27,
    "currentData": 50,
  },
  {
    "type": "temperature",
    "standardData": 27,
    "currentData": 50,
  }
]
```

