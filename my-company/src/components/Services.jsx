   function Services() {
     const style = {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#e74c3c',
        minHeight: '80vh',
        color: 'white',
    };
     return (
       <div style={{ style }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;