import {Link} from 'react-router-dom'
import { Component} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import ReactSlider from '../ReactSlider'
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

class Home extends Component {
    state = {searchInput:'',selectedSongsList : SongsList}

    onClickAll = () => {
      const allSongs = SongsList
      this.setState({selectedSongsList:allSongs})
    }

    onClickTrending = () => {
      const trendingSongs = SongsList.filter(eachTrack => eachTrack.trending === true)

      this.setState({selectedSongsList:trendingSongs})
    }

    onClickNew = () => {
      const newSongs = SongsList.filter(eachTrack => eachTrack.new === true)

      this.setState({selectedSongsList:newSongs})
    }

    onClickFavourite = () => {
      const favSongs = SongsList.filter(eachTrack => eachTrack.favorited === true)

      this.setState({selectedSongsList:favSongs})
    }

    

    onClickSearchIcon = () => {
      const {searchInput} = this.state 
      const searchResults = SongsList.filter((data) => JSON.stringify(data).toLowerCase().indexOf(searchInput.toLowerCase()) !== -1)

      this.setState({selectedSongsList:searchResults,searchInput:''})
    }

    
    

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
      }

    render(){
        const {searchInput,selectedSongsList} = this.state
        

    return (
        <div className="home-container">
            <div className="home-header">
          <h1 className="home-title">Music player</h1>
          <div className="search-container">
          <input className="search-input" type="text" value={searchInput}  onChange={this.onChangeSearchInput} placeholder="Search" />
          <button type="button" className="search-btn" onClick={this.onClickSearchIcon}>
          <AiOutlineSearch className="search-icon"/></button>
          </div>
          </div>
          <ul className="nav-list-items">

              <li className="list-item" onClick={this.onClickAll}>All</li>
              <li className="list-item" onClick={this.onClickTrending}>Trending</li>
              <li className="list-item" onClick={this.onClickNew}>New</li>
              <li className="list-item" onClick={this.onClickFavourite}>Favourite</li>
          </ul>

          
            <Carousel infiniteLoop="true" autoPlay="true" thumbWidth="180" useKeyboardArrows="true">
              {SongsList.map(eachTrack => (
                <ReactSlider trackDetails={eachTrack} />
              ))}
            </Carousel>
            <div className="all-songs-container">
              
              {selectedSongsList.map(eachTrack => (
                <Link to={`/song/${eachTrack.name}`} className="link-item">
                <div> 
                  <img src={eachTrack.cover} alt="song" className="song-img"/> 
                  <h1 className="song-name">{eachTrack.name}</h1>
                </div>
                </Link>
              ))}
              
            </div>
          
        </div>
      );
    }

}

export default Home