import { Fragment } from 'react';
import { ratingMap } from '../../utils/constants';
import './rating.css';

type RatingType = {
  score: number;
  title?: string;
  handleFormData?: () => void;

}
function Rating(props: RatingType) {
  const {score, title, handleFormData} = props;
  return (
    <>
      {ratingMap.map((rating) => {
        console.log('====================================');
        console.log(rating, score);
        console.log('====================================');
        return (
          <Fragment key = {rating.score}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={rating.score}
              id={`${rating.score}-stars`}
              type="radio"
              defaultChecked = {rating.score <= score}
              // onChange={handleFormData}
            />
            <label
              htmlFor={`${rating.score}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        );
      }
      )}
    </>
  );
}

export default Rating;
