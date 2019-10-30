const router = require('express').Router();

const posts = require('../data/db');

router.get('/', (req, res) => {
  posts
    .find()
    .then(blogs => {
      res.status(200).json(blogs);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: 'The post information could not be retrieved.' });
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

router.delete('/:id', (req, res) => {
  posts
    .remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The user was deleted' });
      } else {
        res
          .status(400)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'The post could not be removed' });
    });
});

module.exports = router;
