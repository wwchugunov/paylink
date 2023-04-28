import pool from '../Config/db.js';


class UserController{
    async createUser(req, res){
        const {name, surname} = req.body;
        const newPerson = await pool.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *', [name, surname]);
        res.json(newPerson.rows[0]);
    }

    async getUser(req, res){
        const allPerson = await pool.query('SELECT * FROM person');
        res.json(allPerson.rows);
    }


    async deleteUser(req, res){

    }

    async updateUser(req, res){
       const {id, name, surname} = req.body;
       const updatePerson = await pool.query('UPDATE person SET name = $1, surname = $2 WHERE id = $3', [name, surname, id]);
       res.json('User was updated');
    }

}


export default new UserController();  