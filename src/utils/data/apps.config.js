import AboutMe from "../../components/applications/about/aboutMe.about";
import Education from "../../components/applications/about/education.about";
import Experience from "../../components/applications/about/experience.about";
import Projects from "../../components/applications/about/projects.about";
import Resume from "../../components/applications/about/resume.about";
import Skills from "../../components/applications/about/skills.about";
import aboutMe from "../../assets/images/apps/aboutMe.png";
import agreement from "../../assets/images/apps/agreement.png";
import experience from "../../assets/images/apps/working-at-the-imac.png";
import projects from "../../assets/images/apps/laptop-coding.png";
import education from "../../assets/images/apps/student-male.png";

const appConfig = [
	{
		id: "aboutMe",
		name: "About Me",
		order: 1,
		icon: aboutMe,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "About Me",
				component: AboutMe,
			},
			{
				name: "Skills",
				component: Skills,
			},
		],
	},
	{
		id: "resume",
		name: "Resume",
		order: 2,
		icon: agreement,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Resume",
				component: Resume,
			},
		],
	},
	{
		id: "workExperience",
		name: "Work Experience",
		order: 3,
		icon: experience,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Experience",
				component: Experience,
			},
		],
	},
	{
		id: "projects",
		name: "Projects",
		order: 4,
		icon: projects,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Projects",
				component: Projects,
			},
		],
	},
	{
		id: "education",
		name: "Education",
		order: 5,
		icon: education,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Education",
				component: Education,
			},
		],
	},
];

export default appConfig;
