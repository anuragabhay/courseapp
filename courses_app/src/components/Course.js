import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container

} from "reactstrap";

const Course = ({course}) => {
    return (

            <Card className="shadow-lg">
                <CardBody>
                    <CardTitle className="fw-bold fs-5">{course.title}</CardTitle>
                    <CardSubtitle className="fw-medium fst-italic px-0 mb-2">{course.subtitle}</CardSubtitle>
                    <CardText className="px-0 mb-2">{course.description}</CardText>
                    <div>
                        <Button>Delete</Button>
                        <Button color="dark" className="mx-2">Update</Button>
                    </div>
                </CardBody>
            </Card>

    )
}

export default Course;