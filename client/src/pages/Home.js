import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASES } from "../utils/queries"
import CaseForm from '../components/CaseForm';
import Auth from '../utils/auth';

import CaseList from '../components/CaseList';

const Home = () => {

    const { loading, data } = useQuery(QUERY_CASES);
    const cases = data?.cases || [];
    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div>
                
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <CaseList cases={cases}/>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;