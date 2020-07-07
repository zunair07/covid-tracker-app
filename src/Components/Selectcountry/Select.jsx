import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountryData } from '../../api';
import styles from './Select.module.css';


const Countryselector = ({ handleCountryChange }) => {

    const [country, setcountry] = useState([]);

    useEffect(() => {
        const fetechCountry = async () => {
            setcountry(await getCountryData());
        }

        fetechCountry();

    }, [setcountry])



    return (

        <>
            {/* <b><h3 align='center' margig-top='2%'>Select Country from here</h3></b>*/}
            <FormControl className={styles.container}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">World</option>
                    {country.map((country, ind) => <option key={ind} value={country}>
                        {country}
                    </option>)}
                </NativeSelect>
            </FormControl>
        </>
    )
}


export default Countryselector;