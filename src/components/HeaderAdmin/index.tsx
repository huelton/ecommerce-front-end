import "./styles.css";
import homeIcon from "../../assets/home.svg";
import productsIcon from "../../assets/products.svg";
import { useEffect, useState } from "react";
import * as userService from "../../services/user-service";
import { UserDTO } from "../../models/user";

export default function HeaderAdmin() {

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
     userService.findMe().then(response => {
        setUser(response.data);
        console.log(response.data);
        setUser(response.data);
     })
     .catch(error => {
       console.log("Error ", error);
     })
  },[]);
  
  return (
    <>
      <header className="dsc-header-admin">
        <nav className="dsc-container">
          <h1>DSC Admin</h1>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
              <div className="dsc-menu-item">
                <img src={productsIcon} alt="Cadastro de produtos" />
                <p className="dsc-menu-item-active">Produtos</p>
              </div>
            </div>
            <div className="dsc-logged-user">
              <p>{user?.firstName +" "+ user?.lastName}</p>
              <a href="#">Sair</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
