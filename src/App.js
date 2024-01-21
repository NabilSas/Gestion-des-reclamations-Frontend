import React, { Component } from "react";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import UserLogin from "views/UserLogin";
import UserRegister from "views/UserRegister";
import Manager from "layouts/Manager/Manager";
import Client from './layouts/Client/Client';
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import AuthService from "./services/auth.service";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
      isAdmin: false,
      isDirector: false,
      isUser:false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        isAdmin: user.roles.includes("ROLE_ADMIN"),
        isDirector: user.roles.includes("ROLE_MODERATOR"),
        isUser:user.roles.includes("ROLE_USER")
      });
    }
  }

  render() {
    const { currentUser, isAdmin, isDirector,isUser } = this.state;

    return (
      <div>
        <ThemeContextWrapper>
    <BackgroundColorWrapper>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/admin/*" element={isAdmin ? <AdminLayout /> : <UserLogin />}/>
          <Route path="/manager/*" element={isDirector ? <Manager /> : <UserLogin />}/>
          <Route path="/client/*" element={isUser ? <Client /> : <UserLogin />} />
          <Route path="/rtl/*" element={<RTLLayout />} />
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>

      </div>
    );
  }
}

export default App;
