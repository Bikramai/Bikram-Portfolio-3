import { styles } from "../styles";
import { api, dj, logop, man, reactjs, sql } from "../assets";
import { python } from "../assets/icons";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto pt-[100px]`}>
      <div
        className={`inset-0 px-6 flex flex-row justify-center gap-5`}
      >
        <div className="md:flex block flex-row justify-between items-start gap-[300px]">
          <div className="w-full">
            <div className="md:flex justify-start gap-1">
              <img className="h-[400px] w-auto" src={man} alt="man" />
            </div>
            <h1
              className={`${styles.heroHeadText} text-white lg:absolute top-[400px] left-[450px] 2xl:left-[700px]`}
            >
              Bikram
            </h1>
          </div>
          <div className="md:w-2/3 mt-8 mr-20 scale-125">
            <div className="flex flex-col   md:items-end">
              <div className="flex flex-row  gap-3 absolute mr-0 ">
                <img src={logop} alt="man" className="w-12 h-12" />
                <img src={reactjs} alt="man" className="w-12 h-12" />
                <img src={dj} alt="man" className="w-12 h-12" />
                <img src={api} alt="man" className="w-12 h-12" />
                <img src={python} alt="man" className="w-12 h-12" />
                <img src={sql} alt="man" className="w-12 h-12" />
              </div>
              <div className="md:text-2xl text-lg text-white md:text-right mt-14">
                Full Stack Engineer
              </div>
              <div className="flex flex-row justify-between mt-5">
                <ul className="flex-row flex gap-4 md:text-xl text-xs">
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">
                    JavaScript
                  </a>
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">
                    React
                  </a>
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">
                    Django
                  </a>
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">APIs</a>
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">
                    Python
                  </a>
                  <a href="" target="_blank" className="cursor-pointer hover:text-[#00CEA8] ">
                    PostgreSQL
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
