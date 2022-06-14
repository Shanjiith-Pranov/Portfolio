import projectData from "./projectData";

const Projects = () => {
  return (
    <>
      {projectData.map((exp, index) => {
        return <ProjectsCard key={index} exp={exp} />;
      })}
    </>
  );
};

export default Projects;

const ProjectsCard = ({ exp }: { exp: { [key: string]: string } }) => {
  return (
    <div
      className="flex-col sm:flex-row flex justify-between sm:items-center border border-neutral-600 p-2 px-6 rounded-md mb-3 w-11/12 sm:w-5/12"
      
    >
      <div className="flex flex-col mt-3" style={{ lineHeight: "0.5rem" }}>
        <span
          className="font-medium text-gray-300 "
          style={{ fontSize: "0.8rem" }}
        >
          {exp.title}
        </span>
        <span className="text-lg">{exp.company}</span>
      </div>
      <div className="text-gray-300 sm:mt-1 mr-4" style={{ fontSize: "0.82rem" }}>
        {exp.duration}
      </div>
    </div>
  );
};
