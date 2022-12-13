import React from "react";
import styles from "../styles/aside.module.scss";
import {
    HomeOutlined,
    SaveOutlined,
    WifiOutlined,
    PlusCircleOutlined,
    RocketOutlined
} from '@ant-design/icons';

export default function Aside() {
    return (
        <div className={styles.aside}>
            <div>
                <ul type="none">
                    <li ><b>BROWSE MUSIC</b></li>
                    <li> New</li>
                    <li> PodCast</li>
                    <li> Radio</li>
                    <li> Music</li>
                </ul>
            </div>
            <div>
                <ul type="none">
                    <li><b>HIT MUSIC</b></li>
                    <li>Songs </li>
                    <li> Albums</li>
                    <li> Artists</li>
                    <li> Recent</li>
               
                </ul>
            </div>
            <div>
                <ul type="none">
                    <li><b>PLAYLISTS</b></li>
                    <li>Rock </li>
                    <li> Romantic</li>
                    <li> Hip Hop</li>
                   </ul>
            </div>
            <div className={styles.plus}>
                <PlusCircleOutlined style={{marginLeft:"10px"}} /> New Playlist
            </div>
        </div>
    )
}