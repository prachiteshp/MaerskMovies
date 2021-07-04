import MovieSearch from '../components/MovieSearch'
import MovieDetails from '../components/MovieDetails'
export const routes = [
    {
        path: '/', component: MovieSearch, name: 'moviesearch'
    },
    {
        path: '/moviedetails', component: MovieDetails, name: 'moviedetails'
    }
]