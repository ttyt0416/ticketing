import axios from 'axios'

const LandingPage= () => {
    return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
    if (typeof window === 'undefined') {
        //it means if it on server


    } else {
        //it means if it on browser
        
    }

    return response.data;
};

export default LandingPage;