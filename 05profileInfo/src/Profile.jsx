import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);

  const [tempName, setTempName] = useState(name);
  const [tempAge, setTempAge] = useState(age);

  const [isUpdated, setIsUpdated] = useState(false);

  // Function to handle the update when the "Update" button is clicked
  const handleUpdate = () => {
    setIsUpdated(true);

    setName(tempName);
    setAge(tempAge);
  };

  return (
    <div>
      <h2>User Profile</h2>

      {isUpdated ? (
        <div>
          <p>New Name: {name}</p>
          <p>New Age: {age}</p>
        </div>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      )}

      <div>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="ageInput">Age: </label>
        <input
          type="number"
          id="ageInput"
          value={tempAge}
          onChange={(e) => setTempAge(parseInt(e.target.value, 10))}
        />
      </div>

      <button onClick={handleUpdate}>Update</button>

      {isUpdated && (
        <div style={{ marginTop: 10, color: 'green' }}>
          User information updated successfully!
        </div>
      )}

    </div>
  );
}

export default UserProfile;
