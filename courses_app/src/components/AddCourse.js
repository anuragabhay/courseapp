import { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse = ()=> {
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
                <FormGroup className="px-3">
                    <label for="userId">CourseId</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId"/>
                </FormGroup>
                <FormGroup className="px-3">
                    <label>Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title"/>
                </FormGroup>
                <FormGroup className="px-3">
                    <label>Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height: 160}}/>
                </FormGroup>
                <Container className="text-center my-4">
                    <Button color="primary">AddCourse</Button>
                    <Button color="primary" outline className="mx-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>

    );
}
export default AddCourse;