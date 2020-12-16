import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from "clsx";
import Link from "next/link";
import {useState} from "react";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination])

export default function Home() {
  const [criteria, setCriteria] = useState(1)
  return (
    <div className={styles.home}>
      <Head>
        <title>School Brandbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo_menu}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                брендбук школ<br/>
                павлодарской области
              </a>
            </Link>
          </div>
          <ul>
            <li><Link href='/'><a>Главная</a></Link></li>
            <li><a href='#welcome'>Приветственное слово</a></li>
            <li><a href='#contents'>Содержание</a></li>
            <li><Link href='/contents'><a>Брендбук</a></Link></li>
            <li><a href='#contacts'>Контакты</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.container}>
          <div className={'flex'}>
            <div>
              <h1>новый взгляд на образовательное<br/> пространство</h1>
              <Link href='/contents'><a className={styles.btn_pav} href="#">посмотреть брендбук</a></Link>
            </div>
            <div className={styles.header_img}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <SwiperSlide><img src="/img/preview.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/preview2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/preview3.png" alt="" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div id='welcome' className={styles.container}>
        <div className={clsx(styles.word_akim, styles.word)}>
          <div>
            <p className={styles.text_p}>— «Сегодняшние изменения в школах — не просто плановый ремонт зданий, а обновленная
              система по оснащению организаций образования. Главным приоритетом в своей работе я обозначил развитие школ
              — так появился проект «Заманауи мектеп», что переводится как «Современная школа». Какой должна быть
              современная школа? Это место, где детям комфортно и уютно, как дома. Продумана каждая деталь — удобные
              кабинеты, мебель, актовые и спортивные залы, столовая, раздевалки, даже пути от кабинета до кабинета. Мы
              должны мотивировать детей к обучению и создавать условия, располагающие к учебе, общению со сверстниками и
              комфортному и безопасному нахождению в стенах школы.
            </p>
            <p>Чтобы создать такую атмосферу, разработали концепт единого стандарта – экстерьера, интерьера,
              благоустройства прилегающих территорий, системы логотипов и фирменного стиля школ, а также прописали
              качество стройматериалов и мебели».
            </p>
          </div>
          <div className={styles.word_header_img}>
            <div className={styles.word_header_line} />
            <img src="/img/akim.png" alt="" />
              <div className={styles.img_text}>
                <p>Абылкаир Скаков</p>
                <p>Аким области</p>
              </div>
          </div>
        </div>

        <div className={clsx(styles.word_lead, styles.word)}>
          <div className={styles.word_lead_img}>
              <div className={styles.word_header_line} />
              <img src="/img/rukovoditel.png" alt="" />
              <div className={clsx(styles.img_text, styles.img_text2)}>
                <p>Динислам Болатханулы</p>
                <p>Руководитель областного управления образования</p>
              </div>
          </div>
          <div className={styles.word_lead_text}>
            <p className={styles.text_p}>– «Заманауи мектеп» – это не просто красивая архитектура и фасады. Это в первую
              очередь безопасность детей, условия для обучения школьников и преподавания. Также нельзя забывать, что
              учитель должен работать в комфортных условиях. Все это предусмотрено в новой программе».
            </p>
          </div>
        </div>

        <div className={styles.new_development}>
          <div className={styles.development_block1}>
            <div className={styles.block}>
              <img src="/img/bl1.png" alt=""/>
              <img src="/img/bl2.png" alt=""/>
            </div>
            <div className={styles.block}>
              <img src="/img/bl3.png" alt=""/>
              <img src="/img/bl4.png" alt=""/>
            </div>
          </div>
          <div className={styles.development_block2}>
            <h6 className={styles.text_span}>о брендбуке</h6>
            <p className={styles.text_p}>
              Брендбук школ Павлодарской области- это свод стандартов по формированию требований к логотипам, фирменному стилю, навигации школ, а также правила реализации проектов интерьера, экстрерьера и благоустройства
              <br/><br/>
              Сегодня многие казахстанские школы соответствуют стандартам, неизменным уже более полувека. Но в цифровую эпоху мир меняется со стремительной скоростью — необходимо не только не упустить момент, но и правильно адаптироваться в новых условиях. В первую очередь развитие и трансформация должны коснуться детских образовательных учреждений, ведь дети — не только наше будущее, но и настоящее.
              Они с малых лет познают мир через окружающие предметы и задача школы — не ускорить взросление, а сделать период детства насыщенным и интересным, дать возможность детям извлечь все необходимые уроки в комфортной обстановке.
              Здание школы — это место, где ребенок проводит большую часть своего детства. Именно здесь закладывается его личность и формируется мироощущение. Школа должна стать таким пространством, которое ученик захочет изучать. Здесь он может гулять, учиться, развиваться и радоваться.
            </p>
          </div>
        </div>

        <div className={styles.modern_schools}>
          <h6 className={styles.text_span}>критерии современной школы: </h6>
          <div className={styles.modern_block}>
            <div className={styles.modern_block_text}>
              <p>
                <span className={clsx(criteria === 1 && styles.modern_block_text_active)} onClick={() => setCriteria(1)}>открытость</span><br/>
                <span className={clsx(criteria === 2 && styles.modern_block_text_active)}  onClick={() => setCriteria(2)}>безопасность и комфорт</span><br/>
                <span className={clsx(criteria === 3 && styles.modern_block_text_active)}  onClick={() => setCriteria(3)}>просторность</span><br/>
                <span className={clsx(criteria === 4 && styles.modern_block_text_active)}  onClick={() => setCriteria(4)}>мобильность</span><br/>
                <span className={clsx(criteria === 5 && styles.modern_block_text_active)}  onClick={() => setCriteria(5)}>креативность</span><br/>
              </p>
            </div>
            {criteria === 1 &&
              <div className={styles.modern_block_text2}>
                <span>открытость</span>
                <p className={styles.text_p}>
                  Все в школе создано для развития детей — и потому должно быть открытым и
                  доступным
                  для учеников в любое время. Классы, любые учебные помещения, актовые залы и спортзалы — не закрываются
                  на замок.
                  Одновременно с этим, необходимо сохранить место для личного пространства. Дети имеют право на личное
                  пространство и потребность в нём.
                </p>
              </div>
            }
            {criteria === 2 &&
              <div className={styles.modern_block_text2}>
                <span>безопасность и комфотр</span>
                <p className={styles.text_p}>
                  Важно сделать окружающее пространство безопасным, уделяя внимание подбору отделочных материалов и
                  мебели. Маршруты эвакуации, различная навигация в школе должны быть понятными и наглядными для
                  учащихся всех возрастов.<br/><br/>

                  Современная школа формирует новые стандарты к оснащению рабочего места учителя. При этом, необходимо
                  помнить и о функциональности рабочих мест других сотрудников школы. Дополнительно предусматриваются
                  места отдыха и общие кабинеты, зонирование которых обеспечит комфортное совместное пребывание.
                  Заботясь о безопасности, помните, что наблюдательность, неравнодушное отношение к тому, что происходит
                  в стенах школы — формируют безопасную среду и помогают вовремя реагировать на тревожные сигналы.
                </p>
              </div>
            }
            {criteria === 3 &&
              <div className={styles.modern_block_text2}>
                <span>просторность</span>
                <p className={styles.text_p}>
                  Нет необходимости каждый квадратный метр загромождать функциональностью, нужно создавать пространства
                  для красоты и отдыха — дайте возможность отвлечься, получить эмоции и насладиться эстетикой.

                  Формируйте разнообразную территорию: наряду с открытым пространством запланируйте камерные
                  пространства — это позволит обеспечить инклюзивность, потому что не для всех детей просторность
                  означает комфорт.
                </p>
              </div>
            }
            {criteria === 4 &&
              <div className={styles.modern_block_text2}>
                <span>мобильность</span>
                <p className={styles.text_p}>
                  Подвижный интерьер дает возможность трансформировать пространство и уходит от привязки классического
                  интерьера только к одной задаче. Изменяемость и вариативное использование пространств поможет учащимся
                  постоянно экспериментировать и менять окружение под себя.Важно отметить, что при всех преимуществах —
                  мобильность не должна усложнять задачу детям и учителям: они должны понимать что делать в этих
                  пространствах и как трансформировать их под образовательные задачи.
                </p>
              </div>
            }
            {criteria === 5 &&
              <div className={styles.modern_block_text2}>
                <span>открытость</span>
                <p className={styles.text_p}>
                  В современной школе окружение должно быть креативным и иметь функциональное разнообразие. Это поможет
                  сформировать важный образовательный тренд — интерес детей исследовать пространство.<br/><br/>

                  При этом избегайте «слишком креативной» территории — ученики должны понимать, что от них требуется и
                  как использовать окружающий их интерфейс.
                </p>
              </div>
            }
          </div>
        </div>

        <div id='contents' className={styles.content}>
          <h6 className={styles.text_span}>содержание</h6>
          <div className={styles.content_block}>
            <Link href='/contents'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph1.png" alt="" />
                </div>
                <span>логотип</span>
                <p className={styles.text_p}>
                  дает возможность выделится, идентифицироваться на фоне остальных, показав свои преимущества, специализацию.
                </p>
              </a>
            </Link>
            <Link href='/contents#business-documentation'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph2.png" alt="" />
                </div>
                <span>фирменный стиль</span>
                <p className={styles.text_p}>
                  деловая, сувенирная и представительская продукция, одежда и аксессуары
                </p>
              </a>
            </Link>
            <Link href='/contents#navigation'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph3.png" alt="" />
                </div>
                <span>навигация</span>
                <p className={styles.text_p}>
                  многоуровневая информационная система школы. внешняя и внутренняя навигация.
                </p>
              </a>
            </Link>
            <Link href='/improvement/index.html'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph4.png" alt="" />
                </div>
                <span>благоустройство</span>
                <p className={styles.text_p}>
                  требования к реализации решений благоустровайства  помещений
                </p>
              </a>
            </Link>
          </div>
          <div className={clsx(styles.content_block, styles.cont_bl)}>
            <Link href='/exterior/index.html'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph5.png" alt="" />
                </div>
                <span>экстерьер</span>
                <p className={styles.text_p}>
                  требования к реализации экстерьерных решений. cхемы фасадов, материалы, конструктив
                </p>
              </a>
            </Link>
            <Link href='/interior/index.html'>
              <a className={styles.blocks}>
                <div className={styles.blocks_img}>
                  <img src="/img/ph6.png" alt="" />
                </div>
                <span>интерьер</span>
                <p className={styles.text_p}>
                  требования к реализации интерьерных решений, материалов, мебели.
                </p>
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.balance}>
          <h6 className={styles.text_span}>
            При проектировании образовательного пространства соблюдайте необходимый баланс:
          </h6>
          <div className={styles.balance_body}>
            <div>
              <span>1</span>
              <p>креатив не должен преобладать над функциональностью</p>
            </div>
            <div>
              <span>2</span>
              <p>внедрение новшеств не должно загромождать все свободное пространство</p>
            </div>
            <div>
              <span>3</span>
              <p>безопасность не ограничивает свободу движения и не сковывает учащихся</p>
            </div>
            <div>
              <span>4</span>
              <p>мобильное пространство остается понятным и выполняет образовательные задачи</p>
            </div>
            <div>
              <span>5</span>
              <p>вместе с открытостью и публичностью необходимы места уединения и самодемонстрации</p>
            </div>
            <div>
              <span>6</span>
              <p>При всех новшествах, школа не должна терять образовательную значимость и становиться местом временного содержания детей</p>
            </div>
          </div>
        </div>

        {/*<div className={styles.embody}>
          <h6 className={styles.text_span}>и вы тоже можете<br/>воплотить это в жизнь</h6>
          <div className={styles.embody_block}>
            <div className={styles.embody_cont}>
              <p>01</p>
              <p>логотип</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
            <div className={styles.embody_cont}>
              <p>02</p>
              <p>фирменный стиль</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
            <div className={styles.embody_cont}>
              <p>03</p>
              <p>навигация</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
            <div className={styles.embody_cont}>
              <p>04</p>
              <p>благоустройство</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
            <div className={styles.embody_cont}>
              <p>05</p>
              <p>экстерьер</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
            <div className={styles.embody_cont}>
              <p>06</p>
              <p>интерьер</p>
              <p>240 мб</p>
              <a href="" className={styles.btn_pav}>скачать гайдлайн</a>
            </div>
          </div>
        </div>
        */}

        <div id='contacts' className={styles.question}>
          <h6 className={styles.text_span}>как использовать гайдлайн?<br/> спросите у нас</h6>
          <p className={styles.text_p}>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение
            нашей деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных
            задач. Не следует, однако забывать, что реализация намеченных плановых заданий требуют от нас анализа
            соответствующий условий активизации.</p>
          <a href="">свяжитесь с нами</a>
        </div>

        <div className={styles.footer}>
          <a href="">© appazov branding agency 2013-2020, All Rights Reserved</a>
          <span>/\</span>
          <ul>
            <li><a href="">наш сайт</a></li>
            <li><a href="">инстаграм</a></li>
            <li><a href="">биханс</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}
