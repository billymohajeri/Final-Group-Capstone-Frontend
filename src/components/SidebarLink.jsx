/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:text-white no-underline activer:bg-neutral-600 rounded-sm text-base';

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'my-bg-green text-neutral-50' : ' ',
        linkClasses,
      )}
    >
      <span className="text-xl">{item.label}</span>
    </Link>
  );
};

SidebarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SidebarLink;
