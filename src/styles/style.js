const general = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    fontSize:'1rem',
    boxSizing:'border-box',
    margin:'-8px',
    padding:'0'
}

const main = {
    flex:'1',
    display:'flex',
    flexDirection:'row',
    padding:'1vh',
    backgroundColor:'#fef2f2',
    height:'90vh',

}

const header = {
    paddingLeft: '1vh',
    backgroundColor:'#fecaca',
    height:'6vh',
    display:'flex',
    justifyContent:'flexStart',
    alignItems:'center',
}

const footer = {
    textAlign:'center',
    fontStyle:'italic',
    backgroundColor:'#fecaca',
    height:'4vh',
    fontSize:'1.5rem',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
}

const cvform = {
    display:'flex',
    flexDirection:'column',
    gap:'1vh',
    width:'50vw',
}

const formsection = {
    display:'flex',
    flexDirection:'column',
    gap:'.5vh',
}

const styles = {
    general:general,
    main:main,
    footer:footer,
    header:header,
    cvform:cvform,
    formsection:formsection,
}

export {styles}