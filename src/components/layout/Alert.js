import React, {useContext} from 'react';
import GithubContext from '../../context/alert/AlertContext';


const Alert = () => {
    const alertContext = useContext(GithubContext);

    const {alert} = alertContext;

    return (
        alert !== null && (
            <div className={`alert alert${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg}
            </div>
        )
    );
};

export default Alert;