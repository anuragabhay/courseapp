import { Button , Container } from 'reactstrap';
import { toast } from 'react-toastify';

const Home = () => {
    
        const btnHandle = () => {
            toast.error("error", {
              position: "top-right"
            });
          };
    return (
        <div className= "d-flex justify-contents-center align-items-center">
            <Container fluid className = "text-center mb-2 py-5 bg-light rounded">
                <h1 style={{fontWeight: "bold", padding: "4px"}}>Simple Application</h1>
                <p className="mb-4">What are you waiting for? Do you think you know everything. Check our courses to find out!</p>
                <Button className = "px-5 shadow-sm" color="primary"  onClick={btnHandle}>Let's Get Started</Button>
            </Container>
        
        </div>
    )
}

export default Home;