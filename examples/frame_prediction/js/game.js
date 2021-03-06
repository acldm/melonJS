/**
 * main
 */
var game = {

    /**
     *
     * Initialize the application
     */
    onload: function() {

        // game will attempt to run at 60 fps
        me.sys.fps = 60;

        // entities will only update at 15 fps
        me.sys.updatesPerSecond = 15;

        // init the video
        if (!me.video.init(800, 600, {scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // set all ressources to be loaded
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    /**
     * callback when everything is loaded
     */
    loaded: function ()    {
        // register our objects entity in the object pool
        me.pool.register("BallEntity", game.BallEntity);

        // load a level
        me.levelDirector.loadLevel("room");
    }
};
