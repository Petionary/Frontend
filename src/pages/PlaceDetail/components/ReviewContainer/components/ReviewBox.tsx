import ReviewItem from './ReviewItem';

const ReviewBox = () => {
  return (
    <section className="grid grid-cols-auto-fill-review place-items-center">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </section>
  );
};

export default ReviewBox;
