import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useLocation } from 'react-router-dom';

const Videocall = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomID = queryParams.get("id");
    const callContainerRef = useRef(null);

    useEffect(() => {
        let myMeeting = async () => {
            // Generate Kit Token
            const appID = 1869714436;
            const serverSecret = "b3f7839e2c10ca23601850c201f087a4";
            const userID = Math.random().toString(36).substring(2, 15); // Generate a random user ID
            const userName = `User_${userID}`; // Generate a username
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            // Start the call
            zp.joinRoom({
                container: callContainerRef.current,
                sharedLinks: [
                    {
                        name: 'Shareable link',
                        url:
                            window.location.protocol + '//' +
                            window.location.host + window.location.pathname +
                            '?roomID=' +
                            roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
            });
        }
        myMeeting();
    }, [roomID]);

    return (
        <div
            className="myCallContainer"
            ref={callContainerRef}
            style={styles.callContainer}
        >
            {/* Optional: You can add an overlay or other design elements here */}
        </div>
    )
}

const styles = {
    callContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // A light gray background for a neutral look
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
    },
};

export default Videocall;
