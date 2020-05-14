import React, { useState, useEffect } from 'react';
import config from './config.js'

const firebase = require('firebase')
//firebase.initializeApp(config)

let jsonBody = {
    value1: "1",
    value2: "2"
}

// function FeedbackPage() {

//     const [data, setData] = useState([])
//     const [name, setName]=useState("")
//     const [des, setDes]=useState("")
//     const [vis, setVis]=useState("")
//     const [shouldRender, setShouldRender] = useState(true)
//     const sample = ['hi', 'hello', 'hey']

//     jsonBody = {
//         data: "1",
//         data: "2"
//     }
//     const submitFunc = () => {
//         console.log("Clicked")
//         firebase.database().ref('messages').push().set({
//             "name": name,
//             "des": des,
//             "vis": vis
//         })
//         console.log(vis)
//         setName("")
//         setDes("")
//         alert("Your Question/Comment has been received. Thank you for checking out my webpage!")   }
//     //firebase.initializeApp(config)
//     const handleChange = (e) => {
//         setVis(e.target.value)
//     }
//     useEffect(() => {
//         console.log(firebase.apps.length)
//         if (!firebase.apps.length) {
//             firebase.initializeApp(config)
//         } 
//         //get a reference to the database
//         let ref = firebase.database().ref('data')

//         //retrieve its data
//         ref.on('value', snapshot => {
//             console.log("Inside on")
//              //this is your call back function
//                  //state will be a JSON object after this
//              //set your apps state to contain this data however you like
//              const state = snapshot.val()
//              //since i use react 16, i set my state like this
//              //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
//              setData(state)
//         })

//     }, [shouldRender]);
//     // do this where we submit the form: setShouldRender(!shouldRender)

//     return (
//         <div>
//             <h1>Submit Feedback</h1>
//             <h2>
//                 {data}
//             </h2>
//             {sample.map((s, index) => (
//                 <p>
//                     {s}
//                 </p>
//             ))}
//             <form onSubmit={submitFunc}>
//                         <label>
//                             Name
//                             <input type="text" value={name} onChange={event => setName(event.target.value)}/>
//                         </label>
//                         <label>
//                             *Description about yourself
//                             <input type="text" value={des} onChange={event => setDes(event.target.value)}/>
//                         </label>
//                         <div>
//                             <p>Would you like your message to be private?</p>
//                             <select name="visibility" onChange={handleChange}>
//                             <option value={vis} selected disabled hidden> Select an Option </option>
//                                 <option value="Yes">Yes</option> 
//                                 <option value="No">No</option> 
//                             </select>
                            
//                         </div>                      
//                         <input type="Submit" value="Submit"/>
//                     </form>
//         </div>
//     )
// }

export class FeedbackPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: "", 
                description: "", 
                message: "",  
                visibility: "", 
                email: ""
            },
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      componentDidMount(){
        firebase.initializeApp(config)
        let ref = firebase.database().ref('data')
        ref.on('value', snapshot => {
          const data = snapshot.val()
          this.setState({data: data})
        })
      }

      

      componentDidUpdate(prevProps, prevState, snapshoyt){
      //only call set state here if it is wrapped in a condition
      //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
      if(this.state.shouldUpdate != prevState.shouldUpdate){
        //same code as above to retrieve the data 
        firebase.initializeApp(config)
        let ref = firebase.database().ref('data')
        ref.on('value', snapshot => {
          const data = snapshot.val()
          this.setState({data: data}) 
        })
        console.log("Inside componentDidUpdate")
        console.log(this.state.visibility)
      }
    }   

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('data');
        const item = {
            name: this.state.name,
            description: this.state.description,
            message: this.state.message,  
            visibility: this.state.visibility, 
            email: this.state.email
        
        }

        itemsRef.push(item);
        console.log(this.state.visibility)
        alert('Form was Successfull Summited!');
        this.setState({
            name: "", 
            description: "", 
            message: "",  
            visibility: "", 
            email: ""
        });
      }
   
    render(){
    return (     
        <form onSubmit={this.handleSubmit}>
            <h2>Submission Form</h2>
            <div>
                <p>What is you name?</p>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} minLength='5' maxLength='20' required/>
            </div>

            <div>
                <p>Offer a short description of yourself.</p>
                <input type="text" name="description" onChange={this.handleChange} maxLength='100' value={this.state.description} />
            </div>

            <div>
                <p>What is your message?</p>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} minLength='15' maxLength='500' required/>
            </div>

            <div>
                <p>Would you like your message to be private?</p>
                <select name="visibility" onChange={this.handleChange} value={this.state.visibility} required="true">
                <option value="" selected disabled="true"> Select an Option </option>
                    <option value="Yes">Yes</option> 
                    <option value="No">No</option> 
                </select>
                
            </div>

            <div>
                <p>What is your email?</p>
                <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
            </div>
            <button>Summit Form</button>
        </form>
    )
    }
  
}
export default FeedbackPage;

