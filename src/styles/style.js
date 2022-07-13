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
    backgroundColor:'#e7e5e4',
    justifyContent:'center',
    gap: '5vh',

}

const header = {
    paddingLeft: '6vw',
    backgroundColor:'#fecaca',
    height:'7vh',
    display:'flex',
    justifyContent:'flexStart',
    alignItems:'center',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    color:'white',
    fontSize:'3vh',
}

const footer = {
    fontStyle:'italic',
    backgroundColor:'#fecaca',
    height:'3vh',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
    color:'black',
    fontWeight:'bold',
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
    flex:'1',
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
    gap:'2vh',
    padding:'1vh',
}

const formsubsection = {
    display:'flex',
    flexDirection:'row',
    gap:'1vh',
}

const forminput = {
    flex:'1',
}

const previewpersoinfo = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'nowrap',
    minWidth:'30vw',
    justifyContent:'center',
}

const previewmailandphone = {
    display:'flex',
    flexDirection:'row',
    gap:'1vh',
    justifyContent:'center',
}

const previewindivmailandphone = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
}

const previewjobdescription = {
    paddingLeft:'1vh',
    color:'black',
}

const images = {
    height:'2vh',
    width:'auto',
    filter:'invert(31%) sepia(0%) saturate(15%) hue-rotate(171deg) brightness(94%) contrast(85%)'
}

const button = {
    fontFamily:'Roboto, sans-serif',
    width:'10vw',
    fontWeight:'bold',
    backgroundColor:'#fee2e2',
    cursor:'pointer',
    border:'1px solid #b91c1c',
    color:'#b91c1c',
}

const buttoncontainer ={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

const printsection = {
    display:'flex',
    flexDirection:'column',
    gap:'2vh',
    alignItems:'center',
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
    previewjobdescription:previewjobdescription,
    button:button,
    buttoncontainer:buttoncontainer,
    previewmailandphone:previewmailandphone,
    previewindivmailandphone:previewindivmailandphone,
    printsection:printsection,
}

export {styles}