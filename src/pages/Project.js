import { useParams } from 'react-router-dom';

import projects from './../helpers/projectList'
import BtnGitHub from '../components/btnGitHub/BtnGitHub';


const Project = () => {

    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img
                        src={project.imgBig}
                        alt={project.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    <div className="project-details__links">
                        {project.gitHub &&
                            <BtnGitHub gitHubLink={project.gitHub} />
                        }

                        {project.gitHubLink &&
                            <a href={project.gitHubLink} target="_blank" className="btn-outline">
                                Ссылка на сайт
                            </a>
                        }


                    </div>

                </div>
            </div>
        </main>
    );
}

export default Project;