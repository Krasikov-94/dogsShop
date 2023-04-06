import { CardItem } from '../CardItem';
import style from './cardlist.module.css';

export const CardList = ({ products }) => {
  // console.log(products);
  //выводим карточки из полученных данных
  return (
    <div className={style.wrapper}>
      {products.map((el) => {
        return <CardItem key={el._id} prod={el} />;
      })}
    </div>
  );
};
