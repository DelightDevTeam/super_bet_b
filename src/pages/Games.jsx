import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

export default function Games() {
    const { provider, type } = useParams();
    const {data: games, loading} = useFetch(BASE_URL + '/game/gamelist/' + provider + '/' + type);
    // console.log(games);

  return (
    <div className='container'>
        <h4 className="text-center my-4">{type == 1 ? "Slot" : type == 2 ? "Live Casino" : type == 3 ? "Sport Book" : "Fishing"}</h4>

        <div className="row">
            {
                loading ? 
                <div className="col-12 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : 
                    games && games.map((game, index) => {
                        return (
                            <div className="col-md-2 col-4 mb-4" key={index}>
                                <div className="cursor-pointer">
                                    <img src={game.image_url} alt="" className="img-fluid rounded-4 shadow-lg mb-2" />
                                    <small className='d-block'>{game.name}</small>
                                </div>
                            </div>
                        )
                    })
                
            }
        </div>
    </div>
  )
}
