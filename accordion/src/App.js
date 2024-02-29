/** @format */

import './App.css';
import Accordion from './Accordion';
const jobs = [
	{
		title: 'Software Engineer',
		content:
			'A software engineer designs, develops, and maintains software applications, systems, and platforms, employing various programming languages and methodologies to solve complex problems and meet user needs efficiently and effectively. They collaborate with teams to analyze requirements, architect solutions, write code, conduct testing, and deploy robust software solutions that drive innovation and streamline processes.',
	},
	{
		title: 'Software Developer',
		content:
			'A software developer designs and creates computer programs, applications, and systems by writing and testing code to meet specific user needs and solve problems efficiently. They also collaborate with stakeholders to analyze requirements, implement solutions, and maintain existing software.',
	},
	{
		title: 'Frontend Developer',
		content:
			'A Frontend Engineer designs and implements user interfaces using web technologies like HTML, CSS, and JavaScript, ensuring a seamless and intuitive user experience on websites or applications. They collaborate with designers and backend developers to integrate frontend components with backend functionalities.',
	},
	{
		title: 'Staff Engineer',
		content:
			'A staff engineer typically provides technical leadership, guidance, and expertise within a company, overseeing complex projects and mentoring junior engineers to ensure successful execution and delivery of engineering solutions. They often collaborate with cross-functional teams, contribute to strategic decision-making, and drive innovation in product development.',
	},
];
function App() {
	return <Accordion jobs={jobs} />;
}

export default App;
