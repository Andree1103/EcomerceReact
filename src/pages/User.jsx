import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate()
    const logout = () => {
        swal({
          title: "Estas seguro?",
          text: "La sesión se cerrara y perderas tus datos!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Sesión terminada!", {
                icon: "success",
              });
              localStorage.setItem("token", "")
              localStorage.setItem("userName","")
              navigate('/login');
            } else {
              swal("Sesión no cerrada!");
            }
          });
      }
    return (
        <div className='login-container'>
            <div className='main-container'>
                <div className='user-info'>
                <div className='use-Avatar'><i className='bx bxs-user-pin' ></i></div>
                <b>WELCOME USER!!</b>
                <b>{localStorage.getItem("userName")}</b>
                <button onClick={logout}>Log out</button>
                </div>
            </div>
        </div>
    );
};

export default User;