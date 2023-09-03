// import classes from './Music.module.css'
import classes from './Music.module.css'
import { musicData } from './MusicData';

const Music = () => {
    return (
        <div className={classes.musicWrapper}>
            {
                musicData.map( music => <div className={classes.countWrapper} key={music.songName}>
                    <div className={classes.musicSongName}>{music.songName}</div>
                    <div className={classes.musicAuthorName}>{music.authorName}</div>
                    <img src={music.musicImage} alt='image' className={classes.musicImage}/>
                    <audio src={music.source} controls className={classes.audio}></audio>

                </div> )
            }
        </div>
    )
}

export default Music;