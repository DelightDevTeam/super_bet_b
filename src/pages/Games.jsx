import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

export default function Games() {
    const { provider, type } = useParams();
    const {data: games, loading} = useFetch(BASE_URL + '/game/gamelist/' + provider + '/' + type);
    const {data: gameTypes} = useFetch(BASE_URL + '/gameTypeProducts/' + type);
    const providers = gameTypes?.game_type?.products;
    const providerName = providers?.find(p => p.id == provider)?.name;
    // console.log(providers);

    const launchGame = (p_code, t_code, g_code) => (e) => {
        e.preventDefault();
        let gameData = {
          "productId" : p_code,
          "gameType" : t_code,
          "gameId": g_code
        }

        fetch(BASE_URL + "/game/Seamless/LaunchGame", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(gameData)
          })
          .then((response) => {
              if (!response.ok) {
                  throw new Error("Launch Game failed");
              }
              console.log("Launch Game success");
              return response.json();
          })
          .then((data) => {
              window.open(data.Url, '_blank');
          })
          .catch((error) => {
              console.error("Launch Game error:", error);
          });
    }

    const language = localStorage.getItem("lan");

  return (
    <div className='container'>
        <h4 className="text-center my-4">{providerName}</h4>
        {/* {type == 2 && <h4 className="text-center my-4">{language === "english" ? "Live Casino" : "လိုက်ဖ်ကာစီနို"}</h4>}
        {type == 3 && <h4 className="text-center my-4">{language === "english" ? "Sport Book" : "အားကစား"}</h4>}
        {type == 4 && <h4 className="text-center my-4">{language === "english" ? "Fishing" : "ငါးပစ်"}</h4>} */}

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
                            <div 
                            className="col-md-2 col-4 mb-4 cursor-pointer" 
                            key={index}
                            onClick={launchGame(game.product_code, game.game_type_id, game.code)}
                            >
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
