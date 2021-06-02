import React, { useState, useEffect } from 'react'
import { ListGames } from './ListGames'

export const Games = ({select}) => {
    const [games, setgames] = useState([])
    
        const getData = async () => {
        const customData = require('../../assets/games.json')
        setgames(customData)  
    }
    
    useEffect(() => {
        getData()
    }
    , [])

    switch (select) {
        case 'name': 
            games.sort((a,b)=>{
                const wordA= a.title.toLowerCase();
                const wordB= b.title.toLowerCase();
                if (wordA<wordB){return -1;}
                if (wordA>wordB){return 1;}
                return 0;
            });

            return (
                <ul>
                    <ListGames games={games}/>        
                </ul> 
            );
            
    
        case 'stakemin':
            games.sort((a,b)=>{
                if (a.minbet<b.minbet){return -1;}
                if (a.minbet>b.minbet){return 1;}
                return 0;
            });
            
            return (
                <ul>
                    <ListGames games={games}/>        
                </ul> 
            );
            
    
        case 'stakemax':
            games.sort((a,b)=>{
                if (a.minbet<b.minbet){return 1;}
                if (a.minbet>b.minbet){return -1;}
                return 0;
            });
            
            return (
                <ul>
                    <ListGames games={games}/>        
                </ul> 
            );
    
        default:
            
            return (
                <ul>
                    <ListGames games={games}/>        
                </ul> 
            );
    }  
}