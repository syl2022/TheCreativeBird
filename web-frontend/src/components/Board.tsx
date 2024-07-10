import React, {useEffect} from 'react';
import DrawingBoard from 'react-drawing-board';
import Container from "@mui/material/Container";

function Board() {

    return (
        <Container>
           <DrawingBoard
                onChange={() => {
                    console.log(`TODO: send`);
                }}
            />
        </Container>
    )
}

export default Board;