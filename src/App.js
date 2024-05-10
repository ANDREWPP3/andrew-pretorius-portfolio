import React, { useEffect, useState } from 'react';
import { DEFAULT_SCREEN, SCREENS } from './const/screens';
import Home from './components/functional/screens/home';
import Route from './components/functional/navigation/route';
import { DEFAULT_LANGUAGE, LANGUAGES } from './const/languages';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './util/screen-util';
import { DEFAULT_THEME, THEMES } from './const/themes';
import Loading from './components/functional/util/loading';
import Projects from './components/functional/screens/projects';
import About from './components/functional/screens/about';
import Skills from './components/functional/screens/skills';
import Education from './components/functional/screens/education';
import Experience from './components/functional/screens/experience';

export default function App(){
  const [isLoading,setIsLoading] = useState(true);
  const [screen,setScreen] = useState(DEFAULT_SCREEN);
  const [windowWidth,setWindowWidth] = useState(SCREEN_WIDTH);
  const [windowHeight,setWindowHeight] = useState(SCREEN_HEIGHT);
  const [language,setLanguage] = useState(DEFAULT_LANGUAGE);
  const [theme,setTheme] = useState(DEFAULT_THEME(DEFAULT_LANGUAGE));

  useEffect(()=>{
    if(language&&language.id&&theme&&theme.id){
      setIsLoading(false);
    }
  },[language,theme])

  useEffect(()=>{
    if(language&&language.id){
      for(let i=0;i<THEMES(language).length;i++){
        if(theme.id===THEMES(language)[i].id){
          setTheme(THEMES(language)[i]);
          break;
        }
      }
    }
  },[language])


  if(isLoading)
    return <Loading/>

  return(
    <div>
        <Route path={"/"}><Home theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/></Route>
        <Route path={"/projects"}><Projects theme={theme} language={language} screen={screen} setScreen={setScreen}/></Route>
        <Route path={"/about"}><About theme={theme} language={language} screen={screen} setScreen={setScreen}/></Route>
        <Route path={"/skills"}><Skills theme={theme} language={language} screen={screen} setScreen={setScreen}/></Route>
        <Route path={"/education"}><Education theme={theme} language={language} screen={screen} setScreen={setScreen}/></Route>
        <Route path={"/experience"}><Experience theme={theme} language={language} screen={screen} setScreen={setScreen}/></Route>
    </div>
  )
}