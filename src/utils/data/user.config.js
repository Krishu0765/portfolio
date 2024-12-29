import ResumePDF from "./Krishna-Resume.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import PayPal from ".././../assets/images/data/PayPal.jpeg";

const user = {
	firstName: "Krishna",
	lastName: "Ramrakhyani",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "ramrakhyanikrishna@gmail.com",
	linkedIn: "in/krishna-ramrakhyani-63397b312/",
	gitHub: "Krishu0765",
	twitter: "krishnaramrakhyani",
	aboutMe: {
		intro: " I'm a Full Stack Software Development Engineer.",
		description:
			"A logical and empathic individual with a strong foundation in computer engineering. Both Backend and Frontend Developer with core knowledge of object-oriented programming.",
		outro: "",
	},
	experiences: [
		{
			organization: "OneStopEngineering",
			organizationPicture: PayPal,
			isCurrent: false,
			startDate: "June 2024",
			endDate: "August 2024",
			positions: [
				{
					positionName: "Software Engineer Intern",
					startDate: "June 2024",
					endDate: " August 2024",
					isPresent: false,
					description:
						"Contributed to the development of a CRM software project built on Laravel, designed to manage leads, convert them into customers, and track accounts, deals, and contacts. Implemented key features such as lead conversion, contact and account management, and deal tracking using polymorphic relationships for enhanced flexibility. Integrated Yajra DataTables plugin for efficient data handling and improved user experience. Collaborated closely with cross-functional teams to ensure seamless automation testing using Cypress, Selenium, and BDD methodologies, improving code quality and reducing bugs.Actively participated in sprints and utilized Kanban boards for efficient task management and workflow optimization",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"Thadomal Shahani Engineering College",
			degree: "Bachelor's Degree in Computer Engineering",
			year: "2023",
			id: 1,
		},
		{
			instituteName: "Vivekanand Education Society's Polytechnic",
			degree: "Diploma in Computer Engineering",
			year: "2020",
			id: 2,
		},
	],
	projects: [
		{
			projectName: "Messenger in Java",
			description:
				"A LAN based multithreaded chatting application built using Java Socket Programming that works on the Client-Server Architecture. Also it uses DES encryption-decryption algorithm to transfer messages in more secured way.",
			madeWith: ["Java", "DES", "Multithreading", "Threadpool", "Networks", "XML Parser"],
			link: "https://gitlab.com/krishna-ramrakhyani/chatapplication",
		},
		{
			projectName: "Shopify Connect (Ecommerce REST)",
			description:
				"Provides rest APIs for user, product and transaction management for an e-commerce application. User can consume the rest endpoints for testing or development purposes.",
			madeWith: ["Laravel", "REST", "Backend", "MVC architecture"],
			link: "https://gitlab.com/krishna-ramrakhyani/ecommerce-rest",
		},
		{
			projectName: "Schedule Genius",
			description:
				"Automatically generates a schedule for various branches in a college using a semi-genetic algorithm.It can generate complete week schedule without clashing with other lectures, also it can generate schedules for 2 batches simultaneously.",
			madeWith: ["Java", "Genetic Algorithms", "NetBeans"],
			link: "https://gitlab.com/krishna-ramrakhyani/schedule-genius",
		},
		{
			projectName: "Quill Zone (Blog Management)",
			description:
				"A blogging website, that allows bloggers to write, draft and publish blogs. Readers can read and comment on blogs And it also has the feature of admin and super admin. Super admin has special privileges.",
			madeWith: [
				"Backend",
				"Laravel",
				"MVC",
				"Content Management",
				"CSS",
				"JavaScript",
			],
			link: "https://github.com/srinibasbiswal/IBS-Hackathon",
		},
		{
			projectName: "EduQuest (Testing)",
			description:
				"A robust web application built on Laravel, featuring comprehensive automation testing using Cypress, Cucumber, Selenium, and API testing. The project employs Behavior-Driven Development (BDD) to ensure high-quality, end-to-end testing, supporting seamless integration and continuous delivery.",
			madeWith: ["Automation Testing", "Cypress", "Cucumber", "BDD", "API testing"],
			link: "https://gitlab.com/krishna-ramrakhyani/edu-quest-testing",
		},
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"ReactJS",
				"JavaScript",
				"Node",
				"Python",
				"Java",
				"Kotlin",
				"HTML",
				"CSS",
				"MySQL",
				"C",
				"C++",
				"PHP",
				"JQuery"
			],
		},
		{
			name: "Tools/IDE Proficiency",
			values: ["VSCode","Yajra Datatables","Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman", "Android IDE", "Laravel Excel", "Jira(cloud)", "DOM PDF"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL"],
		},
	],
};

export default user;
