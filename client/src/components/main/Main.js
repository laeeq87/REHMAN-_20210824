import React from 'react';
import { Player } from '../Player/Player'
import { VideoCard } from '../card/Card';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            player: <Player props={{}}/>
         };
      }


    async componentDidMount(prevProps) {
        await this.getVideos();
    }

    async getVideos() {
        try {
            const response = await axios.get(`http://localhost:5000/api/video/`);
            if (response.status === 200 & response.data.data.length > 0) {
                this.setState({videos: response.data.data});
            }
        } catch (error) {
            console.error(error);
        }
    }


    playVideo(data) {
        this.setState({player: <Player props={data} />});
    }


    getVideoCards() {

        let videoCards = [];
        if (this.state.videos.length > 0 ) {
            this.state.videos.map((vid, index) => {
                let thumnail = vid.thumbnails.find(t => t.size.toString() === "256");
                if (!thumnail) {
                    console.log('do nothing')
                }
                return videoCards.push(<VideoCard onClick={() => this.playVideo(vid)} title={vid.title} thumbnail={thumnail.location} category={vid.category.title} key={index} />)
            })
        }
        return videoCards;
    }

        render() {
            return (
                <div data-testid="tst-main-component" className="row mt-5">
                    <div className="col-4 overflow-auto">
                     {this.getVideoCards()}
                    </div>
                    <div className="col-8 mt-3">
                    {this.state.player}
                    </div>
                </div>
            );
        }
    }
  export default Main;