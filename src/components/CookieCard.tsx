import { Box, Button, Typography } from "@mui/material";
import CookieConsent from "react-cookie-consent";
import { makeStyles } from "@mui/styles";
import { classicNameResolver } from "typescript";

const CookieCard = () => {

    return (
      <CookieConsent
            location="bottom"
            declineButtonText="Decline"
            buttonText="Dismiss"
            enableDeclineButton
            style={{
              background: "white", 
              justifyContent: "center",
              borderRadius: '38px',
              marginBottom: '10px',
            }}
            declineButtonStyle={{
              color: 'black',
              background: 'white',
              border: '3px solid #9F7DDB',
              borderRadius: '18px',
              padding: '15px 30px',
            }}
            buttonStyle={{ 
              color: 'white',
              background: 'linear-gradient(85.33deg, #5352B5 -20.5%, #9F7DDB 96.23%)',
              borderRadius: '18px',
              padding: '15px 30px',
            }}
            contentStyle={{flex: "0 0 100%", textAlign: "center"}}
    >
          <Typography color='black' px={3} pt={3}>
             Please notice that we use cookies on our site to improve performance and to enchance your user experience. By dismissing this message you agree to our cookie policy.
          </Typography>
        </CookieConsent>
    )
}

export default CookieCard;