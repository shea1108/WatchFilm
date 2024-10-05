const db = require('../knex/index');



function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}



function getVideos(callback) {
    db('videos')
        .select('*')
        .then(results => callback(results, null))
        .catch(error => {
            console.error('Database query error:', error);
            callback(null, error);
        });
}


function createVideo(videoData, callback) {
    db('videos')
        .insert({
            title: videoData.title,
            description: videoData.description,
            img_url: videoData.img_url,
            genre: videoData.genre,
            slug: generateSlug(videoData.title)
        })
        .then((results) => callback(results, null))
        .catch((error) => callback(null, error));
}


function createEpisode(episodeData, callback) {
    console.log("Inserting Episode Data:", episodeData);

    db('episodes')
        .insert({
            video_id: episodeData.video_id,
            episode_title: episodeData.episode_title,
            episode_number: episodeData.episode_number,
            description: episodeData.description,
            release_year: episodeData.release_year,
            url: episodeData.url
        })
        .then(results => {
            console.log("Episode Inserted, ID:", results);
            callback(results, null);
        })
        .catch(error => {
            console.error("Database insertion error:", error);
            callback(null, error);
        });
}


module.exports = {
    getVideos,
    createVideo,
    createEpisode
};