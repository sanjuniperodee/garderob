import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column " data-aos="fade-left">
          <div className="sec-title">
            <h2>Тысяча пользователей продают свою одежду в хорошем качестве</h2>
            <div className="text">
              Если вам вещь не подходит по размеру, разонравился цвет или еще что-то, не спешите ее выкидывать.
              С помощью нашего сайта вы быстро избавитесь от вещи и еще заработаете
            </div>
          </div>
          <ul className="list-style-one">
            <li>Сфоткайте одежду с разных ракурсов</li>
            <li>Дайте ей дополнительное описание</li>
            <li>Отправьте на проверку и получайте заявки</li>
          </ul>
          <Link href="/register" className="theme-btn btn-style-one bg-blue">
            <span className="btn-title">Начать продавать</span>
          </Link>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <Image
            width={600}
            height={600}
            src="/images/about.avif"
            alt="about"
          />
        </figure>

        {/* <!-- Count Employers --> */}
        <div className="count-employers " data-aos="flip-right">
          <div className="check-box">
            <span className="flaticon-tick"></span>
          </div>
          <span className="title">300k+ Пользователей</span>
          <figure className="image">
            <Image
              width={234}
              height={61}
              layout="responsive"
              src="/images/resource/multi-logo.png"
              alt="resource"
            />
          </figure>
        </div>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About;
