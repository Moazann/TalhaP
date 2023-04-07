import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import { DataContext } from "../../dataUseContext";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const dataContext = React.useContext(DataContext);
  const workList = dataContext[6].data.data;

  const [item, setItem] = useState({ name: "All Projects" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All Projects") {
      setProjects(workList);
    } else {
      const newProjects = workList.filter((workList) => {
        return workList.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  let navigate = useNavigate();

  const routeChange = (str) => () => {
    navigate("/workpage/" + str);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""}
                            work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <>
              <div className="work__card" key={item.id}>
                <img src={item.image} alt="" className="work__img" />
                <h3 className="work__title">{item.title}</h3>

                <button
                  onClick={routeChange(item.doc_id)}
                  className="work__button"
                >
                  Demo
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
