const router = require('express').Router();

const posts = require('./bolgs-router');

router.get('/', (req, res) => {
  const query = req.query;

  posts
    .find(query)
    .then(blogs => {
      res.status(200).json(blogs);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: 'The posts information could not be retrieved.' });
    });
});

router.get('/:id', (req, res) => {
  posts
    .findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: 'The post information could not be retrieved.' });
    });
});

module.exports = router;
