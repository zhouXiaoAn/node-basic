const router = {
    get: {},
    post: {}
}
function addRouter(method,query,callback) {
    method = method.toLowerCase()
    query = query.toLowerCase()
    router[method][query] = callback

}
function findRouter(method,query) {
    method = method.toLowerCase()
    query = query.toLowerCase()
    return router[method][query]
}
module.exports = {
    addRouter,
    findRouter
}