
import { Container, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="mt-5 text-center">
      <Container className="bg-light p-5">
        <h1 className="fw-bold text-center ">A warm welcome!</h1>
        <p className="text-center fs-3">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <Button className="btn-lg">Call to action</Button>
      </Container>
    </div>
  );
};
