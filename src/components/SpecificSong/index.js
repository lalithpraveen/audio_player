import { Component} from 'react'; 

import {Link} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import ReactAudioPlayer from 'react-audio-player';
import './index.css'

const SongsList = [
    {
      artist: "Norm Ender",
      cover: "https://irshad-github.github.io/static/1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Mekanın Sahibi",
      new: true,
      source: "https://irshad-github.github.io/static/1.mp3",
      trending: false
    },
    {
      artist: "The Stark Palace",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "Everybody Knows",
      new: false,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
      trending: true
    },
    {
      artist: "The Stark Palace",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Extreme Ways",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
      trending: false
    },
    {
      artist: "Sia",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Butterflies",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
      trending: "false"
    },
    {
      artist: "Haggard",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "The Final Victory",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
      trending: true
    },
    {
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Genius ft. Sia, Diplo, Labrinth",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
      trending: false
    },
    {
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "Cro Magnon Man",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
      trending: true
    },
    {
      artist: "Grandson",
      cover: "https://irshad-github.github.io/static/1.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Overnight",
      new: false,
      source: "https://irshad-github.github.io/static/2.mp3",
      trending: true
    },
    {
      artist: "Grandson",
      cover: "https://irshad-github.github.io/static/2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Over N Over",
      new: false,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
      trending: false
    },
    {
      artist: "Grandson",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Overdose",
      new: false,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
      trending: false
    },
    {
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Rag'n'Bone Man",
      new: true,
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
      trending: false
    },
    {
      artist: "Norm Ender",
      cover: "https://irshad-github.github.io/static/2v.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Nightmare",
      new: false,
      source: "https://irshad-github.github.io/static/2.mp3",
      trending: true
    },
    {
      artist: "The Stark Palace",
      cover: "https://i.imgur.com/lXvsuBu.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Cro Magnon Man",
      new: false,
      source: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      trending: true
    },
    {
      artist: "Norm Ender",
      cover: "https://i.imgur.com/klJKSVZ.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Mekanın Sahibi",
      new: false,
      source: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
      trending: true
    },
    {
      artist: "Grandson",
      cover: "https://irshad-github.github.io/static/1v.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Hidden",
      new: false,
      source: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      trending: true
    },
    {
      artist: "Human",
      cover: "https://irshad-github.github.io/static/5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Rag vova",
      new: true,
      source: "https://irshad-github.github.io/static/5.mp3",
      trending: false
    },
    {
      artist: "Lastlings",
      cover: "https://irshad-github.github.io/static/3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "No Time",
      new: false,
      source: "https://irshad-github.github.io/static/7.mp3",
      trending: true
    },
    {
      artist: "Lastlings",
      cover: "https://irshad-github.github.io/static/4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "Blinding Lights",
      new: false,
      source: "https://irshad-github.github.io/static/6.mp3",
      trending: true
    },
    {
      artist: "Lastlings",
      cover: "https://irshad-github.github.io/static/5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "джованна",
      new: false,
      source: "https://irshad-github.github.io/static/8.mp3",
      trending: true
    },
    {
      artist: "Lastlings",
      cover: "https://irshad-github.github.io/static/6.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "A Man",
      new: true,
      source: "https://irshad-github.github.io/static/10.mp3",
      trending: true
    },
    {
      artist: "Human",
      cover: "https://irshad-github.github.io/static/3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "Unforgetting",
      new: false,
      source: "https://irshad-github.github.io/static/4.mp3",
      trending: false
    },
    {
      artist: "Randall",
      cover: "https://irshad-github.github.io/static/5v.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "Waharan",
      new: false,
      source: "https://irshad-github.github.io/static/12.mp3",
      trending: true
    },
    {
      artist: "Randall",
      cover: "https://irshad-github.github.io/static/5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: false,
      name: "Road Down Hill",
      new: false,
      source: "https://irshad-github.github.io/static/11.mp3",
      trending: false
    },
    {
      artist: "Haggard",
      cover: "https://irshad-github.github.io/static/13.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vestibulum felis. Cras pretium justo non sodales aliquet. Aenean id orci posuere, egestas lacus pulvinar, iaculis purus. Maecenas eu metus mollis, venenatis lorem laoreet, faucibus est. Fusce id dolor ut ex mattis mollis.",
      favorited: true,
      name: "The Final Call",
      new: false,
      source: "https://irshad-github.github.io/static/15.mp3",
      trending: false
    }
  ]

class SpecificSong extends Component {
    state = {songDetails:[],artistName:'',songUrl:''}

    
    
    componentDidMount() {
        this.getSongDetails()
    }

    getSongDetails = () => {
        const {match} = this.props 
        const {params} = match
    const {name} = params 

    const songDetails = SongsList.filter(eachTrack => eachTrack.name === name)

    const artistName = (songDetails[0].artist)
    const songUrl = songDetails[0].source

    this.setState({songDetails : songDetails,artistName:artistName,songUrl:songUrl})


    }

    renderSimilarArtists = () => {
        const {artistName} = this.state 

        const similarArtist = SongsList.filter(eachTrack => eachTrack.artist === artistName)
        const updatedArtists = similarArtist

        

        return (
            <>
            <h1 className="home-title">Similar artists</h1>
            <div className="similar-album-container">
            {updatedArtists.map(eachTrack => (
                <Link to={`/song/${eachTrack.name}`} className="link-item">
                <div className="similar-album-card"> 
                  <img src={eachTrack.cover} alt="song" className="song-img"/> 
                  <h1 className="song-name">{eachTrack.name}</h1>
                </div>
                </Link>
            ))}
            </div>
            </>
        )
    }

    render() {
        const {songDetails,songUrl} = this.state 
        

        return (
            <>
            <div className="specific-song-container">
                <Link to="/">
                <BiArrowBack className="back-arrow" size={30} />
                </Link>
                <div className="song-details-similar-container">
                    
                        {songDetails.map(eachDetails => (
                            <div className="song-details-card">
                                <img src={eachDetails.cover} alt={eachDetails.name} className="cover-image"/>
                                <p className="cover-name"><strong className="cover-label">Album : </strong>{eachDetails.name}</p>
                                <p className="cover-name"><strong className="cover-label">Artist :</strong>{eachDetails.artist}</p>
                                <p className="cover-name"><strong className="cover-label">Description : </strong>{eachDetails.description}</p>
                            </div>
                        ))}

                    {this.renderSimilarArtists()}
                    
                </div>
                
            </div>
            <div className="audio-player-card">
            <ReactAudioPlayer
            src={songUrl}
            autoPlay
            controls
            size={75}
        />
        </div>
        </>
        )
    }
}

export default SpecificSong