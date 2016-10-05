exports.unauthorized = function(res, msg){
    res.status(401).json(msg || "Unauthorized");
}