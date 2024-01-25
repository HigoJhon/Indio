import Header from "../components/Header";
import "../style/home.css";

const Home = () => {
  return (
    <main>
      <div className="div-header">
        <Header />
      </div>  
      <div className="background-image">
        <div className="text-indio">
          <h1>Bem vindo ao Indo Artesanatos</h1>
        </div>
        <div className="image-indio">
          
        </div>
      </div>
    </main>
  );
};

export default Home;
