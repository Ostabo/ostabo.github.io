import React from 'react';

import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { Tooltip } from 'react-tooltip';

const TimelineCenter = ({
  left = 'top-1/2',
  right = 'top-1/2',
  rounded = 'rounded-full',
  height = 'h-full',
  extra = '',
}: {
  left?: string;
  right?: string;
  rounded?: string;
  height?: string;
  extra?: string;
}) => (
  <div className={`w-full ${height} ${extra} relative`}>
    {left.length > 0 ? (
      <div
        className={`border rounded-full w-1/2 absolute left-0 ${left}`}
      ></div>
    ) : (
      <></>
    )}
    {right.length > 0 ? (
      <div
        className={`border rounded-full w-1/2 absolute right-0 ${right}`}
      ></div>
    ) : (
      <></>
    )}
    <div
      className={`bg-primary ${rounded} w-3 h-full absolute left-1/2 -translate-x-1/2`}
    ></div>
  </div>
);

export const Projects = () => {
  return (
    <section
      className={`bg-background p-8 w-full flex flex-col justify-content-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      id="projects"
    >
      <h2 className={`text-3xl font-bold text-gray-900 p-8 self-center`}>
        Projects & Experience
      </h2>
      <h3
        className={`text-lg text-primary text-center border-2 rounded-2xl p-2`}
      >
        <q>
          Once a new technology rolls over you, if you're not part of the
          steamroller, you're part of the road.
        </q>
        <br />
        <cite> - Stewart Brand</cite>
      </h3>
      <div className={`grid grid-cols-3 py-16 border-b timeline`}>
        <div
          className={`px-4 rounded-r-lg justify-self-end text-end border-r h-20`}
        >
          <h4 className={`text-xl`}>
            <b>2024</b>
          </h4>
          <p>
            Bachelor of Science in
            <br />
            <i
              data-tooltip-id="CS"
              data-tooltip-place="bottom"
              data-tooltip-content="Practiced Computer Science"
            >
              Angewandte Informatik
              <Tooltip id="CS" />
            </i>
          </p>
        </div>
        <TimelineCenter left={'top-4'} />
        <div
          className={`px-4 rounded-l-lg border-l justify-self-start text-start`}
        >
          <h4 className={`text-xl`}>
            <b>Skillworks AG</b>
          </h4>
          <p>
            <small>Apr. 2024</small>
            <br />
            Konstanz, Germany
            <br />
            <i
              data-tooltip-id="skillworks-bachelor"
              data-tooltip-content={
                'Development of a modular system for the efficient assembly of UI components for process control systems'
              }
              data-tooltip-place="bottom-end"
            >
              Bachelor Thesis
              <Tooltip id="skillworks-bachelor" />
            </i>
          </p>
        </div>

        <div></div>
        <TimelineCenter left={''} right={''} height={'h-8'} extra={'my-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
        <div></div>

        <div></div>
        <TimelineCenter
          left={''}
          right={'top-6'}
          height={'h-20'}
          rounded={'rounded-full'}
        />
        <div
          className={`px-4 rounded-lg h-6 mt-2 border-l justify-self-start text-start`}
        >
          <Link
            spy={true}
            active="active"
            smooth={true}
            duration={1000}
            key="filmfinder"
            to="filmfinder"
            className="font-medium text-gray-600 hover:text-secondary"
          >
            Filmfinder
          </Link>
        </div>

        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'my-2'} />
        <div></div>

        <div></div>
        <TimelineCenter
          left={''}
          right={'top-2'}
          height={'h-20'}
          rounded={'rounded-t-full'}
        />
        <div
          className={`px-4 rounded-lg h-6 border-l justify-self-start text-start`}
        >
          <Link
            spy={true}
            active="active"
            smooth={true}
            duration={1000}
            key="hexxagon"
            to="hexxagon"
            className="font-medium text-gray-600 hover:text-secondary"
          >
            Hexxagon
          </Link>
        </div>

        <div className={`px-4 rounded-r-lg justify-self-end text-end border-r`}>
          <h4 className={`text-xl`}>
            <b>2020</b>
          </h4>
          <p>
            <small>Beginning of studies at</small>
            <br />
            <b>HTWG Konstanz</b>
            <br />
            University of Applied Sciences
            <br />
            <i
              data-tooltip-id="CS"
              data-tooltip-place="bottom"
              data-tooltip-content="Practiced Computer Science"
            >
              Angewandte Informatik
              <Tooltip id="CS" />
            </i>
          </p>
        </div>
        <TimelineCenter
          left={'bottom-4'}
          right={'top-16'}
          rounded={'rounded-b-full'}
        />
        <div
          className={`px-4 mt-8 rounded-lg border-l h-26 justify-self-start text-start`}
        >
          <h4 className={`text-xl`}>
            <b>Skillworks AG</b>
          </h4>
          <p>
            <small>Sept. 2022</small>
            <br />
            Konstanz, Germany
            <br />
            <i
              data-tooltip-id="skillworks-working"
              data-tooltip-content={
                'Fullstack/DevOps/Angular-Library-Management'
              }
              data-tooltip-place="bottom-start"
            >
              Working Student
              <Tooltip id="skillworks-working" />
            </i>
          </p>
        </div>

        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mt-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-8'} extra={'mt-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-8'} extra={'my-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
        <div></div>

        <div className={`px-4 rounded-lg border-r justify-self-end text-end`}>
          <h4 className={`text-xl`}>
            <b>2019</b>
          </h4>
          <p>
            <i>Abitur</i>
            <br />
            Gymnasium - Markdorf, Germany
          </p>
        </div>
        <TimelineCenter left="bottom-1/4" right="top-1/4" height={'h-24'} />
        <div
          className={`px-4 rounded-lg border-l h-12 justify-self-start text-start`}
        >
          <h4 className={`text-sm`}>
            <b>Lidl Vertriebs - GmbH & Co.KG</b>
          </h4>
          <p>
            <small>Cashier</small>
          </p>
        </div>

        <div></div>
        <TimelineCenter left={''} right={''} height={'h-8'} extra={'mt-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mt-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'my-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
        <div></div>
      </div>

      <div className={'flex flex-wrap gap-8 pt-16 lg:m-4 justify-evenly'}>
        <div
          className={`rounded-lg border h-fit text-start lg:p-8 flex items-center justify-evenly flex-wrap`}
        >
          <span className={'p-4'}>
            <h3 className={`text-2xl text-primary`} id="filmfinder">
              Filmfinder
            </h3>
            <span className={'block h-1 border-t w-28'}></span>
            <p>
              <i>Trailer Swipe App</i>
              <br />
              Group Project for App Development
              <br />
              <small>HTWG Konstanz</small>
              <br />
              <small>
                <a
                  href="https://github.com/filmfinder/filmfinder"
                  className={'text-secondary'}
                >
                  GitHub
                  <FontAwesomeIcon
                    className={'px-1'}
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
                <a
                  href="/assets/filmfinder.apk"
                  className={'text-secondary ps-4'}
                  download="filmfinder.apk"
                >
                  Download APK
                  <FontAwesomeIcon className={'px-1'} icon={faAndroid} />
                </a>
              </small>
            </p>
          </span>
          <img
            src="/assets/images/filmfinder_logo_high_res.png"
            width={'150'}
            alt="filmfinder"
          ></img>
        </div>

        <div
          className={`rounded-lg border h-fit text-start lg:p-8 flex items-center justify-evenly flex-wrap`}
        >
          <span className={'p-4'}>
            <h3 className={`text-2xl text-primary`} id="hexxagon">
              Hexxagon
            </h3>
            <span className={'block h-1 border-t w-28'}></span>
            <p>
              <i>Game</i> Group Project for
              <br />
              Software Engineering/Web Development
              <br />
              <small>HTWG Konstanz</small>
              <br />
              <small>
                <a
                  href="https://github.com/HexxagonHTWG/Hexxagon"
                  className={'text-secondary'}
                >
                  GitHub
                  <FontAwesomeIcon
                    className={'px-1'}
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
                <a
                  href="https://hexxagonhtwg.github.io/Hexxagon/"
                  className={'text-secondary ps-4'}
                >
                  Gatling Reports
                  <FontAwesomeIcon
                    className={'px-1'}
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
              </small>
            </p>
          </span>
          <img
            src="/assets/images/hexxagon_logo.png"
            width={'100'}
            style={{ marginLeft: '25px', padding: '25px 0' }}
            alt="hexxagon"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Projects;
