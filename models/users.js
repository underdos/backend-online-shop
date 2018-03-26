var db = require('./connection');

const users = {
    insert: function(data) {
        let result = {
            status: 10,
            message: "Error",
            data: []
        }

        db.none('INSERT INTO t_mtr_users(first_name, phone, email, password) VALUES(${first_name}, ${phone}, ${email}, ${password})', data)
        .then((data) => {
            result.message = "Success";
            result.data = data;
            return result;
        })
        .catch(error => {
            
            result.message = error.detail;
            return result;
        });        
    }
}

module.exports = users;