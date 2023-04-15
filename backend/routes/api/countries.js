const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const router = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/news/index');

router.get('/', tryCatchWrapper(getCountries));

router.get('/:name', tryCatchWrapper(async (req, res, next) => {
    const name = req.params.name.common;
    res.status(200).json(await findCountriesByName(name));
  }),
);

module.exports = router;