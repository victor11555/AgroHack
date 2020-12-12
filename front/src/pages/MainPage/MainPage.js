import React from 'react';
import { useContext } from 'react';
import Order from '../../Order/Order';
import { useSelector } from 'react-redux';
import { mainURL } from '../../utils/urls';

function MainPage() {
  const { user } = useSelector(store => store)

  let offers;
  fetch(mainURL)
    .then(res => res.json())
    .then(data => offers = data)
  return (
    <>
      {offers.map((el) => )}
    </>
  );
}
// прикрутить апи и на ней точки где юзер и где все офферы
// чтобы там уметь считать расттояние и показывать только до в определенном радиусе
//  как с пиццами забираем вообще все offers с базы и бежим по ним рисуя компоненты
//  к каждому оффера сделать кноппк (показать подробно) где можно тыкнуть уже
//  на конкретный ордер и выбрать сколько хочешь купить
export default MainPage;
