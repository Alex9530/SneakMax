import { useSelector } from "react-redux";
import { useEffect } from "react";
import { teamSelector } from "../../redux/slices/team/teamSelector";
import { fetchTeam, TeamMember } from "../../redux/slices/team/teamSlice";
import { useAppDispatch, RootState } from "../../redux/Store";
import figure2 from "../../icons/figure2.svg";
import "../Team/Team.scss";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
export default function Team() {
  const dispatch = useAppDispatch();
  const team = useSelector((state: RootState) => teamSelector(state));

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  console.log(team);

  return (
    <div className="background-theme" id="team">
      {" "}
      <div className="container container-team">
        {" "}
        <h4 className="team-heading">Наша команда</h4>{" "}
        <div className="swiper-container-off">
          {team.isLoading && team.data.length === 0 ? (
            <p>...loading</p>
          ) : (
            <ul className="list-team-container">
              {" "}
              {team.data.map((item: TeamMember) => (
                <li key={item.id} className="list-team">
                  {" "}
                  <img
                    src={item.imgUrl}
                    className="team-image"
                    alt={item.name}
                  />{" "}
                  <p className="team-name">{item.name}</p>{" "}
                  <p className="team-role">{item.role}</p>{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="swiper-container">
          <Swiper
            pagination={{ clickable: true }}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper_button_right",
              prevEl: ".swiper_button_left",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {team.isLoading && team.data.length === 0 ? (
              <p>...loading</p>
            ) : (
              <ul>
                {" "}
                {team.data.map((item: TeamMember) => (
                  <SwiperSlide>
                    {" "}
                    <li key={item.id} className="list-team">
                      {" "}
                      <img
                        src={item.imgUrl}
                        className="team-image"
                        alt={item.name}
                      />{" "}
                      <p className="team-name">{item.name}</p>{" "}
                      <p className="team-role">{item.role}</p>{" "}
                    </li>
                  </SwiperSlide>
                ))}
              </ul>
            )}
          </Swiper>
        </div>
        <div className="button-container">
          <motion.button
            whileHover={{
              y: -10,
            }}
            whileTap={{
              y: 0,
              scale: 0.9,
            }}
            className="swiper_button_left"
          >
            предыдущий
          </motion.button>
          <motion.button
            whileHover={{
              y: -10,
            }}
            whileTap={{
              y: 0,
              scale: 0.9,
            }}
            className="swiper_button_right"
          >
            сделующий
          </motion.button>
        </div>
      </div>
      <img className="team-figure" src={figure2} alt="Figure" />{" "}
    </div>
  );
}
