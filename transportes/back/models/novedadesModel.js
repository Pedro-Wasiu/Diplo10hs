
var pool = require('./bd');

async function getNovedades() {
    var query = 'SELECT * FROM novedades';
    var [rows, fields] = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = "INSERT INTO novedades SET ?";
        var [rows, fields] = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Test the getNovedades function
(async () => {
    try {
        console.log("Testing getNovedades function:");
        const novedades = await getNovedades();
        console.log(novedades);
    } catch (error) {
        console.error('Error connecting to novedades table:', error);
    }
})();

async function deleteNovedadesById(id) {
    var query = "DELETE FROM novedades WHERE id = ?";
    var [rows, fields] = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = 'SELECT * FROM novedades WHERE id = ?'; // Corrected query
    var [rows, fields] = await pool.query(query, [id]);
    return rows[0];
}

// Para modificar el update de los datos
async function modificarNovedadesById(obj, id) {
    try {
        var query = 'UPDATE novedades SET ? WHERE id = ?';
        var [rows, fields] = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getNovedades,
    insertNovedades,
    deleteNovedadesById,
    getNovedadesById,
    modificarNovedadesById
};