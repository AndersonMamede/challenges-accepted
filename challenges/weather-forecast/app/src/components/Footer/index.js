import React from 'react';
import PropTypes from 'prop-types';
import splitList from './../../services/splitList';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalTable from './../CapitalTable';

const Footer = ({ forecasts }) => {
    const { firstChunk, secondChunk } = splitList(forecasts);

    return (
        <footer className="footer">
            <h3 className="footer__title">Capitals</h3>
            <div>
                <CapitalTable forecasts={firstChunk} side="left"/>
                <CapitalTable forecasts={secondChunk} side="right"/>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType)
};

export default Footer;
