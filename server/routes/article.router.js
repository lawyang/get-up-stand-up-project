const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// LEAVE THIS HERE FOR NOW FOR USE AS TEMPLATE

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM articles;`;
    pool.query(queryText)
    .then((result)=>{
        console.log('back from database with articles');
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log('error getting articles:', error);
        res.sendStatus(500);
    })
});

// first has to insert into locations and return id, then inserts that into articles
router.post('/', (req, res) => {
    const address = req.body.address;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const queryText = `INSERT INTO locations(address, lat, lng) VALUES ($1, $2, $3) RETURNING id;`
    pool.query(queryText, [address, lat, lng])
    .then((result)=>{
        console.log('inserted into location');
        const location_id = result.rows[0].id;
        const user_id = req.body.user_id;
        const research_date = req.body.research_date;
        const research_title = req.body.research_title;
        const research_type = req.body.research_type;
        const research_phase = req.body.research_phase;
        const institution_name = req.body.institution_name;
        const institution_url = req.body.institution_url;
        const status = 1;
        const funding_source = req.body.funding_source;
        const related_articles = req.body.related_articles;
        const articleQueryText = `INSERT INTO articles(location_id, user_id, research_date, research_title, research_type,
        research_phase, institution_name, institution_url, status, funding_source, related_articles)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
        pool.query(articleQueryText, [location_id, user_id, research_date, research_title, research_type,
        research_phase, institution_name, institution_url, status, funding_source, related_articles])
        .then(()=>{
            console.log('article successfully created');
            res.sendStatus(201);
        }).catch((error)=>{
            console.log('error creating article:', error);
            res.sendStatus(500);
        })
        
    }).catch((error)=>{
        console.log('error inserting location:', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res)=>{

})

module.exports = router;