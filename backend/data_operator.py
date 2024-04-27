import sqlite3
import time
DB_PATH = 'data/project.db'

# http://127.0.0.1:5010/putNewData?humidity=110&temperature=220&pressure=1017.3&ph=6&light=660
def insert_environment_data(plant_id, temperature, humidity, pressure, light, timestamp):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        insert_query = """
        INSERT INTO EnvironmentalFactors (PlantID, Temperature, Humidity, Pressure, Light, Timestamp)
        VALUES (?, ?, ?, ?, ?, ?);
        """
        data_tuple = (plant_id, temperature, humidity, pressure, light, timestamp)
        cursor.execute(insert_query, data_tuple)
        conn.commit()
        print("Data inserted successfully.")
    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
        return 500
    finally:
        if conn:
            cursor.close()
            conn.close()
        return 200


def get_plant_condition(plant_id):
    """
    查询并返回指定植物ID的条件描述。

    参数:
        db_path (str): 数据库文件路径。
        plant_id (int): 要查询的植物的ID。
    """
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        query = "SELECT ConditionDescription FROM Plants WHERE PlantID = ?;"
        cursor.execute(query, (plant_id,))
        result = cursor.fetchone()
        if result:
            return result[0]
        else:
            return "No condition description found for the specified plant ID."

    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
            

def get_plant_env_data(plantID):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    query = "SELECT Temperature, Humidity, Pressure, Light FROM EnvironmentalFactors WHERE PlantID = ? ORDER BY EnvironmentID DESC;"
    cursor.execute(query, (plantID,))
    result = cursor.fetchone()
    return result

def get_plant_env_line_data(plantID, dataType):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    query = "SELECT {}, timestamp FROM EnvironmentalFactors WHERE PlantID = ? ORDER BY EnvironmentID DESC LIMIT 10;".format(dataType)
    cursor.execute(query, (plantID,))
    results = cursor.fetchall()
    line_data = []
    line_cat = []
    for i in range(len(results) - 1, -1, -1):
        line_data.append(round(results[i][0], 2))
        line_cat.append(results[i][1])
    print(line_data)
    return line_data, line_cat


def update_plant_condition(condition):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    query = "UPDATE Plants SET ConditionDescription = '{}' WHERE PlantID = '1'".format(condition)
    cursor.execute(query)
    conn.commit()
    
def get_plant_condition(plantID):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    query = "SELECT ConditionDescription FROM Plants WHERE PlantID = '1'"
    cursor.execute(query)
    result = cursor.fetchone()
    return result[0]