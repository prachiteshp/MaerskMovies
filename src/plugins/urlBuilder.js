const UrlBuilder = {}
UrlBuilder.install = (Vue) => {
    Vue.prototype.UrlBuilder = UrlBuilder
}
UrlBuilder.getAllMovies = `http://localhost:3000/movies`
export default UrlBuilder