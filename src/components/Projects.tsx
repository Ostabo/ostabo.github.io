import React, { ReactNode } from 'react';

import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { PlacesType, Tooltip } from 'react-tooltip';

import LazyShow from './LazyShow';
import config from '../config/index.json';
import useResponsiveSize from '../hooks/useResponsiveSize';

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
      className={`bg-primary-600 ${rounded} w-3 h-full absolute left-1/2 -translate-x-1/2`}
    ></div>
  </div>
);

interface Props {
  children: ReactNode;
}

const SlideInTimeLinePiece = ({ children }: Props) => (
  <LazyShow threshold={0.2}>
    <div className={`relative grid grid-cols-3`}>{children}</div>
  </LazyShow>
);

export const Projects = () => {
  const { width } = useResponsiveSize();
  const { projects } = config;
  return (
    <section
      className={`bg-background-50 text-background-900 p-8 w-full flex flex-col justify-content-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      id="projects"
    >
      <LazyShow>
        <>
          <h2 className={`text-3xl font-bold text-gray-900 p-8 text-center`}>
            Projects & Experience
          </h2>
          <h3
            className={`text-lg text-primary-600 text-center border-2 rounded-2xl p-4 w-fit`}
          >
            <q>
              Once a new technology rolls over you, if you&apos;re not part of
              the steamroller, you&apos;re part of the road.
            </q>
            <br />
            <cite> - Stewart Brand</cite>
          </h3>
        </>
      </LazyShow>
      <div className={`relative grid grid-cols-1 py-16 border-b timeline`}>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={'top-4'} height={'h-8'} />
          <div
            className={`px-4 rounded-lg h-6 mt-2 border-l justify-self-start text-start`}
          >
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="cloud-porsche"
              to="cloud-porsche"
              className="font-medium text-gray-600 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Cloud Porsche
            </Link>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mt-2'} />
          <div></div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter
            left={''}
            right={'top-4'}
            height={'h-8'}
            extra={'my-2'}
          />
          <div
            className={`px-4 rounded-lg h-6 mt-2 border-l justify-self-start text-start`}
          >
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="image-converter"
              to="image-converter"
              className="font-medium text-gray-600 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Image Converter
            </Link>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div
            className={`px-4 rounded-r-lg justify-self-end text-end border-r h-20 relative`}
          >
            {width > 658 ? (
              <img
                src={'/assets/images/htwg_logo.png'}
                alt="htwg"
                width="60"
                className="absolute -right-16 top-5"
              />
            ) : null}
            <h4 className={`text-xl`}>
              <b>2024</b>
            </h4>
            <span>
              Bachelor of Science in
              <br />
              <i
                data-tooltip-id="CS"
                data-tooltip-place="bottom"
                data-tooltip-content="Practiced Computer Science"
              >
                Angewandte Informatik
                <Tooltip id="CS" className={'z-10'} />
              </i>
            </span>
          </div>
          <TimelineCenter left={'top-4'} />
          <div
            className={`px-4 rounded-l-lg border-l justify-self-start text-start relative`}
          >
            {width > 658 ? (
              <img
                src={'/assets/images/skillworks_logo.png'}
                alt="skillworks"
                width="80"
                className="absolute -translate-x-full -left-2"
              />
            ) : null}
            <h4 className={`text-xl`}>
              <b>Skillworks AG</b>
            </h4>
            <span>
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
                <Tooltip id="skillworks-bachelor" className={'z-10'} />
              </i>
            </span>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-8'} extra={'my-2'} />
          <div></div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter
            left={''}
            right={'top-2'}
            height={'h-12'}
            extra={'mb-2'}
          />
          <div
            className={`px-4 rounded-lg h-6 border-l justify-self-start text-start`}
          >
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="pal-planner"
              to="pal-planner"
              className="font-medium text-gray-600 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Pal Planner
            </Link>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
          <div></div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={'top-6'} height={'h-20'} />
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
              className="font-medium text-gray-600 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Filmfinder
            </Link>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter
            left={''}
            right={''}
            height={'h-4'}
            extra={'mt-2'}
            rounded={'rounded-t-full'}
          />
          <div></div>

          <div></div>
          <TimelineCenter
            left={''}
            right={'top-2'}
            height={'h-12'}
            extra={'mb-2'}
            rounded={'rounded-b-full'}
          />
          <div
            className={`px-4 rounded-lg h-6 border-l justify-self-start text-start`}
          >
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="necessities"
              to="necessities"
              className="font-medium text-gray-500 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Necessities
            </Link>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
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
              className="font-medium text-gray-600 hover:text-primary-50 text-nowrap underline underline-offset-2"
            >
              Hexxagon
            </Link>
          </div>

          <div
            className={`px-4 rounded-r-lg justify-self-end text-end border-r relative`}
          >
            {width > 658 ? (
              <img
                src={'/assets/images/htwg_logo.png'}
                alt="htwg"
                width="60"
                className="absolute -right-16 top-12"
              />
            ) : null}
            <h4 className={`text-xl`}>
              <b>2020</b>
            </h4>
            <span>
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
                <Tooltip id="CS" className={'z-10'} />
              </i>
            </span>
          </div>
          <TimelineCenter
            left={'bottom-4'}
            right={'top-16'}
            rounded={'rounded-b-full'}
          />
          <div
            className={`px-4 mt-8 rounded-lg border-l h-26 justify-self-start text-start relative`}
          >
            {width > 658 ? (
              <img
                src={'/assets/images/skillworks_logo.png'}
                alt="skillworks"
                width="80"
                className="absolute -translate-x-full -left-2 top-10"
              />
            ) : null}
            <h4 className={`text-xl`}>
              <b>Skillworks AG</b>
            </h4>
            <span>
              <small>Sept. 2022</small>
              <br />
              Konstanz, Germany
              <br />
              <i
                data-tooltip-id="skillworks-working"
                data-tooltip-content={
                  'Fullstack/DevOps/Angular-Library-Management'
                }
                data-tooltip-place="bottom-end"
              >
                Working Student
                <Tooltip id="skillworks-working" className={'z-10'} />
              </i>
            </span>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mt-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-8'} extra={'mt-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-8'} extra={'my-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
          <div></div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div
            className={`px-4 rounded-lg border-r justify-self-end text-end relative`}
          >
            {width > 658 ? (
              <img
                src={'/assets/images/bzm_logo.png'}
                alt="bzm"
                width="60"
                className="absolute -translate-x-1/4 -right-20 top-8 -scale-75"
              />
            ) : null}
            <h4 className={`text-xl`}>
              <b>2019</b>
            </h4>
            <span>
              <i>Abitur</i>
              <br />
              Markdorf, Germany <br />
              Gymnasium
            </span>
          </div>
          <TimelineCenter left="bottom-1/4" right="top-1/4" height={'h-32'} />
          <div
            className={`px-4 rounded-lg border-l h-12 justify-self-start text-start`}
          >
            <h4 className={`text-sm`}>
              <b>Lidl Vertriebs - GmbH & Co.KG</b>
            </h4>
            <span>
              <small>Cashier</small>
            </span>
          </div>
        </SlideInTimeLinePiece>

        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-8'} extra={'mt-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mt-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'my-2'} />
          <div></div>
        </SlideInTimeLinePiece>
        <SlideInTimeLinePiece>
          <div></div>
          <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
          <div></div>
        </SlideInTimeLinePiece>
      </div>
      <div className={'grid lg:grid-cols-2 gap-8 pt-16 lg:m-4 justify-evenly'}>
        {projects?.map((project) => (
          <LazyShow key={project.id} threshold={0.2}>
            <div
              className={`rounded-lg border text-start text-balance h-full p-8 grid lg:grid-flow-col-dense items-center justify-between justify-items-center relative`}
            >
              {project.tooltip ? (
                <span
                  className={
                    'absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 border rounded-full p-2 bg-background-50 aspect-square h-12 flex items-center justify-center text-lg'
                  }
                  data-tooltip-id={project.tooltip.id}
                  data-tooltip-content={project.tooltip.content}
                  data-tooltip-place={project.tooltip.place as PlacesType}
                >
                  {project.tooltip.icon}
                  <Tooltip id={project.tooltip.id} className={'z-10'} />
                </span>
              ) : (
                <></>
              )}
              <span
                className={
                  'p-4 self-start flex flex-col justify-stretch h-full whitespace-pre-line'
                }
              >
                <h3
                  className={`text-2xl text-primary-600 underline underline-offset-8 pb-2 decoration-gray-300`}
                  id={project.id}
                >
                  {project.title}
                </h3>
                <span>
                  <i>{project.type}</i>
                  <br />
                  {project.description}
                  <br />
                  <small>{project.small}</small>
                  <br />
                  <small>
                    {project.actions?.map(
                      (action: {
                        href: string;
                        text: string;
                        className?: string;
                        download?: string;
                      }) => (
                        <a
                          key={action.href}
                          href={action.href}
                          className={`text-primary-600 ${action.className}`}
                          download={action.download}
                        >
                          {action.text}
                          <FontAwesomeIcon
                            className={'px-1'}
                            icon={
                              action.download
                                ? faAndroid
                                : faArrowUpRightFromSquare
                            }
                          />
                        </a>
                      ),
                    )}
                  </small>
                </span>
              </span>
              <img
                src={project.img}
                width={project.imgWidth}
                style={project.style}
                alt={project.alt}
              ></img>
            </div>
          </LazyShow>
        ))}
      </div>
    </section>
  );
};
