import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function SearchBar() {
    const [input, setInput] = useState('');
    const [userData, setUserData] = useState<any>(null);
    const [raidData, setRaidData] = useState<any>(null);

    const handleSearch = async () => {

        const apiUrl = `https://www.bungie.net/Platform/User/Search/Prefix/${input}/0/`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'X-API-Key': process.env.BUNGIE_API_KEY }
            });
            const membership = response.data.Response.searchResults[0].destinyMemberships[0];
            if (membership) {
                const membershipType = membership.membershipType;
                const destinyMembershipId = membership.membershipId;

                const characterIdUrl = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=100`;
                try {
                    const characterIdResponse = await axios.get(characterIdUrl, {
                        headers: { 'X-API-Key': process.env.BUNGIE_API_KEY }
                    });

                    const characterId = characterIdResponse.data.Response.profile.data.characterIds[0];
                    console.log(characterIdUrl)

                    // Third API call to get character stats
                    const statsUrl = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/?count=1&page=001&mode=82`;
                    const statsResponse = await axios.get(statsUrl, {
                        headers: { 'X-API-Key': process.env.BUNGIE_API_KEY }
                    });

                    const RaidUrl = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/?count=1&page=001&mode=4`;
                    const raidResponse = await axios.get(RaidUrl, {
                        headers: { 'X-API-Key': process.env.BUNGIE_API_KEY }
                    });


            

                    interface raidMap {
                        [key: number]: string;
                    }

                    const refIdNameRaidp: raidMap = {
                        2693136600: "Leviathan",
                        2693136601: "Leviathan",
                        2693136602: "Leviathan",
                        2693136603: "Leviathan",
                        2693136604: "Leviathan",
                        2693136605: "Leviathan",
                        89727599: "Leviathan",
                        287649202: "Leviathan",
                        1699948563: "Leviathan",
                        1875726950: "Leviathan",
                        3916343513: "Leviathan",
                        4039317196: "Leviathan",
                        417231112: "Leviathan",
                        508802457: "Leviathan",
                        757116822: "Leviathan",
                        771164842: "Leviathan",
                        1685065161: "Leviathan",
                        1800508819: "Leviathan",
                        2449714930: "Leviathan",
                        3446541099: "Leviathan",
                        4206123728: "Leviathan",
                        3912437239: "Leviathan",
                        3879860661: "Leviathan",
                        3857338478: "Leviathan",
                        3089205900: "Eater of Worlds",
                        2164432138: "Eater of Worlds",
                        809170886: "Eater of Worlds",
                        119944200: "Spire of Stars",
                        3004605630: "Spire of Stars",
                        3213556450: "Spire of Stars",
                        2122313384: "Last Wish",
                        2214608157: "Last Wish",
                        1661734046: "Last Wish",
                        548750096: "Scourge of the Past",
                        2812525063: "Scourge of the Past",
                        3333172150: "Crown of Sorrow",
                        960175301: "Crown of Sorrow",
                        2659723068: "Garden of Salvation",
                        3458480158: "Garden of Salvation",
                        1042180643: "Garden of Salvation",
                        2497200493: "Garden of Salvation",
                        3845997235: "Garden of Salvation",
                        3823237780: "Garden of Salvation",
                        910380154: "Deep Stone Crypt",
                        3976949817: "Deep Stone Crypt",
                        3881495763: "Vault of Glass",
                        3711931140: "Vault of Glass",
                        1485585878: "Vault of Glass",
                        1681562271: "Vault of Glass",
                        3022541210: "Vault of Glass",
                        1441982566: "Vow of the Disciple",
                        2906950631: "Vow of the Disciple",
                        4156879541: "Vow of the Disciple",
                        4169648179: "Atraks Sovereign",
                        4169648176: "Oryx Exalted",
                        1374392663: "King's Fall",
                        2897223272: "King's Fall",
                        1063970578: "King's Fall",
                        2964135793: "King's Fall",
                        3257594522: "King's Fall",
                        2381413764: "Root of Nightmares",
                        1191701339: "Root of Nightmares",
                        2918919505: "Root of Nightmares",
                        4179289725: "Crota's End",
                        4103176774: "Crota's End",
                        156253568: "Crota's End",
                        1507509200: "Crota's End",
                        4217492330: "Vow of the Disciple",
                        3889634515: "Vow of the Disciple",
                        4169648177: "Rhulk Indomitable",
                        4169648182: "Nezarec Sublime", 


                    };

                    interface ActivityMap {
                        [key: number]: string;
                    }


                    const refIdNameMap: ActivityMap = {
                        318328469: "Ghosts of the Deep: Master",
                        735007638: "Pit of Heresy: Legend",
                        78570673: "Pit of Heresy: Master",
                        78570678: "Pit of Heresy: Legend",
                        1077805348: "Prophecy",
                        1129617203: "Grasp of Avarice: Master",
                        1129742931: "Grasp of the Watcher: Normal",
                        1178503423: "Spire of the Watcher: Master",
                        1256402018: "Pit of Heresy: Normal",
                        1662771731: "Duality: Master",
                        1801496203: "Spire of the Watcher: Master",
                        2004255007: "Warlord’s Ruin: Normal",
                        2025634090: "The Shattered Throne",
                        2292851862: "Spire of the Watcher: Normal",
                        2543830393: "Warlord’s Ruin: Master",
                        2559374368: "Pit of Heresy: Legend",
                        2559374374: "Pit of Heresy: Master",
                        2559374375: "Pit of Heresy: Master",
                        2582501063: "Pit of Heresy: Normal",
                        2761991824: "Ghosts of the Deep: Master",
                        2823159265: "Duality: Normal",
                        3012587262: "Duality: Master",
                        3717402156: "Grasp of Avarice: Master",
                        4078656646: "Grasp of Avarice: Normal",
                        4148187374: "Prophecy",
                        2032534090: "The Shattered Throne",
                        1262462921: "Spire of the Watcher: Normal"
                    };



                    let activityName: string | null = null;
                    let raidName: string | null = null;


                    const activities = statsResponse.data.Response.activities;
                    const raids = raidResponse.data.Response.activities;

                    if (raids && raids.length > 0) {{
                        const raid = raids[0];
                        const referenceId = raid.activityDetails.referenceId;
                        const { kills } = raid.values;
                        const { deaths } = raid.values;
                        const { assists } = raid.values;
                        const { killsDeathsRatio } = raid.values;
                        const { timePlayedSeconds } = raid.values;
                        const period = raid.period.split('T')[0];;
                        const { completed } = raid.values;
                        
                        if (typeof referenceId === 'number') {
                            raidName = refIdNameRaidp[referenceId];
                            if (raidName) {
                                console.log("Raid Name:", raidName);
                                console.log("Kills:", kills.basic.displayValue);
                                console.log("Deaths:", deaths.basic.displayValue);
                                console.log("Assists:", assists.basic.displayValue);
                                console.log("K/D Ratio:", killsDeathsRatio.basic.displayValue);
                                console.log("Time Played:", timePlayedSeconds.basic.displayValue);
                                console.log("Period:", period);
                                console.log("Completed:", completed.basic.displayValue);
                                setRaidData({
                                    Raidkillsdata: kills.basic.displayValue,
                                    RaidactivityName: raidName,
                                    Raiddeaths: deaths.basic.displayValue,
                                    Riadassists: assists.basic.displayValue,
                                    Raidkdr: killsDeathsRatio.basic.displayValue,
                                    RaidtimePlayed: timePlayedSeconds.basic.displayValue,
                                    Raidperiod: period,
                                    Raidcompleted: completed.basic.displayValue
                                });
                            }
                        }

                    }

                    if (activities && activities.length > 0) {
                        const activity = activities[0];
                        const referenceId = activity.activityDetails.referenceId;
                        const { kills } = activity.values;
                        const { deaths } = activity.values;
                        const { assists } = activity.values;
                        const { killsDeathsRatio } = activity.values;
                        const { timePlayedSeconds } = activity.values;
                        const period = activity.period.split('T')[0];;
                        const { completed } = activity.values;

                        if (typeof referenceId === 'number') {
                            activityName = refIdNameMap[referenceId];
                            if (activityName) {
                                console.log("Activity Name:", activityName);
                                console.log("Kills:", kills.basic.displayValue);
                                console.log("Deaths:", deaths.basic.displayValue);
                                console.log("Assists:", assists.basic.displayValue);
                                console.log("K/D Ratio:", killsDeathsRatio.basic.displayValue);
                                console.log("Time Played:", timePlayedSeconds.basic.displayValue);
                                console.log("Period:", period);
                                setUserData({
                                    killsdata: kills.basic.displayValue,
                                    activityName1: activityName,
                                    deaths: deaths.basic.displayValue,
                                    assists: assists.basic.displayValue,
                                    kdr: killsDeathsRatio.basic.displayValue,
                                    timePlayed: timePlayedSeconds.basic.displayValue,
                                    period: period,
                                    completed: completed.basic.displayValue
                                });
                            }
                        }
                    }



                   


                   else try {
                    } catch (error) {
                        console.error('Failed to fetch stats:', error);
                    }
                } else {
                    console.log('No character ID found');
                }
            } catch (error) {
                console.error('Failed to fetch character ID:', error);
            }
        } else {
            console.log('No membership information found');
        }
    } catch (error) {
        console.error('Failed to fetch user membership:', error);
    }
};
console.log(userData);

return (
                    <div className='searchbarbox'>
                     <h2>welcome Guardian!</h2>
                     <p>use the search bar below to view your recent dungeon and raid activitys</p>
        <b>Please enter you in game name like "Guardian123" and not with the bungie numbers lke "Guardian123#1234"</b>
                        <br />
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter display name..."
                        />
                        <button onClick={handleSearch}>Search</button>
                        <div>

                            {/* {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}  */}
            {userData && raidData &&(
                <>
                
                    <div className="container">
                        <div className="div1">
                            <img src="src\assets\images\dungeon-logo.png" alt="dungeon logo" className="activitylogo" />
                            <h2>Dungeon: {userData.activityName1}</h2>
                        </div>
                        <div className="div2">
                            <p>Kills: {userData.killsdata}</p>
                        </div>
                        <div className="div3">
                            <p>Deaths: {userData.deaths}</p>
                        </div>
                        <div className="div4">
                            <p>Assists: {userData.assists}</p>
                        </div>
                        <div className="div5">
                            <p>K/D Ratio: {userData.kdr}</p>
                        </div>
                        <div className="div6">
                            <p>Time Played: {userData.timePlayed}</p>
                        </div>
                        <div className="div7">
                            <p>Date: {userData.period}</p>
                        </div>
                        <div className="div8">
                            <p>Completed: {userData.completed}</p>
                        </div>
                    </div >

                    <div className="container 2">
                        <div className="div1">
                            <img src="src\assets\images\raid-complex.png" alt="raid logo" className="activitylogo" />
                            <h2>Raid: {raidData.RaidactivityName}</h2>
                        </div>
                        <div className="div2">
                            <p>Kills: {raidData.Raidkillsdata}</p>
                        </div>
                        <div className="div3">
                            <p>Deaths: {raidData.Raiddeaths}</p>
                        </div>
                        <div className="div4">
                            <p>Assists: {raidData.Raidassists}</p>
                        </div>
                        <div className="div5">
                            <p>K/D Ratio: {raidData.Raidkdr}</p>
                        </div>
                        <div className="div6">
                            <p>Time Played: {raidData.RaidtimePlayed}</p>
                        </div>
                        <div className="div7">
                            <p>Date: {raidData.Raidperiod}</p>
                        </div>
                        <div className="div8">
                            <p>Completed: {raidData.Raidcompleted}</p>
                        </div>
                    </div >
                </>
                            )}

                        </div>

                    </div>

                );


};
export default SearchBar;