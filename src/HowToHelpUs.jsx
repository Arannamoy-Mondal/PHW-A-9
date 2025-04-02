import React from 'react';
import { NavLink } from 'react-router-dom';

const HowToHelpUs = () => {
    return (
        <div className='flex flex-wrap justify-center lg:m-[100px] gap-[10px]'>

            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Donate Clothes</h2>
                    <p> Give gently used or new winter clothes, such as jackets, sweaters, gloves, and scarves.</p>
                    <div className="card-actions justify-end">
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white  text-2xl font-black">
                                    Please Click and Select Any Campaigns Here
                                </div>
                            </div>
                            <button className="btn">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Financial Support
                    </h2>
                    <p> Contribute funds to help with logistics, storage, and distribution of donations.</p>
                    <div className="card-actions justify-end">
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white  text-2xl font-black">
                                    Please Click and Select Any Campaigns From Here
                                </div>
                            </div>
                            <button className="btn">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Volunteer Your Time
                    </h2>
                    <p> Help sort and distribute donated clothes.Assist with website maintenance, content creation, or graphic design if you have technical skills.

                    </p>
                    <div className="card-actions justify-end">
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white  text-2xl font-black">
                                    Please Click and Select Any Campaigns From Here
                                </div>
                            </div>
                            <NavLink className="btn" to="/signup">Join Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Technical Contributions (for Developers)
                    </h2>
                    <p> Improve the website by fixing bugs, enhancing features, or adding security measures.Contribute to open-source development if the project is on GitHub.Help with deployment, database management, or Firebase integration.

                    </p>
                    <div className="card-actions justify-end">
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white  text-2xl font-black">
                                    Please Click and Select Any Campaigns From Here
                                </div>
                            </div>
                            <NavLink className="btn" to="/signup">Join Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Partner with Organizations
                    </h2>
                    <p>Connect the site with NGOs, businesses, or influencers who can provide additional support.Collaborate with local shelters and relief organizations.
                    </p>
                    <div className="card-actions justify-end">
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white  text-2xl font-black">
                                    Please Click and Select Any Campaigns From Here
                                </div>
                            </div>
                            <NavLink className="btn" to="/signup">Join Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToHelpUs;