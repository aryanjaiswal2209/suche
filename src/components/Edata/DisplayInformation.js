import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Container, Wrapper, Card, H1} from './displayElements'
import { db } from '../../Firebase/Firebase';
import Dnavbar from './Dnavbar'

const DisplayInformation = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setArticles(articles);
          console.log(articles);
        });
      }, []);

  return (
    <div>
        <Dnavbar/>
    <Container>
        
            <center> <H1>Applicant Details</H1></center>
    
        <Wrapper>
    
     
         
        {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            Name,
            Email,
            Lastjob,
            imageUrl,
            Lastcompany,
            createdAt
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row">
                <div className="col-3">
                
                    {/* <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 180 }}
                    /> */}
                   
                 
                </div>
                <Card>
              
                
                
                  
                  <h3 >Name:{Name}</h3>
                  <h3>Email:{Email}</h3>
                  <h5 >{Lastjob} at {Lastcompany}</h5>
                  <p>Applied on {createdAt.toDate().toDateString()}</p>
                  <a href={imageUrl}> 
                    <button  className='btn btn-custom btn-lg page-scroll'>Get resume</button>
                  </a>
                    
                   
                
                </Card>
              </div>
            </div>
          )
        )
      )}
             
             </Wrapper>
    </Container>
    </div>
  )
}

export default DisplayInformation