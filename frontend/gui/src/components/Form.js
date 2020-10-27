import React from 'react'
import { Input, Button } from 'antd';
import axios from 'axios'

class CustomForm extends React.Component{

    handleFormSubmit = (event, requestType, articleID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType){

            case 'POST':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                    })
                    .then(res => console.log(res),
                this.props.history.push(`/`)
                    
                    )
                    .catch(error => console.err(error))


            case'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                    })
                    .then(res => console.log(res), 
                    this.props.history.push(`/`)
                    )
                    .catch(error => console.err(error))

            default:
        }

        console.log(title, content)
    }

    render(){
        return(
            <div>
                <form 
                    onSubmit={ (event)=> this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID
                    )}>
                    <label>
                        <h3>Title</h3>
                        <Input name="title" placeholder="Title" />
                    </label>
                    <p></p>
                    <label>
                    <h3>Content</h3>
                        <Input name="content" placeholder="Write content . . . . " />
                    </label>
                    <p></p>
                    {/* <button type="submit" style={{backgroundColor: "lightskyblue"}} >{this.props.btnText}</button> */}
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>

                </form>
            </div>
        )
    }
}
export default CustomForm
