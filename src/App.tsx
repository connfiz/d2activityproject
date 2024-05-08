import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar';
import Footer from './Footer';
import { createHttpClient } from "@d2api/httpclient";
import { DefinitionsProvider, verbose, includeTables, loadDefs, setApiKey } from "@d2api/manifest-react";
import { getAllInventoryItemLiteDefs, getInventoryItemLiteDef, getSeasonDef, getStatDef } from "@d2api/manifest-web";
import {
  BungieMembershipType,
  DestinyCharacterResponse,
  DestinyComponentType,
  DestinyItemType,
  DestinyVendorResponse,
  getCharacter,
  getProfile,
  getVendor,
} from "bungie-api-ts/destiny2";
import { CoreSettingsConfiguration, getCommonSettings } from "bungie-api-ts/core";
import { OAuthSetup, getLatestOAuth, getOAuthHttpClient } from "@d2api/oauth-react";
import { GeneralUser, getBungieNetUserById, getMembershipDataForCurrentUser } from "bungie-api-ts/user";
import { getApplicationApiUsage } from "bungie-api-ts/app";
// import { OAuthSetup } from "@d2api/d2oauth-react";

const { api_key, client_id, client_secret } = BUNGIE_APP_INFO;

// these initiate definitions download.
// they're at the top level of this file, not within the react structure,
// so that things start getting ready as soon as possible.
verbose();
includeTables(["InventoryItemLite", "Season", "Stat"]);
setApiKey(api_key);
// we're not awaiting this promise, just dispatching it to do its thing, while react builds the page
loadDefs();

function App() {
  

  return (
    <div>
      <div id="navlist">
        <img src="src\assets\images\logo.png" alt="dungeon logo" className="logo" />
        <a href="app.tsx">Home</a>
        {/* <div className="search-bar">
          <SearchBar />
        </div> */}
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="footer">
        <Footer />
        </div>
    </div>
  )
}

export default App
