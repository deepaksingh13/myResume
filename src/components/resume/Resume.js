import React from 'react'
import ResumeInside from './ResumeInside'

const Resume = () => {
    const experience = [
        {
            id: 1,
            fromDate : '4th Feb 2019',
            toDate : 'Present',
            mainHeading : 'Salesforce Developer',
            secondaryHead : 'Cloud-ICON', 
            innerConnent : 'Experience on Customizing Salesforce App utilizing Apex, Visualforce, Trigger, Lightning Components. Additionally have hands on involvement with Sales Cloud Configuration, using Workflow, Approval Process, Process Builder.'
        },
        {
            id: 2,
            fromDate : '13th Nov 2017',
            toDate : '24th Jan 2019',
            mainHeading : 'Web Developer',
            secondaryHead : 'Ting LLP', 
            innerConnent : 'Design and Develop 7+ responsive websites using HTML, CSS, Javascript, Jquery. Websites include Real Estate, E-Commerce, Educational and many more'
        }
    ];
    return (
        <div className="resume">
            <h3>Resume</h3>
            <div className="experience">
                <h4><i class="fa fa-briefcase"></i> Experience</h4>

                {
                    experience.map(exp =>(
                        <ResumeInside key={exp.id} fromDate={exp.fromDate}
                         toDate={exp.toDate}
                         mainHeading={exp.mainHeading}
                         secondaryHead={exp.secondaryHead}
                         innerConnent={exp.innerConnent}/>
                    ))
                }
            </div>

            <div className="skills">
                <h4>Programming Skills</h4>
                <p>Apex, Visualforce, SOQL, Lightning Component, React JS,Node JS, HTML, CSS, Javascript, Jquery.</p>
            </div>
        </div>
    )
}

export default Resume;