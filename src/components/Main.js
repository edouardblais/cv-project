import React, { useState } from 'react'
import CVform from './CVform/CVform'
import CVpreview from './CVpreview/CVpreview'
import uniqid from 'uniqid'
import {styles} from '../styles/style'
import { useReactToPrint } from 'react-to-print';
import Button from './Tools/button'
import CVexample from './Tools/CVExample'

const Main = () => {
    
    const [cv, setCV] = useState(CVexample)

    const inputPersonalChange = (e) => {
        setCV((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const inputWorkChange = (e) => {
        setCV((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            workid:uniqid(),
        }))
    }

    const addWorkExperience = () => {
        const newworkexperience = {
            position: cv.position,
            company: cv.company,
            workfrom: cv.workfrom,
            workto: cv.workto,
            description: cv.description,
            workid: cv.workid,
        }
        setCV((prevState) => ({
            ...prevState,  
            workexperience: [...cv.workexperience, newworkexperience],
            position:'',
            company:'',
            workfrom:'',
            workto:'',
            description:'',
            workid:uniqid(),
        }))
    }

    const deleteWorkExperience = (e) => {
        const newwork = cv.workexperience.filter((element) => {
            return e.target.id !== element.workid
        })
        setCV((prevState) => ({
            ...prevState,  
            workexperience: [...newwork],
        }))
    }

    const inputEducationChange = (e) => {
        setCV((prevState) => ({
            ...prevState,  
            [e.target.name]: e.target.value,
            educationid:uniqid(),
        }))
    }

    const addDegree = () => {
        const newdegree = {
            university: cv.university,
            degree: cv.degree,
            educationfrom: cv.educationfrom,
            educationto: cv.educationto,
            educationid: cv.educationid,
        }
        setCV((prevState) => ({
            ...prevState,  
            education: [...cv.education, newdegree],
            university:'',
            degree:'',
            educationfrom:'',
            educationto:'',
            educationid:uniqid(),
        }))
    }

    const deleteDegree = (e) => {
        const neweducation = cv.education.filter((element) => {
            return e.target.id !== element.educationid
        })
        setCV((prevState) => ({
            ...prevState,  
            education: [...neweducation]
        }))
    }

    const reset = () => {
        setCV((prevState) => ({
            ...prevState,  
            firstname:'First',
            lastname: 'Name',
            title: 'Role',
            address: '123 Street, City, Country',
            phonenumber: '(###) ###-####',
            email: 'youremail@somethingmail.com',
            

            position:'',
            company:'',
            workfrom:'',
            workto:'',
            description:'',
            workid:uniqid(),

            workexperience:[],

            university:'',
            degree:'',
            educationfrom:'',
            educationto:'',
            educationid:uniqid(),

            education:[],
        }))
    }

    const handlePrint = useReactToPrint({
    content: () => ref.current,
    });
    const ref = React.createRef();
      

        return (
            <div style={styles.main}>
                <div style={styles.printsection}>
                    <CVform 
                        cv={cv}
                        inputPersonalChange={inputPersonalChange}
                        inputWorkChange={inputWorkChange}
                        addWorkExperience={addWorkExperience}
                        deleteWorkExperience={deleteWorkExperience}
                        inputEducationChange={inputEducationChange}
                        addDegree={addDegree}
                        deleteDegree={deleteDegree}
                    />
                    <Button onClick={reset} name='Reset Resume'/>
                </div>
                <div style={styles.printsection}>
                    <CVpreview cv={cv} ref={ref}/>
                    <Button onClick={handlePrint} name='Get Resume'/>
                </div> 
            </div>
        )
    }

export default Main