import React from 'react';

const Loading = () => {
    return ( <div style={{height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
        <div class="spinner-grow text-success" role="status">
        </div>  
        <div class="spinner-grow text-success" role="status">
</div>
<div class="spinner-grow text-success" role="status">
</div>
    </div> );
}
 
export default Loading;