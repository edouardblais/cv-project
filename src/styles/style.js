const general = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    fontSize:'1rem',
    boxSizing:'border-box',
    margin:'-8px',
    padding:'0',
    fontFamily:'Roboto, sans-serif',
}

const main = {
    flex:'1',
    display:'flex',
    flexDirection:'row',
    padding:'3vh',
    backgroundColor:'#fee2e2',
    justifyContent:'center',
    gap: '5vh',

}

const header = {
    paddingLeft: '1vh',
    backgroundColor:'#fecaca',
    height:'7vh',
    display:'flex',
    justifyContent:'flexStart',
    alignItems:'center',
}

const footer = {
    textAlign:'center',
    fontStyle:'italic',
    backgroundColor:'#fecaca',
    height:'3vh',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
}

const cvform = {
    display:'flex',
    flexDirection:'column',
    gap:'1vh',
    width:'40vw',
    padding:'3vh',
    border:'2px solid black',
    borderRadius: '5px',
    backgroundColor:'#f8fafc',
}

const formsection = {
    display:'flex',
    flexDirection:'column',
    gap:'.5vh',
    minHeight:'5vh',
}

const previewpersonalinfo = {
    display:'flex',
    flexDirection:'column',
    gap:'.5vh',
    fontSize:'1rem',
    alignItems:'center',
    maxHeight:'15vh',
    minHeight:'15vh',
    color:'#525252',
}

const previewname = {
    fontSize:'2rem',
    fontWeight:'700',
}

const previewrole = {
    fontSize:'1.3rem',
    fontWeight:'bold',
    fontStyle:'italic',
}

const formtitle = {
    fontSize:'1.3rem',
    fontWeight:'bold',
}

const previewtitle = {
    fontSize:'1.3rem',
    fontWeight:'bold',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e5e5e5',
    color:'#525252',
}

const previewsubtitle = {
    fontWeight:'bold',
}

const previewsubsubtitle = {
    fontStyle:'italic',
}

const previeweducationandwork = {
    display:'flex',
    flexDirection:'column',
    gap:'.2vh',
}

const previewsubsection = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
}

const formsubsection = {
    display:'flex',
    flexDirection:'row',
    gap:'2vh',
}

const forminput = {
    flex:'1',
}

const images = {
    height:'2vh',
    width:'auto',
    filter:'invert(31%) sepia(0%) saturate(15%) hue-rotate(171deg) brightness(94%) contrast(85%)'
}

const previewpersoinfo = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'nowrap',
    minWidth:'30vw',
    justifyContent:'center',
}

const styles = {
    general:general,
    main:main,
    footer:footer,
    header:header,
    cvform:cvform,
    formsection:formsection,
    previewpersonalinfo:previewpersonalinfo,
    previewname:previewname,
    previewtitle:previewtitle,
    previewrole:previewrole,
    formtitle:formtitle,
    previewsubtitle:previewsubtitle,
    previewsubsubtitle:previewsubsubtitle,
    previeweducationandwork:previeweducationandwork,
    previewsubsection:previewsubsection,
    formsubsection:formsubsection,
    forminput:forminput,
    images:images,
    previewpersoinfo:previewpersoinfo,
}

export {styles}