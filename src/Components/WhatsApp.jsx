import React from 'react';

const WhatsApp = () => {
    
    const imageUrl = "https://media.istockphoto.com/id/903294148/vector/speech-bubbles-for-comment.jpg?s=612x612&w=0&k=20&c=jha80JpZdZ7hSRGNBbTqmiLoqZOoK6nHvt23RXQ4I1Y=";
  // Sample data for WhatsApp groups
  const whatsappGroups = [
    { id: 1, photo: imageUrl, name: 'Q Block', members: 50 },
    { id: 2, photo: imageUrl, name: 'R Block', members: 30 },
    { id: 3, photo: imageUrl, name: 'S Block', members: 25 },
    { id: 4, photo: imageUrl, name: 'T Block', members: 40 },
    { id: 5, photo: imageUrl, name: 'F Block', members: 35 },
    { id: 6, photo: imageUrl, name: 'G Block', members: 20 },
    { id: 7, photo: imageUrl, name: 'M Block', members: 45 },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom:"20px"}}>
      {whatsappGroups.map(group => (
        <div key={group.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', cursor:'pointer'}}>
          <img src={group.photo} alt="Group" style={{ width: '100%', borderRadius: '5px' }} />
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ margin: '0', fontSize: '18px' }}>{group.name}</h3>
            <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#888' }}>{group.members} Members</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatsApp;
