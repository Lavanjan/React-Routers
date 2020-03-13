import React from 'react'   
import Rainbow from "../hoc/Rainbow"

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/')
    },2000);
    return(
        <div className="container">
            <h4 className = "center">Contact</h4>
            <p>Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing. Writers write persuasive and argument paragraphs because their purpose is to persuade or convince someone. Their point is that their reader should see things a particular way and possibly take action on that new way of seeing things. Writers write paragraphs of comparison because the comparison will make their point clear to their readers.</p>
        </div>
    )
}

export default Rainbow(Contact)