import React from 'react';
import Header from '../../components/Home/Header';
import { Link } from 'react-router-dom';
import './style.css';

const Upload = () => {

  return (
    <div>
        <Link className='upload-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {/* Page Header */}
        <Header title={"Upload"}/>
        <div className='upload-wrap'>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe0vPjVs5nA9FmBeMjNjCDR4pNdO5x3suLpnb6iP3_Ne0lkwA/viewform?embedded=true" 
                width="100%"
                height="2291" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title="update"
            >
                    載入中…
            </iframe>
        </div>
    </div>
  );
};

export default Upload;