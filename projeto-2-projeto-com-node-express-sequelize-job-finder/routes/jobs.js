const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

/**
 * Rota de teste
 */
router.get('/test', (req, res) => res.send('Deu bom'));

/**
 * Add job via post
 */
router.post('/add', (req, res) => {
  const { title, salary, company, description, email, new_job } = req.body;
  console.log(req.body);

  /**
   * insert
   */
  Job.create({ title, salary, company, description, email, new_job })
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
});

module.exports = router;
