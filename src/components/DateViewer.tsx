
import React, {useEffect, useState} from 'react';
import {Box, MenuItem, TextField} from "@mui/material";
import {CalendarMonth} from "@mui/icons-material";

function DateViewer( props: any ) {

    const [countriesState, updateCountriesState] = useState( ['Fetching...'] )
    const [currentCountry, setCurrentCountry] = useState({
        name: "",
        timezone: props.zone + "/" + props.mainCity
    })
    const [dateState, updateDateState] = useState( new Date() )

    useEffect( () => {
        setInterval( () => changeDateValue(), 30000)
    })

    useEffect( () => {
        fetchCountries()
    }, [])

    const changeDateValue = () => {
        updateDateState( new Date() )
    }

    const fetchCountries = ( zone: String = "") => {
        fetch("http://worldtimeapi.org/api/timezone/" + currentCountry.timezone.split("/")[0])
            .then( (res: any) => res.json() )
            .then( (res: any) => updateCountriesState(res) )
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let data = event.target.value
        setCurrentCountry({ name: data, timezone: props.zone + "/" + data })
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    };
    const timerStyle = {
        padding: '10px 5px',
        borderLeft: 'solid 1px #51398d',
        borderRight: 'solid 1px #51398d',
        fontSize: '6em',
        backgroundColor: '#232a3a',
        color: "#fff",
        textShadow: '0 0 25px rgb(160, 0, 210)'
    };

    return(
        <>
        <div style={ divStyle }>
            <Box width="200px">
                <TextField
                    label={ props.zone }
                    select
                    color={'secondary'}
                    size={"small"}
                    value={ currentCountry.name }
                    onChange={ handleChange }
                    fullWidth
                    variant={'filled'}
                    style={{
                        background: '#dab9f5',
                        borderBottom: 'solid 3px #a129fd',
                        borderRadius: '6px'
                }}
                >
                    { countriesState.map((country: string) => (
                        <MenuItem key={country.replace(props.zone + "/", "")} value={country.replace(props.zone + "/", "")}>
                            {country.replace(props.zone + "/", "")}
                        </MenuItem>

                    )) }
                </TextField>
            </Box>
            <p style={{
                position: 'relative',
                boxShadow: '0 0 20px rgba(172,30,245,0.57)'
            }}>
                <div style={{
                    position: 'absolute',
                    padding: '2px 0px',
                    height: '50%',
                    width: '100%',
                    background: 'rgba(217,149,252,0.12)',
                }}></div>
                {
                    dateState.toLocaleTimeString('es-ES', {
                        hour: 'numeric',
                        minute: 'numeric',
                        timeZone: currentCountry.timezone
                    }).split("").map((character: string, index: number) => (
                        <span key={index} style={ timerStyle }>
                            { character }
                        </span>

                    ))

                }
            </p>
        </div>
        </>
    )
}

export default DateViewer;
