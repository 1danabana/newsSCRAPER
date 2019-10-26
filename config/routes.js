module.exports = function(router){
    router.get("/", function( req, res){
        res.render("home");
    });
    router.get("/saved", function(reg, res){
        res.render("saved");
    });
};