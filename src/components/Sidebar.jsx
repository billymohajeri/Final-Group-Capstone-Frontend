import React from 'react';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../lib/consts/navigation';
import SidebarLink from './SidebarLink';
import { authLog, useLogoutMutation } from '../api/authLog';

const Sidebar = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once logged out, you will need to login again.',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancel',
          value: null,
          className: 'myButton',
          visible: true,
        },
        confirm: {
          text: 'Confirm',
          value: true,
          className: 'myButton-orange',
          visible: true,
        },
      },
    }).then((willDelete) => {
      if (willDelete) {
        logout();
        swal('Your have logged out', {
          icon: 'success',
          buttons: {
            cancel: {
              text: 'Ok',
              value: null,
              className: 'myButton',
              visible: true,
            },
          },
        });
        dispatch(authLog.util.resetApiState());
        document.cookie = '_hotel-booking=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        navigate('/');
      } else {
        swal('Your are still logged in.', {
          buttons: {
            cancel: {
              text: 'Ok',
              value: null,
              className: 'myButton',
              visible: true,
            },
          },
        });
      }
    });
  };

  return (
    <div className="bg-neutral-50 p-3 fixed h-screen flex flex-col text-neutral-900 hidden md:flex">
      <div className="flex items-center gap-2 px-1 py-3 pt-3 pb-9">
        {/* <img className="logo" src="/logo.png" alt="" /> */}
        <span className="logo-type">
          Cottage
          <br />
          Booking
        </span>
      </div>
      <div className="flex-1 flex flex-col pt-20">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <button type="button" className="logout hover:bg-neutral-700 hover:text-white no-underline activer:bg-neutral-600 rounded-sm text-base" onClick={() => handleLogout()}>
          Log Out
        </button>
      </div>
      <div className="flex flex-row p-2">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <Link to={item.path} key={item.key} className="flex-1">
            <span>{item.icon}</span>
          </Link>
        ))}
      </div>
      <p className="p-2">@2023 Cottage Booking</p>
    </div>
  );
};

export default Sidebar;
