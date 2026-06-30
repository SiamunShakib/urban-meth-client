import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import EmptyState from "../../components/ui/EmptyState";
import Input from "../../components/ui/Input";
import Loader from "../../components/ui/Loader";
import SectionTitle from "../../components/ui/SectionTitle";

const Home = () => {
  return (
    <Container className="section-padding space-y-12">
      <SectionTitle
        title="Welcome to Urban Meth"
        subtitle="A modern e-commerce experience."
      />

      <Button>Shop Now</Button>

      <Input placeholder="Search products..." />

      <Loader />

      <EmptyState
        title="No Products Found"
        description="Products will appear here."
      >
        <Button variant="outline">Browse Shop</Button>
      </EmptyState>
    </Container>
  );
};

export default Home;