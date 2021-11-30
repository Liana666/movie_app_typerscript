import React from "react";
import def from "./Default.module.css";
import defImg from "../../img/def.png";
import anim from "../../img/anim.png";

import { NavLink } from "react-router-dom";

const Default = () => {

   return (
      <div className={def.container}>
         <div className={def.wrapper}>
            <img className={def.animation} src={anim} />
            <img className={def.img} src={defImg} />
         </div>
         <div className={def.text}>
            <p>
               Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них!
               А раз так, то <span className={def.title}>moviefire</span> – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик.
               Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.
            </p>
            <p>
               Видеотека <span className={def.title}>moviefire</span> – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн.
               Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими)
               и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.
            </p>
            <div className={def.btn_wrapper}>
               <NavLink to="/movie"><div className={def.btn}>Фильмы</div></NavLink>
               <NavLink to="/profile/all-movies"><div className={def.btn}>Избранные</div></NavLink>
            </div>
         </div>


      </div>
   )
}

export default Default;