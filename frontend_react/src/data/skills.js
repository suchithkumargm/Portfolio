import {
  SiSpringboot,
  SiApachekafka,
  SiAmazonaws,
  SiAmazondynamodb,
  SiOracle,
  SiGitlab,
  SiJunit5,
  SiJest,
  SiCucumber,
  SiK6,
  SiDocker,
  SiApachemaven,
  SiSnyk,
  SiPagerduty,
} from 'react-icons/si';

import java from '../assets/java.png';
import typescript from '../assets/typescript.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import api from '../assets/api.png';
import git from '../assets/git.png';

// Taken from Suchith_Kumar_FullStack.pdf — only what the resume actually claims.
// Entries use either `icon` (a local image) or `Icon` (a react-icons component).
const skills = [
  { name: 'Java', bgColor: '#e76f0022', icon: java },
  { name: 'Spring Boot', bgColor: '#6db33f22', Icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Apache Kafka', bgColor: '#23112022', Icon: SiApachekafka, color: '#231F20' },
  { name: 'AWS', bgColor: '#ff990022', Icon: SiAmazonaws, color: '#FF9900' },
  { name: 'DynamoDB', bgColor: '#4053d622', Icon: SiAmazondynamodb, color: '#4053D6' },
  { name: 'Oracle', bgColor: '#f8000022', Icon: SiOracle, color: '#F80000' },
  { name: 'TypeScript', bgColor: '#3178c622', icon: typescript },
  { name: 'JavaScript', bgColor: '#f7df1e22', icon: javascript },
  { name: 'React', bgColor: '#61dafb22', icon: react },
  { name: 'HTML5', bgColor: '#e34f2622', icon: html },
  { name: 'CSS3', bgColor: '#264de422', icon: css },
  { name: 'REST APIs', bgColor: '#00968822', icon: api },
  { name: 'Git', bgColor: '#f0503222', icon: git },
  { name: 'GitLab CI/CD', bgColor: '#fc6d2622', Icon: SiGitlab, color: '#FC6D26' },
  { name: 'JUnit', bgColor: '#25a16222', Icon: SiJunit5, color: '#25A162' },
  { name: 'Jest', bgColor: '#c2137822', Icon: SiJest, color: '#C21325' },
  { name: 'Cucumber', bgColor: '#23d96c22', Icon: SiCucumber, color: '#23D96C' },
  { name: 'k6', bgColor: '#7d64ff22', Icon: SiK6, color: '#7D64FF' },
  { name: 'Docker', bgColor: '#2496ed22', Icon: SiDocker, color: '#2496ED' },
  { name: 'Maven', bgColor: '#c7175322', Icon: SiApachemaven, color: '#C71753' },
  { name: 'Snyk', bgColor: '#4c4a7322', Icon: SiSnyk, color: '#4C4A73' },
  { name: 'PagerDuty', bgColor: '#06ac3822', Icon: SiPagerduty, color: '#06AC38' },
];

export default skills;
