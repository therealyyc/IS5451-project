CREATE TABLE Plants (
    PlantID INTEGER PRIMARY KEY,
    Image BLOB,
    ConditionDescription TEXT
);

CREATE TABLE EnvironmentalFactors (
    EnvironmentID INTEGER PRIMARY KEY,
    PlantID INTEGER,
    Temperature FLOAT,
    Humidity FLOAT,
    Pressure FLOAT,
    Light FLOAT,
    Timestamp DATETIME DEFAULT (datetime('now','localtime')),
    FOREIGN KEY (PlantID) REFERENCES Plants(PlantID)
);
