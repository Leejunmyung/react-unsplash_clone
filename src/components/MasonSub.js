import React from "react";
import Card from "./Card";

const Masonry = (props) => {
    
    return (
        <div style={styles.card_container}>
            <Card src="https://picsum.photos/200/300?image=279" size="small"></Card>
            <Card src="https://picsum.photos/400/400?image=400" size="medium"></Card>
            <Card src="https://picsum.photos/600/400?image=501" size="large"></Card>
        </div>
    );

};

const styles = {
    card_container: {
    margin: "30px 0px 0px 0px",
    padding: 0,
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 400px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
    backgroundColor: 'white',

    }
   };

export default Masonry;