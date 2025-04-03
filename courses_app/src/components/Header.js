import { Card, CardBody } from "reactstrap";

function Header({name, description}) {
    return(
        <div style={{padding: 20, width: 1120}}>
          <Card className="my-1">
            <CardBody>
              <h1 className="text-center my-5">Welcome to CourseBase</h1>
            </CardBody>
          </Card>
          
        </div>
        //  <h1>{name}</h1>
        //  <p>{description}</p>

    )
}

export default Header;