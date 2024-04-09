const db = require("../database/models")
const { Op } = db.Sequelize
module.exports = {
  list: (req, res) => {
    db.Genre.findAll()
      .then((genres) => {
        res.render("genresList", {
          genres
        })
      })
  },

  detail: (req, res) => {
    const { id } = req.params
    db.Genre.findByPk(id)
      .then((genre) => res.render("genresDetail", {
        genre
      })
      )
  }
}