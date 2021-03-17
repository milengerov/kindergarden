import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";


import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <RegisterForm></RegisterForm>
      <LoginForm></LoginForm>
      <Footer />
      
    </div>
  );
}

export default App;
