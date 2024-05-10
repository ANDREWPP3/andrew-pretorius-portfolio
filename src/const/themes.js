import { LANGUAGE } from "../language/language"

export const THEME_PRIMARY = 1
export const THEME_SECONDARY = 2

export const THEME = (theme) => {
    if(!theme){
        return(
            {
                BACKGROUND : '#222629',
                BUTTON : '#86C232',
                PRIMARY_TEXT : "#EDF1FF",
                SECONDARY_TEXT : "#6B6E70",
                ACCENT : '#61892F',
                ACCENT_TRANSPARENT : 'rgba(97, 137, 47, 0.8)',
            }
        )
    }
       
    if(theme.id===THEME_PRIMARY){
        return(
            {
                BACKGROUND : '#222629',
                BUTTON : '#86C232',
                PRIMARY_TEXT : "#EDF1FF",
                SECONDARY_TEXT : "#6B6E70",
                ACCENT : '#61892F',
                ACCENT_TRANSPARENT : 'rgba(97, 137, 47, 0.8)',
            }
        )
    }else if(theme.id===THEME_SECONDARY){
        return(
            {
                BACKGROUND : '#C6C6C9',
                BUTTON : '#F7F9FA',
                PRIMARY_TEXT : "#000000",
                SECONDARY_TEXT : "#484B6A",
                ACCENT : '#023E8A',
                ACCENT_TRANSPARENT : 'rgba(2, 62, 138, 0.8)',
            }
        )
    }else{
        return(
            {
                BACKGROUND : '#222629',
                BUTTON : '#86C232',
                PRIMARY_TEXT : "#EDF1FF",
                SECONDARY_TEXT : "#6B6E70",
                ACCENT : '#61892F',
                ACCENT_TRANSPARENT : 'rgba(97, 137, 47, 0.8)',
            }
        )
    }
}

export const THEMES = (lang) => [
    {name : LANGUAGE(lang).primary, id : THEME_PRIMARY},
    {name : LANGUAGE(lang).secondary, id : THEME_SECONDARY}
]

export const DEFAULT_THEME = (lang) => THEMES(lang)[0];

export const PRIMARY = (lang) => LANGUAGE(lang).primary;
export const SECONDARY = (lang) => LANGUAGE(lang).secondary;