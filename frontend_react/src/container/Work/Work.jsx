import React,{useState,useEffect} from 'react';
import {AiFillEye,AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';

import {AppWrapper} from '../../wrapper';
import {urlFor,client} from '../../client.js';
import './Work.scss';

const Work = () => {
  return (
    <>
    <h2 className='head-text'>I know that <span>Good Dev</span><br /> means  <span>Good Business</span></h2>
    </>
  )
}

export default Work
