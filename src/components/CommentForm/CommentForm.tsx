import { ChangeEventHandler, Fragment, useState } from 'react';
import { COMMENT_MAX_LENGTH, ratingMap } from '../../utils/constants';
type handleFormDataType = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
function CommentForm() {

  const comment = {
    review: '',
    rating: -1
  };

  const [formData, setFormData] = useState(comment);


  const handleFormData: handleFormDataType = ({target}) => {
    setFormData({...formData, [target.name]:target.value});
  };

  const canSubmitReview = formData.rating >= 1 && formData.review.length > COMMENT_MAX_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingMap.map(({score, title}) =>
          (
            <Fragment key = {score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={score}
                id={`${score}-stars`}
                type="radio"
                onChange={handleFormData}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          )
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleFormData}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
            at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!canSubmitReview}
        >
           Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
