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
      className={`bg-background p-8 w-full flex flex-col items-center justify-content-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      id="projects"
    >
      <h2 className={`text-3xl font-bold text-gray-900 p-8`}>
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
      <div className={`grid grid-cols-3 m-4 pt-16`}>
        <div
          className={`px-4 rounded-br-lg justify-self-end text-end border-r h-1/2`}
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
        <TimelineCenter left={'top-0'} />
        <div className={`px-4 justify-self-start text-start`}>
          <h4 className={`text-xl`}>Project 3</h4>
          <p className={``}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>

        <div></div>
        <TimelineCenter left={''} right={''} height={'h-8'} extra={'my-2'} />
        <div></div>
        <div></div>
        <TimelineCenter left={''} right={''} height={'h-4'} extra={'mb-2'} />
        <div></div>

        <div
          className={`px-4 rounded-tr-lg justify-self-end text-end border-r`}
        >
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
        <TimelineCenter left={'bottom-0'} right={'top-8'} />
        <div className={`px-4 rounded-lg justify-self-start text-start`}>
          <h4 className={`text-xl`}>Filmfinder</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
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

        <div className={`px-4 rounded-lg justify-self-end text-end`}>
          <h4 className={`text-xl`}>
            <b>2019</b>
          </h4>
          <p className={``}>
            <i>Abitur</i>
            <br />
            Gymnasium - Markdorf, Germany
          </p>
        </div>
        <TimelineCenter left="bottom-1/4" height={'h-24'} />
        <div className={`px-4 rounded-lg justify-self-start text-start`}>
          <h4 className={`text-xl`}>
            <b>Lidl Vertriebs - GmbH & Co.KG</b>
          </h4>
          <p className={``}>Cashier</p>
        </div>

        <div></div>
        <TimelineCenter
          left={''}
          right={''}
          rounded={'rounded-full'}
          height={'h-8'}
          extra={'mt-2'}
        />
        <div></div>
        <div></div>
        <TimelineCenter
          left={''}
          right={''}
          rounded={'rounded-full'}
          height={'h-4'}
          extra={'mt-2'}
        />
        <div></div>
        <div></div>
        <TimelineCenter
          left={''}
          right={''}
          rounded={'rounded-full'}
          height={'h-4'}
          extra={'my-2'}
        />
        <div></div>
        <div></div>
        <TimelineCenter
          left={''}
          right={''}
          rounded={'rounded-full'}
          height={'h-4'}
          extra={'mb-2'}
        />
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
