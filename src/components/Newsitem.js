import React from 'react'

const Newsitem = (props)=> {
    
        let { title, description, imageUrl, newsUrl} = props;
        return (
            <>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body" id='carrd' >
                             <h5 className="card-title">{title}</h5>
                             <p className="card-text">{description}</p>
                             <a href={newsUrl} target ="rel_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </>
        )
    
}

export default Newsitem