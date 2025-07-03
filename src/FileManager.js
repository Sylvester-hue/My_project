import './FileManager.css'; // optional if you want to extract styles

const FileManager = () => {
  const files = [
    {
      name: 'DatabaseConnectivityJAVA.zip',
      type: 'ZIP',
      size: '2.7 MB',
      owner: 'C++-MWF-9-11',
      uploadedBy: 'Mr. Zishan',
      uploadDate: '7 April',
      modifiedDate: '7 April',
    },
    // Add more items as needed
  ];

  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', backgroundColor: '#E0E7FF' }}>
      {/* Sidebar */}
      <aside style={{ width: '220px', padding: '20px', backgroundColor: '#fff' }}>
        <h2>CODE</h2>
        <nav>
          <p><strong>Main</strong></p>
          <p>Batch</p>
          <p>Note</p>
          <p style={{ marginTop: '20px' }}><strong>Support</strong></p>
          <p>Feedback</p>
          <p>Having issues</p>
        </nav>
      </aside>

      {/* Main Section */}
      <main style={{ flex: 1, padding: '20px' }}>
        <header style={{ marginBottom: '20px' }}>
          <h3>Welcome back, <strong>Samuel Tairu</strong></h3>
        </header>

        <section>
          

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
            {files.map((file, idx) => (
              <div key={idx} style={{
                border: '1px solid #333',
                borderRadius: '10px',
                padding: '10px',
                width: '950px',
                backgroundColor: '#fff',
              }}>
                
                <p><h2>All files</h2>All files are displayed here
                <div style={{marginLeft:'80%', marginTop:'0px',alignSelf:'top' }}>
                    <button style={{color:'blue',borderRadius:'5px',margin:'2px',cursor:'pointer'}}>♻Upload files</button>
                    <button style={{color:'#333',hight:'0', borderRadius:'5px',cursor:'pointer'}}> ➕ create</button>
                </div>
                
                </p>
                
                <p><strong>{file.name}</strong></p>
                <p>{file.size} • {file.type}</p>
                <br/>
                <table border={'0px'} style={{borderSpacing:'2em'}}>
                 <tr>
                    <td><input type='checkbox' value='check' placeholder='✔'/></td>
                    <td>Name</td>
                    <td>Owner</td>
                    <td>Uploaded </td>
                    <td>File Size</td>
                    <td>Date Upload</td>
                    <td>Modified</td>
                    </tr>   
                    <tr>
                        <td><p>ptr1{file.type}</p></td>
                        <td> <p>{file.owner}</p></td>
                        <td><p>{file.uploadedBy}</p></td>
                        <td> <p>{file.size}</p></td>
                        <td> <p>{file.uploadDate}</p></td>
                        <td><p>{file.modifiedDate}</p></td>
                </tr> 
                </table>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FileManager