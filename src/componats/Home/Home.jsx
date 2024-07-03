import { FaBirthdayCake, FaBookReader, FaFacebook, FaGithub, FaNetworkWired, FaUniversity, FaVoicemail } from 'react-icons/fa';
import pdfPage from '../../assets/Landing Page Design.pdf';
import image2 from '../../assets/image2.jpeg';
import './home.css'
import { MdBloodtype, MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Home = () => {

    // contact
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_anis000',
            'template_qcmwbx5',
            form,
            'LCFqVR4SENXGs7gsX'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            setForm({ name: '', email: '', message: '' });
        }).catch((err) => {
            console.log('FAILED...', err);
            alert('There was an error sending your message. Please try again later.');
        });
    };


    // another 
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
            name: "Battle For Supermacy (Blood Buddies)",
            description: "If you have a blood donation, you can visit the blood buddies website. You can also create blood requests. You can also donate blood if you want.",
            coreFeatures: ["You can donate blood", "Blood can be taken if needed", "Get our support"],
            technologies: ["React", "Node.js", "MongoDB", "Tailwind", "HTML", "Firebase"],
            liveLink: "https://blood-buddies-d80de.web.app/",
            clientCodeLink: "https://github.com/anissarkeraraf/battle-for-supermacy-client-site",
            serverCodeLink: "https://github.com/anissarkeraraf/battle-for-supermacy-server-site",
        },
        {
            name: "7Bite",
            description: "Welcome to 7bite. We provide you with good quality treatment. Here you will find treatment for various diseases",
            coreFeatures: ["Get a good doctor", "We provide servide", "Get our support"],
            technologies: ["React", "Node.js", "MongoDB", "Tailwind", "HTML", "Firebase"],
            liveLink: "assignment-eleven-72a4e.web.app/",
            clientCodeLink: "https://github.com/anissarkeraraf/7bite-client-site",
            serverCodeLink: "https://github.com/anissarkeraraf/7bite-server-site",
        },
        {
            name: "Goromer Adventure",
            description: "Come and visit your favorite place during summer with us. And you can visit gorom kaler adventure web page to spend time with your family",
            coreFeatures: ["Family tour", "You can give tours outside the country", "Get our support"],
            technologies: ["React", "Node.js", "MongoDB", "Tailwind", "HTML", "Firebase"],
            liveLink: "gorom-gorom-adventure.web.app/",
            clientCodeLink: "https://github.com/anissarkeraraf/goremer-adventure",
            serverCodeLink: "https://github.com/anissarkeraraf/goromer-adventure-server-site",
        },
    ];

    const education = {
        degree: "B.Sc in Computer Science and Engineering",
        institution: "United College of Aviation Science and Management",
    };

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
                        <div key={index} className='project-card bg-gray-800 p-6 rounded-lg glass'>
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
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
                                <div>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='btn text-white border-none'>Visit My Project</a>
                                </div>
                                <div>
                                    <a href={project.clientCodeLink} target="_blank" rel="noopener noreferrer" className='btn text-white border-none'>Project Client Code</a>
                                </div>
                                <div>
                                    <a href={project.serverCodeLink} target="_blank" rel="noopener noreferrer" className='btn text-white border-none'>Project Server Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education section */}
            <div id="education" className='education-section text-white pt-32 md:pt-52 px-5 md:px-10 lg:px-24'>
                <h2 className="text-3xl text-[#D3D3D3] font-bold font-mono">My Education</h2>
                <div className='mt-4'>
                    <p className='text-xl font-thin mb-2'>{education.degree}</p>
                    <p className='text-xl font-thin'>{education.institution}</p>
                </div>
            </div>

            {/* About section */}
            <div id="about" className='about-section text-white pt-32 md:pt-52 px-5 md:px-10 lg:px-24'>
                <div>
                    <h2 className=" mb-10 text-3xl text-[#D3D3D3] font-bold font-mono">About Me</h2>
                </div>
                <div className='md:flex justify-around'>

                    <div>
                        <img className='w-[250px] h-[250px] rounded-full' src={image2} alt="" />
                    </div>
                    <div className='mt-10'>
                        <p className='flex items-center mb-4'><FaBirthdayCake className='text-xl mr-3 text-yellow-400'></FaBirthdayCake> Birthday <span className='mr-10 ml-10'>:</span> <span className='text-gray-400'>21 March 2004</span></p>
                        <p className='flex items-center mb-4'><FaBookReader className='text-xl mr-3 text-yellow-400'></FaBookReader> Study <span className='mr-10 ml-[60px]'>: </span><span className='text-gray-400'>B.Sc in Computer Science and Engineering</span></p>
                        <p className='flex items-center mb-4'><FaUniversity className='text-xl mr-3 text-yellow-400'></FaUniversity> University <span className='mr-10 ml-8'>: </span><span className='text-gray-400'>United College Of Aviation Science and Management</span></p>
                        <p className='flex items-center mb-4'><MdBloodtype className='text-xl mr-3 text-yellow-400'></MdBloodtype> Blood <span className='mr-10 ml-[60px]'>: </span><span className='text-gray-400'>O+(Positive)</span></p>
                        <p className='flex items-center mb-4'><FaNetworkWired className='text-xl mr-3 text-yellow-400'></FaNetworkWired> Interests <span className='mr-10 ml-10'>: </span><span className='text-gray-400'>Coding, Learning & Exploring</span></p>
                        <p className='flex items-center mb-4'><FaLocationDot className='text-xl mr-3 text-yellow-400'></FaLocationDot> Location <span className='mr-10 ml-10'>: </span><span className='text-gray-400'>Dhaka, Bangladesh</span></p>
                        <div className='mt-10'>
                            <h2 className='text-4xl'>Hi, I'm Anis & I'm <sub><small><span className='text-yellow-400'>Full Stack Developer</span></small></sub></h2>
                            <p className='text-gray-400 md:w-[550px] mt-5'>Hi! I am Anis Sarkar. I am a Full Stack Developer. I am highly dedicated to my work and have gained one year of valuable experience.</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* Contact Section */}
            <div id="contact" className='contact-section text-white pt-32 md:pt-52 px-5 md:px-10 lg:px-24'>
                <h2 className="text-3xl text-[#D3D3D3] font-bold font-mono">Contact</h2>
                <div className='mt-4 flex items-center'>
                   <p className='flex items-center mr-10'><MdEmail className='mr-3 text-xl'></MdEmail> <span>anisSarkeraraf@gmail.com</span></p>
                   <a href="https://www.facebook.com/profile.php?id=100055064865127&mibextid=ZbWKwL"><p><FaFacebook className='mr-10 text-xl'></FaFacebook></p></a>
                   <a href="https://github.com/anissarkeraraf"><p><FaGithub className='text-xl'></FaGithub></p></a>
                </div>
                <form onSubmit={handleSubmit} className='mt-4'>
                    <div className='mb-4'>
                        <label className='block text-xl font-thin mb-2'>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className='w-full p-2 rounded text-black'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-xl font-thin mb-2'>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className='w-full p-2 rounded text-black'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-xl font-thin mb-2'>Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className='w-full p-2 rounded text-black'
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className='btn bg-blue-500 text-white font-bold mt-4 border-none py-2 px-4 rounded'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
