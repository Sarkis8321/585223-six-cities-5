import React, {PureComponent} from "react";
import ReviewItem from "../review-item/review-item";
import PropTypes from "prop-types";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
    this.reviewItems = props.reviewItems;
  }


  render() {
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ul className="reviews__list">
          <ReviewItem />
          {/*      {
            this.reviewMock.map((item) => (

              <ReviewItem key={item.id}
                reviewItem={item}
              />
            ))
          } */}
        </ul>
      </React.Fragment>

    );

  }
}

ReviewList.propTypes = {
  reviewItems: PropTypes.array.isRequired,
};
export default ReviewList;
