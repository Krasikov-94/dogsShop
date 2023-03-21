import { CardItem } from '../CardItem';
import style from './cardlist.module.css';

export const CardList = ({ prod }) => {
  return (
    <div className={style.wrapper}>
      {prod.map((el) => {
        el.avgRating = [];
        el.reviews.map((p) => {
          el.avgRating.push(p.rating);
        });
        return <CardItem key={el._id} prod={el} pop={el.avgRating} />;
      })}
    </div>
  );
};
