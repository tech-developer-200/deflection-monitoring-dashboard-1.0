import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

import {AiOutlineTable} from 'react-icons/ai'

import {GiDrill} from 'react-icons/gi';
import {AiOutlineLineChart} from 'react-icons/ai';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/cncinfo',
    text: 'CNC Info',
    icon: <GiDrill/>,
  },
  {
    id: 3,
    url: '/table1',
    text: 'Temperature table',
    icon: <AiOutlineTable/>,
  },
  {
    id: 4,
    url: '/table2',
    text: 'Tabular Data',
    icon: <AiOutlineTable/>,
  },
  {
    id: 5,
    url: '/graph1',
    text: 'Temperature Graph',
    icon: <AiOutlineLineChart/>,
  },
  {
    id: 6,
    url: '/graph2',
    text: 'Deflection Graph',
    icon: <AiOutlineLineChart/>,
  },
  {
    id: 7,
    url: '/graph3',
    text: 'Compare Graphs',
    icon: <AiOutlineLineChart/>,
  },
  {
    id: 8,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 9,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 10,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
