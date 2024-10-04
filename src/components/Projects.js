import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Project 1',
        description: 'A web application to manage tasks.',
        image: 'https://via.placeholder.com/300',
        link: '#',
    },
    {
        title: 'Project 2',
        description: 'A mobile app to track fitness goals.',
        image: 'https://via.placeholder.com/300',
        link: '#',
    },
    {
        title: 'Project 3',
        description: 'An e-commerce platform for small businesses.',
        image: 'https://via.placeholder.com/300',
        link: '#',
    },
];

const Projects = () => (
    <Container id="projects" className="py-5">
        <h2 className="text-center">Projects</h2>
        <Row>
            {projects.map((project, idx) => (
                <Col key={idx} md={4} className="my-2">
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
    </Container>
);

export default Projects;
