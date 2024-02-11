import React, { useState } from 'react';

function ColorPicker(){
    const [color, setColor] = useState("#fffff");

    function col(event){
        setColor(event.target.value);
    }
    return(
        <>
            <h1>Color Picker</h1>
            <p style={{backgroundColor: color}}>{color}</p>
            <input type="color" value={color} onChange={col}/>
        </>
    );
}

export default ColorPicker;