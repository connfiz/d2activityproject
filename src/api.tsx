import React, { useState, useEffect } from 'react';
import axios from 'axios';
import handleButtonClick from './SearchBar';
import { DefinitionsProvider, verbose, includeTables, loadDefs, setApiKey } from "@d2api/manifest-react";



export const ApiFunction = async () => {
    const [userData, setUserData] = useState<any>(null);
    
    try {
        if (setUserData) {
            const membershipType = userData.membershipType;
            const destinyMembershipId = userData.membershipId;


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

                // setUserData(statsResponse.data);


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

                const activities = statsResponse.data.Response.activities;

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
                                activityName: activityName,
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



                // setUserData({
                //     activityName: activityName,
                // });


            } catch (error) {
                console.error('Error fetching characterId data: ', error);
            }
        } else {
            console.log('No memberships found for this user.');
            // setUserData(null);
        }
    } catch (error) {
        console.error('Error fetching user data: ', error);
        setUserData(null);
    }
console.log(userData)

return (
    <div>
        <div>

            {/* {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}  */}
            {userData && (
                <>
                    <h2>{userData.activityName}</h2>
                    <p>Kills: {userData.killsdata}</p>
                    <p>Deaths: {userData.deaths}</p>
                    <p>Assists: {userData.assists}</p>
                    <p>K/D Ratio: {userData.kdr}</p>
                    <p>Time Played: {userData.timePlayed}</p>
                    <p>Date: {userData.period}</p>
                    <p>Completed: {userData.completed}</p>
                </>
            )}

        </div>

    </div>

);
};

export default ApiFunction;