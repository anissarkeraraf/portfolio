import React from 'react';
import pdfPage from '../../assets/Landing Page Design.pdf';

const Home = () => {
    const skills = [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "React", percentage: 80 },
        { name: "MongoDB", percentage: 80 },
        { name: "Tailwind", percentage: 80 },
        { name: "Firebase", percentage: 80 },
        { name: "Node.js", percentage: 75 },
    ];

    const projects = [
        {
            name: "Project One",
            description: "This is a detailed description of Project One.",
            coreFeatures: ["Feature 1", "Feature 2", "Feature 3"],
            technologies: ["React", "Node.js", "MongoDB"],
            liveLink: "https://live-link-project-one.com",
            clientCodeLink: "https://github.com/yourusername/project-one-client",
            serverCodeLink: "https://github.com/yourusername/project-one-server",
        },
        {
            name: "Project Two",
            description: "This is a detailed description of Project Two.",
            coreFeatures: ["Feature 1", "Feature 2", "Feature 3"],
            technologies: ["React", "Firebase", "Tailwind CSS"],
            liveLink: "https://live-link-project-two.com",
            clientCodeLink: "https://github.com/yourusername/project-two-client",
            serverCodeLink: "https://github.com/yourusername/project-two-server",
        },
        {
            name: "Project Three",
            description: "This is a detailed description of Project Three.",
            coreFeatures: ["Feature 1", "Feature 2", "Feature 3"],
            technologies: ["React", "Node.js", "MongoDB"],
            liveLink: "https://live-link-project-three.com",
            clientCodeLink: "https://github.com/yourusername/project-three-client",
            serverCodeLink: "https://github.com/yourusername/project-three-server",
        },
    ];

    return (
        <div>
            <div id="home" className='flex justify-around flex-col overflow-hidden lg:flex-row items-center lg:items-start pt-40 pb-20'>
                <div className='image-section flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0'>
                    <img className='rounded-full w-[250px] h-[250px]' src='https://i.ibb.co/HrL2KwG/Whats-App-Image-2024-07-02-at-11-55-Photoroom-1.jpg' alt="Anis Sarkar" />
                </div>
                <div className='text-section text-white lg:mr-16 order-2 lg:order-1 px-5 md:px-10 lg:px-0'>
                    <h2 className="text-4xl text-[#D3D3D3] font-mono">
                        ANIS SARKAR
                        <sub>
                            <small className='pl-2'>
                                I'm <span className='text-yellow-400'>Developer</span>
                            </small>
                        </sub>
                    </h2>
                    <p className='lg:w-[550px] pb-4 pt-4 font-thin'>
                        I am a CSE student of United College of Aviation Science and Management. Currently, I am a frontend developer.
                    </p>
                    <p className='text-xl lg:w-[550px] font-thin'>
                        I am a student who completed the web development course from Programming Hero. Currently, I am a fresher but have done some projects by myself. My dream and wish are to become a very good web developer and work in a good company.
                    </p>
                    <a
                        href={pdfPage}
                        download
                        className='btn bg-blue-500 text-white font-bold mt-4 border-none py-2 px-4 rounded'
                    >
                        Download File
                    </a>
                </div>
            </div>
            <div id="skills" className='skills-section text-white pt-32 md:pt-52 px-5 md:px-10 lg:px-24'>
                <h2 className="text-3xl text-[#D3D3D3] font-bold font-mono">My Skills</h2>
                <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {skills.map((skill, index) => (
                        <div key={index} className='mb-4'>
                            <div className='flex justify-between mb-1'>
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className='w-full bg-gray-300 rounded-full h-4'>
                                <div className='bg-gray-600 h-4 rounded-full' style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="projects" className='projects-section text-white pt-32 md:pt-52 px-5 md:px-10 lg:px-24'>
                <h2 className="text-3xl text-[#D3D3D3] font-bold font-mono">My Projects</h2>
                <div className='mt-4 grid grid-cols-1 gap-10'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-card bg-gray-800 p-6 rounded-lg'>
                            <h3 className="text-2xl text-[#D3D3D3] font-bold mb-2">{project.name}</h3>
                            <p className='text-xl font-thin mb-2'>{project.description}</p>
                            <h4 className='font-bold text-[#D3D3D3]'>Core Features:</h4>
                            <ul className='list-disc list-inside mb-2'>
                                {project.coreFeatures.map((feature, idx) => (
                                    <li key={idx} className='font-thin'>{feature}</li>
                                ))}
                            </ul>
                            <h4 className='font-bold text-[#D3D3D3]'>Used Technologies:</h4>
                            <p className='font-thin mb-2'>{project.technologies.join(", ")}</p>
                            <div className='flex justify-between'>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='text-blue-400'>Live Link</a>
                                <a href={project.clientCodeLink} target="_blank" rel="noopener noreferrer" className='text-blue-400'>Client Code</a>
                                <a href={project.serverCodeLink} target="_blank" rel="noopener noreferrer" className='text-blue-400'>Server Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
