import { CardItem } from '../CardItem';
import style from './cardlist.module.css';

export const CardList = ({ prod }) => {
  return (
    <div className={style.wrapper}>
      {prod.map((el) => {
        return <CardItem key={el._id} prod={el} />;
      })}
    </div>
  );
};