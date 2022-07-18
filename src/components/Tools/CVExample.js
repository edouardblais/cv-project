import uniqid from 'uniqid'

const CVexample = {
    firstname:'Chris',
    lastname: 'Sharma',
    title: 'Professional Rock Climber',
    address: '123 Roca Street, Barcelona, Spain',
    phonenumber: '(123) 456-7890',
    email: 'chrissharma@coolmail.com',
            
    position:'',
    company:'',
    workfrom:'',
    workto:'',
    description:'',
    workid:uniqid(),

    workexperience:[
                {
                    position:'Youtube Influencer', 
                    company:'SharmaChannel', 
                    workfrom:'2019',
                    workto:'present',
                    description:'Released hundreds of trendy rock climbing videos and acquired overs 10 billions subscribers',
                    workid:uniqid(),
                },
                {
                    position:'Pretty Good Professional Rock Climber', 
                    company:'Evolv Bad Shoes', 
                    workfrom:'2013',
                    workto:'2019',
                    description:'Climbed lots of pretty sick rocks all over this magnicifent floating cosmic ball',
                    workid:uniqid(),
                },
                {
                    position:"World's Best Rock Climber", 
                    company:'Petzl Equipment', 
                    workfrom:'2000',
                    workto:'2013',
                    description:'Climbed the hardest ways up rocks without falling',
                    workid:uniqid(),
                },
                {
                    position:"Comp Kid", 
                    company:'Five Ten Shoes', 
                    workfrom:'1995',
                    workto:'2000',
                    description:'Destroyed the plastic climbing competition scene until I got bored of it',
                    workid:uniqid(),
                }
                ],

    university:'',
    degree:'',
    educationfrom:'',
    educationto:'',
    educationid:uniqid(),

    education:[
                {
                    university:'University of Life',
                    degree:'B.Sc. in Finger Strength',
                    educationfrom:'1997',
                    educationto:'2000', 
                    educationid:uniqid(),
                },
                {
                    university:'Santa Cruz High School',
                    degree:'Botanics',
                    educationfrom:'1990',
                    educationto:'1996', 
                    educationid:uniqid(),
                },
            ],
}

export default CVexample