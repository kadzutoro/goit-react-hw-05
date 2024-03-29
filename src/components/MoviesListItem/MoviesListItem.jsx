import { createImgUrl } from '../../utils'
import css from './MoviesListItem.module.css'

const MoviesListItem = ( {movie: {poster_path, title} } ) => {
    return (
        <div className={css.poster}>
            <img src={createImgUrl(poster_path)} alt={`${title} poster`} />
        </div>
    )
}

export default MoviesListItem;