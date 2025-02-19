const backButtonStyle = {
    padding: '1rem',
    backgroundColor: 'greenyellow',
    color: 'black',
    border: '1px solid black',
    width: '50px',
    height: '25px',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    overflow: 'none'
}

const goBack = ()=>{
    window.location.assign('/')
   
}

const paddingStyle = {
    padding: '2rem',
    backgroundColor: 'lightgray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
};

export {
    backButtonStyle,
    goBack,
    paddingStyle
}