function Expertise() {
    return (
        <div>
            <p className="expertise text-center text-white text-4xl font-bold">
                Expertise and Focus area
            </p>
            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-white rounded-lg p-10">
                    Front-end Development
                    <p className="description text-white text-sm">
                        Our Front-end development focuses on creating the visual and interactive aspects of a website or web application with the use of HTML for structure, CSS for aesthetic design, and JavaScript for the functionality. We also use frameworks like ReactJS and Tailwind CSS to furthermore improve user experience.
                    </p>
                    <div className="icon-row mt-6">
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">HTML</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">CSS</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">Tailwind</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">Javascript</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">React.js</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-white rounded-lg p-10">
                    Back-end Development
                    <p className="description text-white text-sm">
                        Our Back-end development focuses on handling the transaction between the system and the user ensuring a smooth data processing, authentication, and business logic. Creating a robust server-side applications with a focus on security, scalability, and efficiency
                    </p>
                    <div className="icon-row mt-6">
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">Python</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">PHP</span>
                        </div>
                        <div className="divider-line-horizontal"></div>
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">Java</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-white rounded-lg p-10">
                    Database Management
                    <p className="description text-white text-sm">
                        Our Database Management involves designing, maintaining, and optimizing data storage systems to ensure seamless data access and security, It includes working with relational database like MySQL. Our team ensures data integrity, performance optimization, and efficient handling of user.                    </p>
                    <div className="icon-row mt-6">
                        <div className="flex flex-col items-center">
                            <div className="icon-circle w-20 h-20 flex items-center justify-center">
                                <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Icon" />
                            </div>
                            <span className="mt-2 text-base font-semibold">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Expertise