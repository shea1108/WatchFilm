const movieModel = require('../model');



class HomeController {

    index(req, res, next) {
        movieModel.getVideos((videos, error) => {
            if (error) {
                console.error("Error fetching videos:", error);
                return res.status(500).json({ message: 'An error occurred while fetching videos.' });
            }

            res.json({ videos });
        });
    }
}



module.exports = new HomeController();
