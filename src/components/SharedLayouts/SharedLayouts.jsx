import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header,Link,Container } from "../App.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  )
};
 

export default SharedLayout