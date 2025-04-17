
const url = "http://localhost:5000/api/user/signin";
const fetchAllPicnicsUrl = "http://localhost:5000/api/picnics/getpicnics";
export const signUpRequest = async (data: any) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
        console.log("i donnttt knoooww")
        const errorText = await res.text();
    console.error('Server error:', errorText);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  
    return res.json();
  };

  export const loginRequest = async (data: any) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    
      return res.json();
    
  };

  export const fetchPicnics = async () => {
    const res = await fetch(fetchAllPicnicsUrl)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  };
  