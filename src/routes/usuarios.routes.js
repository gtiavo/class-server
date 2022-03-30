const { Router } = require('express'),
      router = Router(),
      { usuarios } = require('../controllers'),
      { getUsuarios } = usuarios


router.get('/', getUsuarios )





module.exports = router;