import { ReactComponet as StarFull} from 'assets/img/star-full.svg';
import { ReactComponet as StarHalf} from 'assets/img/star-half.svg';
import { ReactComponet as StarEmpty} from 'assets/img/star-empty.svg';
import './>styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-starts-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
             </div>
    );
}

export default MovieStars;