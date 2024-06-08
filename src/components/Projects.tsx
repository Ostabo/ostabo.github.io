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
      <div className={`grid grid-cols-2 gap-4 m-4`}></div>
    </section>
  );
};

export default Projects;
