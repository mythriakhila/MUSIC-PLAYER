import React, { useEffect } from 'react';
import axios from "axios";
import styles from "../styles/home.module.scss";
import { Input } from 'antd';
import {
  AudioOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  BellOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import PlayList from "../components/playList";
import { fetch } from '../redux/slice/playListSlice';


function Home() {

  const [inputvalue, setinput] = useState();

  const { Search } = Input;
  // console.log(inputvalue);
  // const val = "a"
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetch({input : inputvalue}))
  },[inputvalue])

 //const data1 = axios.get(`https://saavn.me/search/songs?query=${inputvalue}`)


const data = useSelector(state => state.List.value)
// console.log(data1);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 14,
       
      }}
    />
  );
  return (
  <div className={styles.home}>
    <div className={styles.header}>
    {/* <div><LeftOutlined /> <RightOutlined /></div> */}
    <div>
      {/* <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={data}
       
       
      /> */}
          <Search
      
      placeholder="Search albums,songs..."
      
      onSearch={data}
      onChange={(e) => setinput(e.target.value)}
      style={{
        width: 250,
      }}
    />
    </div>
    <div className={styles.outline}>
  
      <p><UserOutlined /> </p>
      <p><BellOutlined /></p>
    </div>
    </div>
    <div className={styles.list}><PlayList/></div>
  </div>
  )
}
export default Home;